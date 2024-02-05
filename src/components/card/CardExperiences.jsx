import { Amplitude } from '@utils/Amplitude';

const CardEperiences = ({ data }) => {
  const handleClickCard = () => {
    Amplitude('click experiences card', {
      page: 'landing page',
      url: window.location.href ?? '',
      company_name: data?.name
    });

    window.open(data?.link);
  };

  const renderFigcaptionBg = (id) => {
    switch (id) {
      case 0:
        return {
          tx: '#fff',
          bg: '#111e70'
        };
      case 2:
        return {
          tx: '#000',
          bg: '#d60a00'
        };
      case 3:
        return {
          tx: '#002eb4',
          bg: '#ff6400'
        };
      default:
        return {
          tx: '#fff',
          bg: '#000'
        };
    }
  };

  const rf = renderFigcaptionBg(data?.id);

  return (
    <div className="border-0 cursor-pointer experiences-card" onClick={handleClickCard}>
      <img
        src={`/assets/images/company/${data?.file}`}
        alt={data?.name}
        id={`tooltip-${data?.id}`}
        className="image-experiences"
      />
      <figcaption
        style={{
          background: `linear-gradient(to bottom, #00000000 0%, ${rf.bg} 100%)`,
          color: rf.tx
        }}>
        {data?.name}
      </figcaption>
    </div>
  );
};

export default CardEperiences;
