import useResponsive from '@utils/useResponsive';
import { Card, CardBody } from 'reactstrap';

const CardEducation = ({ data }) => {
  const { isDesktop } = useResponsive();

  return (
    <Card
      className={`card-education my-${!isDesktop ? '2' : '3'} shadow border-0`}
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
