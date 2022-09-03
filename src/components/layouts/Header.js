import { Divider } from '@components/index';
import { menuList } from '@utils/constant';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Button, Container, Modal, ModalBody } from 'reactstrap';

const Header = () => {
  const router = useRouter();
  const { locale, pathname } = router;
  const { isDesktop } = useResponsive();
  const { menu } = t[locale];

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const onClickMenu = async (menu) => {
    await handleToggle();

    if (pathname === '/') {
      Helper.scrollTo(menu?.name, menu?.offset);
    } else {
      await router.push('/');
      setTimeout(() => {
        Helper.scrollTo(menu?.name, menu?.offset);
      }, 500);
    }
  };

  const renderMenu = () => {
    if (!isDesktop) {
      return (
        <>
          <Button
            className="header__menu-button"
            color="light"
            id="menu-bar"
            onClick={handleToggle}>
            <AiOutlineBars />
          </Button>

          <BottomSheet
            open={toggle}
            onDismiss={handleToggle}
            snapPoints={({ maxHeight }) => maxHeight}
            className="bottom-sheet"
            header={<h2 className="my-2">{menu?.title}</h2>}>
            <Container
              className="d-flex justify-content-center align-items-center"
              style={{ height: '80vh' }}>
              <div className="text-center">
                {menuList
                  .filter((x) => x.show === true)
                  .map((item, index) => (
                    <div
                      className="menu-item"
                      role="button"
                      onClick={() => onClickMenu(item)}
                      key={index}>
                      {menu[item.name]}
                    </div>
                  ))}
              </div>
            </Container>
          </BottomSheet>
        </>
      );
    }

    return (
      <div className="d-flex">
        {menuList
          .filter((x) => x.show === true)
          .map((item, index) => (
            <div className="ms-4" role="button" onClick={() => onClickMenu(item)} key={index}>
              {menu[item.name]}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="header">
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={50}
        height={35.69}
        onClick={() => router.push('/')}
        role="button"
      />

      {renderMenu()}
    </div>
  );
};

export default Header;
