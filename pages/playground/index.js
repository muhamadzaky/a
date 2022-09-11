import PrivateLayout from '@components/layouts/PrivateLayouts';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  Button,
  Container,
  Form,
  FormText,
  Input,
  InputGroup,
  InputGroupText,
  Modal,
  ModalBody,
  Spinner
} from 'reactstrap';

const Playground = (props) => {
  const router = useRouter();
  const { playground, playgroundDescription, menu, access, error } = t[router.locale];
  const { auth, hasAuthKey } = props;
  const { isDesktop } = useResponsive();

  const [hasKey, setHasKey] = useState(hasAuthKey);
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmitAccess = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = auth?.password === key;

    setTimeout(() => {
      if (res) {
        setHasKey(true);
        if (hasError) setHasError(false);
        setLoading(false);
      } else {
        setHasError(true);
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <PrivateLayout title={playground}>
      <Container>
        <div>
          <h1>{playground}</h1>
          <p>{playgroundDescription}</p>
        </div>
      </Container>

      <hr />

      <Container
        className={`d-flex justify-content-between${!isDesktop ? ' flex-column-reverse' : ''}`}>
        <a
          className="twitter-timeline"
          data-lang={router.locale}
          data-height="500"
          data-width="600"
          data-theme="light"
          href="https://twitter.com/zakysteinfeld?ref_src=twsrc%5Etfw">
          Tweets by zakysteinfeld
        </a>

        <div
          className={`${!isDesktop ? 'mb-3' : ''}`}
          style={{ height: '100vh', width: isDesktop ? '28vw' : '100%' }}>
          <h1>{menu?.favorite}</h1>

          <div className="position-relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/HKT48_logo.svg"
              alt="HKT48"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 0,
                left: 12,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://www.sonymusic.co.jp/adm_image/common/artist_image/72000000/72000394/artist_photo/59018.jpeg"
              alt="L'Arc~en~Ciel"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 16,
                left: 134,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://01familia.co.jp/wp/wp-content/uploads/2022/01/8d07f8e96073bed9c18d1751a70ec5a6.png"
              alt="#YOYOYO(#よーよーよー)"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 0,
                left: 254,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg"
              alt="YOASOBI"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 130,
                left: 132,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://alcor-sirius.appspot.com/webapi/content/get_data?content_id=LUN_news_3c859ee19bcc4b00a8f99993e5d8f2bb"
              alt="LUNA SEA"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 126,
                left: 0,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c9/AKB48_logo2.svg"
              alt="AKB48"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 132,
                left: 268,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/JKT48.svg"
              alt="JKT48"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 230,
                left: 65,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/Nogizaka46_logo.svg"
              alt="乃木坂46"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 230,
                left: 185,
                backgroundColor: '#fff'
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/66/Tokisen_logo.png"
              alt="超ときめき 宣伝部"
              className="shadow"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '50%',
                margin: 8,
                position: 'absolute',
                top: 330,
                left: 0,
                backgroundColor: '#fff'
              }}
            />
          </div>
        </div>
      </Container>

      <Modal isOpen={!hasKey} fullscreen centered>
        <ModalBody>
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ width: isDesktop ? 480 : '100%', height: '98vh' }}>
            <Form
              className="d-flex justify-content-center flex-column align-items-center w-100"
              onSubmit={handleSubmitAccess}>
              <InputGroup className="my-3">
                <Input
                  placeholder="key"
                  onChange={(e) => setKey(e.target.value)}
                  type={passwordVisible ? 'text' : 'password'}
                />
                <InputGroupText onClick={() => setPasswordVisible(!passwordVisible)} role="button">
                  {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                </InputGroupText>
              </InputGroup>
              {hasError && <FormText className="error">{error?.authentication}</FormText>}

              <Button className="rounded-pill px-4 mt-3" color="primary" type="submit">
                {loading ? <Spinner size="sm" /> : access}
              </Button>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </PrivateLayout>
  );
};

export async function getServerSideProps() {
  const authRes = await fetch(`${process.env.API_URL}auth`);
  let auth = await authRes.json();

  return {
    props: {
      auth,
      hasAuthKey: false
    }
  };
}

export default Playground;
