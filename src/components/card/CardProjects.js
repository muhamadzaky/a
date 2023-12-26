import Helper from '@utils/Helper';
import { t } from '@utils/t';
import { useRouter } from 'next/router';
import { RiBuilding2Line } from 'react-icons/ri';

const CardProjects = ({ data, onClick }) => {
  const router = useRouter();
  const { locale } = router;
  const { onGoing } = t[locale];

  return (
    <div className="d-flex flex-column card-item cursor-pointer" onClick={onClick}>
      <div className="image-wrapper">
        {data?.file ? (
          <img src={`/assets/images/projects/${data?.file}`} alt={data?.name} />
        ) : (
          <RiBuilding2Line />
        )}
      </div>
      <div className="d-flex flex-column">
        <span>{Helper.decreaseString(data?.name, 60)}</span>
        <span>{data?.company}</span>
        {!data?.end && <span>{onGoing}</span>}
      </div>
    </div>
  );
};

export default CardProjects;
