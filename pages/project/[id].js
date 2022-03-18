import { Tag } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { t } from '@utils/t';
import { find } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

const DetailProject = (props) => {
  const { projects } = props;
  const router = useRouter();
  const { id } = router.query;
  const { locale } = router;
  const { link, stack, whatIdo } = t[locale];

  const [data, setData] = useState();

  useEffect(() => {
    if (projects) {
      const res = find(projects, { id: Number(id) });

      setData(res);
    }
  }, [projects]);

  return (
    <PrivateLayout>
      <Container className="position-relative">
        <h1>{data?.name}</h1>
        <h3>{data?.company}</h3>
        <span>{data?.description}</span>
        {data?.confidential && <span className="confidential">Confidential</span>}

        <hr />

        <Row>
          <Col sm={12} md={10} lg={10}>
            <span className="fw-bold">&gt; {data?.jobdesk}</span>
            <br />
            <br />
            <span>{`${whatIdo}:`}</span>
            <ul>
              {data?.task.map((item) => (
                <li key={item} style={{ listStyleType: 'number' }}>
                  {item}
                </li>
              ))}
            </ul>

            <span>{`${stack}:`}</span>
            <Row className="mt-2">
              {data?.tech.map((item, key) => (
                <Col key={key}>
                  <Tag item={item} />
                </Col>
              ))}
            </Row>
          </Col>

          <Col sm={12} md={2} lg={2} className="pt-4">
            {data?.link && (
              <Button
                color="primary rounded-pill"
                block
                onClick={() => window.open(data?.link, '_blank')}>
                {link}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </PrivateLayout>
  );
};

export default DetailProject;

export async function getServerSideProps() {
  const projectsRes = await fetch(`${process.env.API_URL}projects`);
  const projects = await projectsRes.json();

  return {
    props: {
      projects
    }
  };
}
