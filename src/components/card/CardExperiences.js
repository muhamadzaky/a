import { Card, CardBody } from 'reactstrap';

const CardEcperiences = ({ data }) => {
  return (
    <Card
      className="card-experience rounded"
      onClick={() => window.open(data?.link)}
      // onMouseOver={() => console.log('hover in')}
      // onMouseOut={() => console.log('hover out')}
    >
      <CardBody>
        <img
          className="company-image"
          src={`/assets/images/company/${data?.file}`}
          alt={data?.name}
        />
      </CardBody>
    </Card>
  );
};

export default CardEcperiences;
