import PrivateLayout from '@components/layouts/PrivateLayouts';
import { API } from '@utils/constant';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';

const WorkDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState();

  useEffect(() => {
    const res = find(API.experience, { id: Number(id) });

    setData(res);
  }, []);

  console.log(id, data);

  return (
    <PrivateLayout>
      <Container>
        <h1>Hello</h1>
      </Container>
    </PrivateLayout>
  );
};

export default WorkDetail;
