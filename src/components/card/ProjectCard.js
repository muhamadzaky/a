import Helper from '@utils/Helper';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';

const ProjectCard = ({ data, onClick }) => {
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    const elm = document.getElementById(`card-project__${data?.id}`);

    setMaxWidth(elm.offsetWidth - 30);
  }, []);

  return (
    <Card id={`card-project__${data?.id}`} className="my-2 card-project" onClick={onClick}>
      <CardBody>
        <div className="d-flex">
          <div className="image-wrapper" style={data?.file ? {} : { background: '#f7f7f7' }}>
            {data?.file ? (
              <CardImg
                className="rounded-start p-2"
                alt={data?.name}
                src={`/assets/images/projects/${data?.file}`}
              />
            ) : (
              <div className="fw-bold">{Helper.getInitial(data?.company)}</div>
            )}
          </div>

          <div className="d-flex flex-column ms-2">
            <span className="fw-bold">{data?.name}</span>
          </div>
        </div>

        <div className="mt-2">
          <span className="d-inline-block text-truncate" style={{ maxWidth }}>
            {data?.company}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
