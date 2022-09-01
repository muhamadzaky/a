import CardEducation from '@components/card/CardEducation';
import CardExperiences from '@components/card/CardExperiences';
import CardProjects from '@components/card/CardProjects';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import ModalProject from '@components/modal/ModalProject';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Button, Container, Tooltip } from 'reactstrap';

const Index = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { about, banner, menu, meta, seeAll, sortedByLastProject } = t[locale];
  const { isDesktop } = useResponsive();
  const { educations, skills, experiences, projects } = props;

  const [hasDetailProject, setHasDetailProject] = useState(false);
  const [detailProjectData, setDetailProjectData] = useState();
  const [detailProjectLoading, setDetailProjectLoading] = useState(false);

  const handleClickMailMe = () => {
    window.open(
      "mailto:muhamadzaky1023@gmail.com?cc=zakysteinfeld@outlook.com&amp;subject=Hi! I'm interested with you.&amp;body="
    );
  };

  const handleClickDownloadCV = () => {
    window.open(
      'https://drive.google.com/drive/folders/1IQ0Vc28mkXClsFYPOrKhhfCP6rPn7o2-?usp=sharing'
    );
  };

  const handleClickSeAll = () => {
    router.push('/project');
  };

  const handleClickToggleDetailModal = async (toggle, data) => {
    setDetailProjectLoading(true);

    if (toggle === 'open') {
      await setDetailProjectData(data);
      await setHasDetailProject(true);

      setDetailProjectLoading(false);
    } else {
      await setHasDetailProject(false);
      setDetailProjectData();
    }
  };

  return (
    <PrivateLayout title={meta?.name}>
      <Container className="banner">
        <img className="banner__image" src="/assets/images/banner-1.png" alt="banner" />
        <div className="banner__text">
          <span>{banner?.hello}</span>
          &nbsp;
          <span>{banner?.imZaky}</span>
          <br />
          <span>{banner?.jobDesk}</span>
          <br />
          <div className="mt-3" dangerouslySetInnerHTML={{ __html: about }}></div>
          <div className="mt-3">
            <Button
              color="primary"
              className="rounded-pill mt-1 me-2 px-3"
              onClick={handleClickMailMe}>
              {banner?.mailMe}
            </Button>
            <Button
              color="success"
              className="rounded-pill mt-1 px-3"
              outline
              onClick={handleClickDownloadCV}>
              {banner?.downloadCV}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="d-flex justify-content-center my-5">
        <AiOutlineArrowDown onClick={() => Helper.scrollTo('educations', -100)} />
      </Container>

      <Container className="educations position-relative">
        <h1>{menu?.educations}</h1>
        <div className="cards-wrapper">
          {educations?.map((item) => (
            <CardEducation key={item?.id} data={item} />
          ))}
        </div>
        {isDesktop && (
          <>
            <div className="line" />
            <div className="line2" />
            <div className="line3" />
          </>
        )}
      </Container>

      <Container className="skills text-center">
        <h1>{menu?.skills}</h1>
        <div className="d-flex justify-content-center align-items-center mt-5">
          {skills
            ?.filter((x) => x.show === true)
            .sort((a, b) => {
              return a.type < b.type;
            })
            .map((item) => (
              <>
                <img
                  src={item?.logo}
                  alt={item?.name}
                  id={`tooltip-${item?.id}`}
                  className="image-skills"
                />
                <Tooltip flip autohide target={`tooltip-${item?.id}`} placement="bottom">
                  {item?.name}
                </Tooltip>
              </>
            ))}
        </div>
      </Container>

      <Container className="experiences">
        <h1>{menu?.experiences}</h1>
        <div className="experiences__cards-wrapper">
          {experiences
            ?.filter((x) => x.show === true)
            .map((item) => (
              <CardExperiences key={item?.id} data={item} />
            ))}
        </div>
        <div className="bg-decor" />
      </Container>

      <Container className="projects">
        <div className="d-flex justify-content-between align-items-center">
          <h1>
            {menu?.projects}
            <h6>{sortedByLastProject}</h6>
          </h1>
          <span role="button" onClick={handleClickSeAll}>
            {seeAll}
          </span>
        </div>
        <div className="projects__cards-wrapper mt-5">
          {projects
            ?.sort((a, b) => {
              return b.id - a.id;
            })
            ?.slice(0, 6)
            .map((item) => (
              <CardProjects
                key={item?.id}
                data={item}
                onClickDetail={() => handleClickToggleDetailModal('open', item)}
              />
            ))}
        </div>
      </Container>

      <ModalProject
        data={detailProjectData}
        loading={detailProjectLoading}
        isOpen={hasDetailProject}
        toggle={() => handleClickToggleDetailModal('close')}
      />
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
