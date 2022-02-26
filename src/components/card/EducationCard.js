import { Card, CardBody } from 'reactstrap';

const EducationCard = ({ data }) => {
  return (
    <Card className="shadow education-card">
      <CardBody className="d-flex flex-column">
        <span>{data?.name}</span>
        <span>{data?.year}</span>
        <span>{data?.major}</span>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
