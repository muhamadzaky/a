import CardProjects from '@components/card/CardProjects';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { t } from '@utils/t';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container, Input, InputGroup, InputGroupText } from 'reactstrap';

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
    <PrivateLayout title="Projects">
      <Container className="my-3">
        <div className="project-header border-bottom">
          <h1>{menu?.projects}</h1>
          <InputGroup className="my-3">
            <Input placeholder={search} value={query} onChange={(e) => setQuery(e.target.value)} />
            <InputGroupText>
              <AiOutlineSearch />
            </InputGroupText>
          </InputGroup>
        </div>

        <div className="projects__cards-wrapper mt-5">
          {dataProject()?.map((item) => (
            <CardProjects key={item?.id} data={item} />
          ))}
        </div>
      </Container>
    </PrivateLayout>
  );
};

export default ProjectPage;

export async function getServerSideProps() {
  const projectsRes = await fetch(`${process.env.API_URL}projects`);
  let projects = await projectsRes.json();

  return {
    props: {
      projects
    }
  };
}
