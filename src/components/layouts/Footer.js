import ModalSecretKey from '@components/modal/ModalSecretKey';
import { Amplitude } from '@utils/Amplitude';
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
import { Button } from 'reactstrap';
import { useAuth } from 'src/context/auth';

const Footer = () => {
  const router = useRouter();
  const { pathname, locale } = router;
  const { isDesktop } = useResponsive();
  const { authenticate, isAuthenticated } = useAuth();

  const [sns, setSNS] = useState([]);
  const [currentLang, setCurrentLang] = useState(find(langList, { value: locale }));
  const [hasSecretKeyModal, setHasSecretKeyModal] = useState(false);

  const { lang, followMe, enterSecretKey } = t[currentLang.value];

  const selectStyles = {
    valueContainer: () => ({
      width: 130,
      height: 40,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: 8
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

  const handleChangeLocale = (options, action) => {
    const updateOptions = {
      value: options.value,
      label: lang[options.value]
    };

    if (action !== 'init') {
      Amplitude('change language initiated', {
        page: window.location.pathname ?? '',
        url: window.location.href ?? '',
        item: updateOptions
      });
    }

    setCurrentLang(updateOptions);
    router.replace(pathname, pathname, { locale: options.value });
  };

  const toggleSecretKeyModal = () => setHasSecretKeyModal(!hasSecretKeyModal);

  const onSubmitModalSecretKey = async (action, data) => {
    if (action === 'ok') {
      await authenticate(data);
    }

    toggleSecretKeyModal();
  };

  const renderSNSIcon = (data) => {
    switch (data?.name) {
      case 'facebook':
        return (
          <AiFillFacebook
            className="mx-1"
            size={32}
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'twitter':
        return (
          <AiFillTwitterSquare
            className="mx-1"
            size={32}
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'instagram':
        return (
          <AiFillInstagram
            className="mx-1"
            size={32}
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'github':
        return (
          <AiFillGithub
            className="mx-1"
            size={32}
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(data?.link, '_blank')}
          />
        );
      case 'linkedin':
        return (
          <AiFillLinkedin
            className="mx-1"
            size={32}
            style={{ cursor: 'pointer' }}
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
      handleChangeLocale({ value: locale }, 'init');
    } else {
      handleChangeLocale({ value: 'en-US' }, 'init');
    }
  }, [locale]);

  useEffect(() => {
    fetchSNS();
  }, []);

  return (
    <footer className="footer contacts shadow mt-5">
      <div className="footer__wrapper">
        <div className="d-flex justify-content-between align-items-center">
          <div className="sns-wrapper my-2">
            {isDesktop && <span className="me-3">{followMe}</span>}
            {sns?.map((item) => renderSNSIcon(item))}
          </div>
          {isAuthenticated ? null : (
            <Button
              className="identity"
              color="link"
              size="sm"
              onClick={() => setHasSecretKeyModal(true)}>
              {enterSecretKey}
            </Button>
          )}
        </div>
        <hr />
        <div className={copyrightStyle}>
          <span className={`copyright d-flex align-items-center${!isDesktop ? ' mb-2' : ''}`}>
            &copy; {dayjs().format('YYYY')} • Made with &nbsp;
            <AiFillHeart style={{ color: '#f397ae', fontSize: 18 }} />
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

      {/* <ModalSecretKey
        isOpen={hasSecretKeyModal}
        toggle={toggleSecretKeyModal}
        onSubmit={onSubmitModalSecretKey}
      /> */}
    </footer>
  );
};

export default Footer;
