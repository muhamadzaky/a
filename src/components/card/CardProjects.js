import Helper from '@utils/Helper';
import { Card, CardBody } from 'reactstrap';

const CardProjects = ({ data, onClickDetail }) => {
  return (
    <Card className="card-project rounded" onClick={onClickDetail}>
      <CardBody className="d-flex">
        <div className="image-wrapper">
          {data?.file ? (
            <img
              className="company-image"
              src={`/assets/images/projects/${data?.file}`}
              alt={data?.name}
            />
          ) : (
            <div className="company-text rounded">{Helper.getInitial(data?.company)}</div>
          )}
        </div>

        <div className="info-wrapper">
          <span>{data?.name}</span>
          <br />
          <span>{data?.company}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardProjects;
