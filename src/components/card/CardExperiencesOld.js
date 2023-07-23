import { Amplitude } from '@utils/Amplitude';
import Helper from '@utils/Helper';
import { useState } from 'react';
import { Card, CardBody } from 'reactstrap';

import { Divider } from '..';

const CardEcperiences = ({ data }) => {
  const [hasDetail, setHasDetail] = useState(false);

  const handleClickCard = () => {
    Amplitude('click experiences card', {
      page: 'landing page',
      url: window.location.href ?? '',
      company_name: data?.name
    });

    window.open(data?.link);
  };

  const onHoverIn = () => {
    setHasDetail(true);
  };

  const onHoverOut = () => {
    setHasDetail(false);
  };

  const renderPosition = () => {
    const length = data?.position?.length;
    const name = data?.position.toString();
    const finalName = length > 1 ? name?.replace(',', ', ') : name?.replace(',', '');

    return finalName;
  };

  return (
    <div>
      <Card
        className="card-experience border-0 cursor-pointer"
        onClick={handleClickCard}
        onMouseOver={onHoverIn}
        onMouseOut={onHoverOut}>
        <CardBody>
          <img
            className="company-image"
            src={`/assets/images/company/${data?.file}`}
            alt={data?.name}
          />
        </CardBody>
      </Card>

      {hasDetail ? (
        <Card className="card-experience-detail border-0 mt-2 position-absolute shadow">
          <CardBody className="d-flex flex-column">
            <span>{Helper.dayJSDateDiff(data?.start, data?.end, true)}</span>
            <Divider />
            <span>{data?.name}</span>
            <Divider />
            <span>{renderPosition()}</span>
          </CardBody>
        </Card>
      ) : null}
    </div>
  );
};

export default CardEcperiences;
