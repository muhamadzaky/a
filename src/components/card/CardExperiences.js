import { Amplitude } from '@utils/Amplitude';
import { Card, CardBody } from 'reactstrap';

const CardEcperiences = ({ data }) => {
  const handleClickCard = () => {
    Amplitude('click experiences card', {
      page: 'landing page',
      url: window.location.href ?? '',
      company_name: data?.name
    });

    window.open(data?.link);
  };

  return (
    <Card
      className="card-experience border-0"
      onClick={handleClickCard}
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
