import { EducationCard, ProjectCard } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { t } from '@utils/t';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Col, Container, Row } from 'reactstrap';

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

        <Container className="about my-5">
          <div dangerouslySetInnerHTML={{ __html: about }}></div>
        </Container>

        <Container className="educations row">
          <Col xs={12} sm={12} md={6} lg={6} className="p-0">
            <h1 className="title">
              {menu?.educations}
              <hr />
            </h1>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="p-0">
            {educations?.map((item) => (
              <EducationCard key={item?.id} data={item} />
            ))}
          </Col>
        </Container>

        <Container className="skills">
          <h1 className="title">
            <hr />
            {menu?.skills}
          </h1>

          <Row className="justify-content-center row-cols-3 g-4">
            {skills
              ?.filter((x) => x.show === true)
              .sort((a, b) => {
                return a.type < b.type;
              })
              .map((item) => (
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  className="frame d-flex justify-content-center align-items-center mx-3"
                  key={item?.id}
                  onClick={() => (item?.link ? window.open(item?.link, '_blank') : false)}
                  style={{ cursor: 'pointer' }}>
                  <img
                    src={item?.logo}
                    alt={item?.title}
                    width={100}
                    style={{ height: 'fit-content' }}
                  />
                </Col>
              ))}
          </Row>
        </Container>

        <Container className="experiences">
          <h1 className="title">
            <hr />
            {menu?.experiences}
          </h1>

          <Row className="justify-content-center row-cols-3 g-4">
            {experiences
              ?.filter((x) => x.show === true)
              .map((item) => (
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  className="frame d-flex justify-content-center align-items-center mx-3"
                  key={item?.id}
                  onClick={() => router.push(`/work/${item?.id}`)}
                  style={{ cursor: 'pointer' }}>
                  <img
                    src={`/assets/images/company/${item?.file}`}
                    alt={item?.name}
                    className="w-100"
                  />
                </Col>
              ))}
          </Row>
        </Container>

        <Container className="projects">
          <h1 className="title">
            {menu?.projects}
            <hr />
          </h1>

          <Row>
            <div className="text-end">
              <Link href="/project">{seeAll}</Link>
            </div>
            {projects
              ?.sort((a, b) => {
                return b.id - a.id;
              })
              .slice(0, 6)
              .map((item) => (
                <Col xs={12} sm={12} md={4} lg={4} key={item?.id}>
                  <ProjectCard data={item} onClick={() => router.push(`/project/${item?.id}`)} />
                </Col>
              ))}
          </Row>
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
