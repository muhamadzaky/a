import { ProjectCard } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { t } from '@utils/t';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Col, Container, Input, InputGroup, InputGroupText, Row } from 'reactstrap';

const ProjectPage = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { menu, search } = t[locale];
  const { projects } = props;

  const [query, setQuery] = useState('');

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

  return (
    <PrivateLayout title="Project">
      <Container className="projects">
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={12} md={9} lg={9}>
            <h1>{menu?.projects}</h1>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3}>
            <InputGroup className="mt-2">
              <Input
                placeholder={search}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <InputGroupText>
                <AiOutlineSearch />
              </InputGroupText>
            </InputGroup>
          </Col>
        </Row>

        <hr />

        <div className="row">
          {dataProject().map((item) => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={item?.id}>
              <ProjectCard data={item} onClick={() => router.push(`/project/${item?.id}`)} />
            </div>
          ))}
        </div>
      </Container>
    </PrivateLayout>
  );
};

export default ProjectPage;

export async function getServerSideProps() {
  const projectsRes = await fetch(`${process.env.API_URL}projects`);
  const projects = await projectsRes.json();

  return {
    props: {
      projects
    }
  };
}
