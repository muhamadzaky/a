import { ProjectCard } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { API } from '@utils/constant';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container, Input, InputGroup, InputGroupText } from 'reactstrap';

const ProjectPage = (props) => {
  const router = useRouter();
  const { projects } = props;

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const dataProject = () => {
    const list =
      data.length > 0
        ? data
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

  useEffect(() => {
    const res = API?.project;

    setData(res);
  }, []);

  console.log(projects);

  return (
    <PrivateLayout title="Project">
      <Container className="projects">
        <div className="d-flex justify-content-between">
          <h1>Project</h1>

          <InputGroup className="w-25">
            <Input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <InputGroupText>
              <AiOutlineSearch />
            </InputGroupText>
          </InputGroup>
        </div>

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
  const projects = projectsRes.json();

  return {
    props: {
      projects
    }
  };
}
