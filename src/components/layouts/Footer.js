import LanguageSelect from '@components/field/LanguageSelect';
import ModalSecretKey from '@components/modal/ModalSecretKey';
import { api } from '@utils/API';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillHeart,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube
} from 'react-icons/ai';
import { IoMusicalNotes } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';
import { Button } from 'reactstrap';
import { useAuth } from 'src/context/auth';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const { isDesktop } = useResponsive();
  const { authenticate, isAuthenticated } = useAuth();

  const [sns, setSNS] = useState([]);
  const [hasSecretKeyModal, setHasSecretKeyModal] = useState(false);

  const { followMe, enterSecretKey } = t[locale];

  const toggleSecretKeyModal = () => setHasSecretKeyModal(!hasSecretKeyModal);

  const onSubmitModalSecretKey = async (action, data) => {
    if (action === 'ok') {
      await authenticate(data);
    }

    toggleSecretKeyModal();
  };

  const renderSNSIcon = (data) => {
    switch (data?.name) {
      case 'youtube':
        return (
          <>
            <AiFillYoutube
              data-tooltip-id="SNS_YouTube"
              data-tooltip-content="YouTube"
              className="mx-1"
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(data?.link, '_blank')}
            />
            <Tooltip id="SNS_YouTube" />
          </>
        );
      case 'facebook':
        return (
          <>
            <AiFillFacebook
              data-tooltip-id="SNS_Facebook"
              data-tooltip-content="Facebook"
              className="mx-1"
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(data?.link, '_blank')}
            />
            <Tooltip id="SNS_Facebook" />
          </>
        );
      case 'twitter':
        return (
          <>
            <AiFillTwitterSquare
              data-tooltip-id="SNS_Twitter"
              data-tooltip-content="Twitter"
              className="mx-1"
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(data?.link, '_blank')}
            />
            <Tooltip id="SNS_Twitter" />
          </>
        );
      case 'instagram':
        return (
          <>
            <AiFillInstagram
              data-tooltip-id="SNS_Instagram"
              data-tooltip-content="Instagram"
              className="mx-1"
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(data?.link, '_blank')}
            />
            <Tooltip id="SNS_Instagram" />
          </>
        );
      case 'github':
        return (
          <>
            <AiFillGithub
              data-tooltip-id="SNS_GitHub"
              data-tooltip-content="GitHub"
              className="mx-1"
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(data?.link, '_blank')}
            />
            <Tooltip id="SNS_GitHub" />
          </>
        );
      case 'linkedin':
        return (
          <>
            <AiFillLinkedin
              data-tooltip-id="SNS_LinkedIn"
              data-tooltip-content="LinkedIn"
              className="mx-1"
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(data?.link, '_blank')}
            />
            <Tooltip id="SNS_LinkedIn" />
          </>
        );
      case 'music':
        return (
          <>
            <IoMusicalNotes
              data-tooltip-id="SNS_AppleMusic"
              data-tooltip-content="Apple Music"
              className="mx-1"
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(data?.link, '_blank')}
            />
            <Tooltip id="SNS_AppleMusic" />
          </>
        );
      default:
        break;
    }
  };

  const fetchSNS = async () => {
    const res = await api('sns');
    const data = res?.data?.filter((x) => x.show === true);

    setSNS(data);
  };

  const copyrightStyle = !isDesktop
    ? 'd-flex flex-column align-items-center'
    : 'd-flex justify-content-between align-items-center';

  useEffect(() => {
    fetchSNS();
  }, []);

  return (
    <footer className="footer contacts shadow mt-5">
      <div className="footer__wrapper">
        <div
          className={`d-flex justify-content-between align-items-center${
            !isDesktop ? ' flex-column' : ''
          }`}>
          <div className="sns-wrapper my-2">
            {isDesktop && <span className="me-3">{followMe}</span>}
            {sns?.map((item) => renderSNSIcon(item))}
          </div>
          {isAuthenticated ? null : (
            <Button
              className={`identity${!isDesktop ? ' mt-2' : ''}`}
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
            <LanguageSelect />
          </div>
        </div>
      </div>

      <ModalSecretKey
        isOpen={hasSecretKeyModal}
        toggle={toggleSecretKeyModal}
        onSubmit={onSubmitModalSecretKey}
      />
    </footer>
  );
};

export default Footer;
