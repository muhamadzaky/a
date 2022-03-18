import PrivateLayout from '@components/layouts/PrivateLayouts';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import { find } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

const WorkDetail = (props) => {
  const { experiences } = props;
  const router = useRouter();
  const { id } = router.query;
  const { link } = t[router.locale];

  const [data, setData] = useState();

  useEffect(() => {
    if (experiences) {
      const res = find(experiences, { id: Number(id) });

      setData(res);
    }
  }, [experiences]);

  return (
    <PrivateLayout>
      <Container>
        <div className="d-flex align-items-center">
          <img src={`/assets/images/company/${data?.file}`} alt="" width={52} className="me-3" />
          <h1>{data?.name}</h1>
        </div>

        <hr />

        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="d-flex flex-column">
              {data?.position.map((item) => (
                <span className="fw-bold" key={item}>
                  &gt; {item}
                </span>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="mt-3">
            <div className="text-center">
              <span>{`${data?.start} - ${data?.end} (${Helper.countDateDiff(
                data?.start,
                data?.end
              )})`}</span>
              {data?.link && (
                <Button
                  color="primary rounded-pill mt-3"
                  block
                  onClick={() => window.open(data?.link, '_blank')}>
                  {link}
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </PrivateLayout>
  );
};

export default WorkDetail;

export async function getServerSideProps() {
  const expRes = await fetch(`${process.env.API_URL}experiences`);
  const experiences = await expRes.json();

  return {
    props: {
      experiences
    }
  };
}
