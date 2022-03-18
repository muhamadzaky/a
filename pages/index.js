import { EducationCard, ProjectCard } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { t } from '@utils/t';
import { useRouter } from 'next/router';
import { Button, Container } from 'reactstrap';

const Index = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { about, banner, menu, meta, seeAll } = t[locale];
  const { educations, skills, experiences, projects } = props;

  return (
    <>
      <PrivateLayout title={meta?.name}>
        <div className="banner banner-wrapper d-flex flex-column align-items-center justify-content-center">
          <img className="banner-image" src="/assets/images/banner-1.png" alt="banner" />
          <div>
            <span>{banner?.hello}</span>
            &nbsp;
            <span>{banner?.imZaky}</span>
          </div>
          <span>{banner?.jobDesk}</span>

          <div className="mt-2">
            <Button color="primary" className="rounded-pill me-1 px-3">
              {banner?.mailMe}
            </Button>
            <Button color="success" className="rounded-pill ms-1 px-3" outline>
              {banner?.downloadCV}
            </Button>
          </div>
        </div>

        <Container className="about">
          <div dangerouslySetInnerHTML={{ __html: about }}></div>
        </Container>

        <Container className="educations row">
          <div className="col-sm-12 col-md-6 col-lg-6 p-0">
            <h1 className="title">
              {menu?.educations}
              <hr />
            </h1>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 p-0">
            {educations?.map((item) => (
              <EducationCard key={item?.id} data={item} />
            ))}
          </div>
        </Container>

        <Container className="skills">
          <h1 className="title">
            <hr />
            {menu?.skills}
          </h1>

          <div className="row">
            {skills
              ?.filter((x) => x.show === true)
              .sort((a, b) => {
                return a.type < b.type;
              })
              .map((item) => (
                <div
                  className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center my-3"
                  key={item?.id}
                  onClick={() => (item?.link ? window.open(item?.link, '_blank') : false)}
                  style={{ cursor: 'pointer' }}>
                  <img
                    src={item?.logo}
                    alt={item?.title}
                    width={100}
                    style={{ height: 'fit-content' }}
                  />
                </div>
              ))}
          </div>
        </Container>

        <Container className="experiences">
          <h1 className="title">
            <hr />
            {menu?.experiences}
          </h1>

          <div className="d-flex justify-content-center row">
            {experiences
              ?.filter((x) => x.show === true)
              .map((item) => (
                <div
                  className="col-sm-12 col-md-4 col-lg-4 my-3 d-flex justify-content-center align-items-center"
                  key={item?.id}
                  onClick={() => router.push(`/work/${item?.id}`)}
                  style={{ cursor: 'pointer' }}>
                  <img
                    src={`/assets/images/company/${item?.file}`}
                    alt={item?.name}
                    style={{
                      width: 100,
                      height: 'auto'
                    }}
                  />
                </div>
              ))}
          </div>
        </Container>

        <Container className="projects">
          <h1 className="title">
            {menu?.projects}
            <hr />
          </h1>

          <div className="row">
            <a href="/project" className="text-end">
              {seeAll}
            </a>
            {projects
              ?.sort((a, b) => {
                return b.id - a.id;
              })
              .slice(0, 6)
              .map((item) => (
                <div className="col-sm-12 col-md-4 col-lg-4" key={item?.id}>
                  <ProjectCard data={item} onClick={() => router.push(`/project/${item?.id}`)} />
                </div>
              ))}
          </div>
        </Container>
      </PrivateLayout>
    </>
  );
};

export default Index;

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
