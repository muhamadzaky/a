import { Tag } from '@components/index';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { API } from '@utils/constant';
import { find } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';

const DetailProject = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState();

  useEffect(() => {
    const res = find(API.project, { id: Number(id) });

    setData(res);
  }, []);

  console.log(data);

  return (
    <PrivateLayout>
      <Container className="position-relative">
        <h1>{data?.name}</h1>
        <h3>{data?.company}</h3>
        <span>{data?.description}</span>
        {data?.confidential && <span className="confidential">Confidential</span>}

        <hr />

        <span className="fw-bold">&gt; {data?.jobdesk}</span>
        <br />
        <br />
        <span>What I Do:</span>
        <ul>
          {data?.task.map((item) => (
            <li key={item} style={{ listStyleType: 'number' }}>
              {item}
            </li>
          ))}
        </ul>

        <span>Stack:</span>
        <div className="d-flex mt-2">
          {data?.tech.map((item) => (
            <Tag item={item} />
          ))}
        </div>
      </Container>
    </PrivateLayout>
  );
};

export default DetailProject;
