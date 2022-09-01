import { api } from '@utils/API';
import { langList } from '@utils/constant';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import dayjs from 'dayjs';
import { find } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillHeart,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare
} from 'react-icons/ai';
import Select from 'react-select';

const Footer = () => {
  const router = useRouter();
  const { pathname, locale } = router;
  const { isDesktop } = useResponsive();

  const [sns, setSNS] = useState([]);
  const [currentLang, setCurrentLang] = useState(find(langList, { value: locale }));

  const { lang, followMe } = t[currentLang.value];

  const selectStyles = {
    input: () => ({
      width: 100
    })
  };

  const CustomOption = ({ innerProps, isDisabled }) => {
    const id = innerProps.id;
    const idx = id.substr(id.length - 1);

    return (
      <>
        {!isDisabled ? (
          <div {...innerProps} className="px-2" role="button">
            {lang[langList[idx].value]}
          </div>
        ) : null}
      </>
    );
  };

  const handleChangeLocale = (options) => {
    const updateOptions = {
      value: options.value,
      label: lang[options.value]
    };

    setCurrentLang(updateOptions);
    router.replace(pathname, pathname, { locale: options.value });
  };

  const renderSNSIcon = (data) => {
    switch (data?.name) {
      case 'facebook':
        return (
          <AiFillFacebook
            className="mx-1"
            size={32}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'twitter':
        return (
          <AiFillTwitterSquare
            className="mx-1"
            size={32}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'instagram':
        return (
          <AiFillInstagram
            className="mx-1"
            size={32}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'github':
        return (
          <AiFillGithub
            className="mx-1"
            size={32}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'linkedin':
        return (
          <AiFillLinkedin
            className="mx-1"
            size={32}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      default:
        break;
    }
  };

  const fetchSNS = async () => {
    const res = await api('sns');

    setSNS(res.data);
  };

  const copyrightStyle = !isDesktop
    ? 'd-flex flex-column align-items-center'
    : 'd-flex justify-content-between align-items-center';

  useEffect(() => {
    if (locale) {
      handleChangeLocale({ value: locale });
    } else {
      handleChangeLocale({ value: 'en-US' });
    }
  }, [locale]);

  useEffect(() => {
    fetchSNS();
  }, []);

  return (
    <footer className="footer contacts shadow mt-5">
      <div className="footer__wrapper">
        <div className="sns-wrapper my-2">
          {isDesktop && <span className="me-2">{followMe}</span>}
          {sns?.map((item) => renderSNSIcon(item))}
        </div>
        <hr />
        <div className={copyrightStyle}>
          <span className={`d-flex align-items-center${!isDesktop ? ' mb-2' : ''}`}>
            &copy; {dayjs().format('YYYY')} • Made with &nbsp;
            <AiFillHeart style={{ color: '#f397ae' }} />
            &nbsp; by Muhamad Zaky
          </span>

          <div className="mt-2">
            <Select
              styles={selectStyles}
              options={langList}
              value={currentLang}
              onChange={handleChangeLocale}
              components={{ Option: CustomOption }}
              menuPlacement="top"
              isSearchable={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
