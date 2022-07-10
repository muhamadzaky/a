import useResponsive from '@utils/useResponsive';
import { Card, CardBody } from 'reactstrap';

const CardEducation = ({ data }) => {
  const { isMobile } = useResponsive();

  return (
    <Card
      className={`card-education shadow my-${isMobile ? '2' : '3'}`}
      onClick={() => window.open(data?.link)}>
      <CardBody className="d-flex flex-column">
        <span>{data?.name}</span>
        <span>{data?.year}</span>
        <span>{data?.major ? data?.major : ''}</span>
      </CardBody>
    </Card>
  );
};

export default CardEducation;
