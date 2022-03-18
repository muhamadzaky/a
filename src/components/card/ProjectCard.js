import Helper from '@utils/Helper';
import { Card, CardBody, CardImg } from 'reactstrap';

const ProjectCard = ({ data, onClick }) => {
  return (
    <Card className="my-2 card-project" onClick={onClick}>
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
          <span>{Helper.truncateByLength(data?.company, 28)}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
