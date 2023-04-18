import BottomSheetProjectDetail from '@components/bottomsheet/BottomSheetProjectDetali';
import CardProjects from '@components/card/CardProjects';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import ModalProject from '@components/modal/ModalProject';
import { Amplitude } from '@utils/Amplitude';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Input, Row } from 'reactstrap';

const ProjectPage = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { menu, search } = t[locale];
  const { projects } = props;
  const { isDesktop } = useResponsive();

  const [query, setQuery] = useState('');
  const [hasDetailProject, setHasDetailProject] = useState(false);
  const [detailProjectData, setDetailProjectData] = useState();
  const [detailProjectLoading, setDetailProjectLoading] = useState(false);

  const dataProject = () => {
    const list =
      projects.length > 0
        ? projects
            .filter((dt) => dt?.name?.toLowerCase().includes(query.toLowerCase()))
            .map((item) => {
              item = {
                ...item
              };
              return item;
            })
        : [];

    return list;
  };

  const handleClickToggleDetailModal = async (toggle, data) => {
    setDetailProjectLoading(true);
    Amplitude('click project card', {
      page: 'project page',
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

  const handleSearchFocus = () => {
    Amplitude('search focused', {
      page: 'project page',
      url: window.location.href ?? ''
    });
  };

  const handleSearch = Helper.debounce((e) => {
    const { value } = e.target;

    if (value) {
      Amplitude('searching project', {
        page: 'project page',
        url: window.location.href ?? '',
        query: value ?? ''
      });
    }

    setQuery(value);
  }, 300);

  useEffect(() => {
    Amplitude('project page viewed', {
      page: 'project page',
      url: window.location.href ?? ''
    });
  }, []);

  return (
    <PrivateLayout title="Projects">
      <Container className="my-3">
        <Row className="project-header">
          <Col lg={9}>
            <h1>{menu?.projects}</h1>
          </Col>
          <Col lg={3}>
            <Input placeholder={search} onChange={handleSearch} onFocus={handleSearchFocus} />
          </Col>
        </Row>

        <div className="projects__cards-wrapper mt-5">
          {dataProject()?.map((item) => (
            <CardProjects
              key={item?.id}
              data={item}
              onClickDetail={() => handleClickToggleDetailModal('open', item)}
            />
          ))}
        </div>
      </Container>

      {isDesktop ? (
        <ModalProject
          data={detailProjectData}
          loading={detailProjectLoading}
          isOpen={hasDetailProject}
          toggle={() => handleClickToggleDetailModal('close')}
          // source="project-page"
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
  const projectsRes = await fetch(`${process.env.API_URL}projects`);
  let projects = await projectsRes.json();

  return {
    props: {
      projects
    }
  };
}

export default ProjectPage;
