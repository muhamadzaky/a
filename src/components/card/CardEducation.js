import useResponsive from '@utils/useResponsive';
import { Card, CardBody } from 'reactstrap';

const CardEducation = ({ data }) => {
  const { isDesktop } = useResponsive();
  const horizontalMargin = data?.index < 1 ? 'me-2' : 'mx-2';

  return (
    <Card className={`shadow border-0 ${isDesktop ? horizontalMargin : 'my-2'}`}>
      <CardBody className="d-flex flex-column">
        <span>{data?.name}</span>
        <span>{data?.year}</span>
        {data?.major && <span>{data?.major}</span>}
      </CardBody>
    </Card>
  );
};

export default CardEducation;
