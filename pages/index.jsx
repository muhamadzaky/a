import BottomSheetProjectDetail from '@components/bottomsheet/BottomSheetProjectDetali';
import CardEducation from '@components/card/CardEducation';
import CardExperiences from '@components/card/CardExperiences';
import CardProjects from '@components/card/CardProjects';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import ModalProject from '@components/modal/ModalProject';
import { useAuth } from '@context/auth';
import { Amplitude } from '@utils/Amplitude';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import { filter, map } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineDownload, AiOutlineMail } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
import { Button, Col, Container, Row } from 'reactstrap';

const Index = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { about, banner, menu, meta, seeAll, sortedByLastProject } = t[locale];
  const { isDesktop } = useResponsive();
  const { educations, skills, experiences, projects } = props;
  const { isAuthenticated } = useAuth();

  const [hasDetailProject, setHasDetailProject] = useState(false);
  const [detailProjectData, setDetailProjectData] = useState();
  const [detailProjectLoading, setDetailProjectLoading] = useState(false);

  const handleClickMailMe = () => {
    Amplitude('click send email', {
      page: 'landing page',
      url: window.location.href ?? ''
    });

    window.open(
      "mailto:muhamadzaky1023@gmail.com?cc=zakysteinfeld@gmail.com&amp;subject=Hi! I'm interested with you.&amp;body="
    );
  };

  const handleClickDownloadCV = () => {
    Amplitude('click download cv', {
      page: 'landing page',
      url: window.location.href ?? ''
    });

    window.open(
      'https://drive.google.com/drive/folders/1IQ0Vc28mkXClsFYPOrKhhfCP6rPn7o2-?usp=sharing'
    );
  };

  const handleClickSeAll = () => {
    Amplitude('click see all project', {
      page: 'landing page',
      url: window.location.href ?? ''
    });

    router.push('/project');
  };

  const handleClickToggleDetailModal = async (toggle, data) => {
    setDetailProjectLoading(true);
    Amplitude('click project card', {
      page: 'landing page',
      url: window.location.href ?? '',
      item: {
        company_name: data?.company,
        project_name: data?.name
      },
      action: toggle === 'open' ? 'open detail' : 'close detail'
    });

    if (toggle === 'open') {
      await setDetailProjectData(data);
      await setHasDetailProject(true);

      setDetailProjectLoading(false);
    } else {
      await setHasDetailProject(false);
      setDetailProjectData();
    }
  };

  useEffect(() => {
    Amplitude('landing page viewed', {
      page: 'landing page',
      url: window.location.href ?? ''
    });
  }, []);

  return (
    <PrivateLayout className="landing" title={meta?.name} scrolledNav>
      <div transition-style="in:circle:hesitate" className="home">
        <Container className="home__container">
          <div className="text">
            <span>
              {banner?.hello} {banner?.imZaky}🙇🏻‍♂️
            </span>
            <span>{banner?.jobDesk}</span>
            <span dangerouslySetInnerHTML={{ __html: about }}></span>

            <div>
              <Button color="light" block={!isDesktop} onClick={handleClickMailMe}>
                <AiOutlineMail />
                &nbsp;
                {banner?.mailMe}
              </Button>
              <Button
                color="dark"
                className={isDesktop ? 'ms-2' : 'mt-2'}
                block={!isDesktop}
                onClick={handleClickDownloadCV}>
                <AiOutlineDownload />
                &nbsp;
                {banner?.downloadCV}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="educations">
        <div className="w-100">
          <h1>{menu?.educations}</h1>
          <div className={`card-wrapper mt-3 d-flex flex-${isDesktop ? 'row' : 'column'}`}>
            {map(educations, (item, index) => (
              <CardEducation data={item} key={index} />
            ))}
          </div>
        </div>
      </Container>

      <Container className="skills">
        <div className="w-100">
          <h1>{menu?.skills}</h1>
          <div className="card-wrapper">
            {map(
              filter(skills, (x) => x.show === true),
              (item) => (
                <div>
                  <img
                    src={item?.logo}
                    alt={item?.name}
                    id={`tooltip-${item?.id}`}
                    className="image-skills"
                  />
                  <Tooltip flip autohide target={`tooltip-${item?.id}`} placement="bottom">
                    {item?.name}
                  </Tooltip>
                </div>
              )
            )}
          </div>
        </div>
      </Container>

      <div className="experiences">
        <Container>
          <h1>{menu?.experiences}</h1>
          <div className="card-wrapper">
            {map(
              filter(experiences, (x) => x.show === true),
              (item) => (
                <CardExperiences data={item} />
              )
            )}
          </div>
        </Container>
      </div>

      <Container className="projects">
        <div className="d-flex justify-content-between align-items-center px-3">
          <h1>
            {menu?.projects}
            <span className="fz-xs">({projects?.length ?? 0})</span>
            <h6 className="pt-2 pe-2">{sortedByLastProject}</h6>
          </h1>
          <span role="button" onClick={handleClickSeAll}>
            {seeAll}
          </span>
        </div>
        <Row className="card-projects w-100">
          {map(projects?.sort((x, y) => y.id - x.id)?.slice(0, 6), (item) => (
            <Col lg={4} md={12} sm={12} className="my-3 card-projects__item" key={item?.id}>
              <CardProjects
                data={item}
                onClick={() => handleClickToggleDetailModal('open', item)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {isDesktop ? (
        <ModalProject
          data={detailProjectData}
          loading={detailProjectLoading}
          isOpen={hasDetailProject}
          toggle={() => handleClickToggleDetailModal('close')}
        />
      ) : (
        <BottomSheetProjectDetail
          isOpen={hasDetailProject}
          onDismiss={() => handleClickToggleDetailModal('close')}
          data={detailProjectData}
        />
      )}
    </PrivateLayout>
  );
};

export async function getServerSideProps() {
  const [educationRes, skillsRes, experiencesRes, projectsRes] = await Promise.all([
    fetch(`${process.env.API_URL}educations`),
    fetch(`${process.env.API_URL}skills`),
    fetch(`${process.env.API_URL}experiences`),
    fetch(`${process.env.API_URL}projects`)
  ]);

  const [educations, skills, experiences, projects] = await Promise.all([
    educationRes.json(),
    skillsRes.json(),
    experiencesRes.json(),
    projectsRes.json()
  ]);

  return {
    props: {
      educations,
      skills,
      experiences,
      projects
    }
  };
}

export default Index;
