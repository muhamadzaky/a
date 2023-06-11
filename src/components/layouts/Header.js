import { useAuth } from '@context/auth';
import { menuList } from '@utils/constant';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Button, Container } from 'reactstrap';

const Header = (props) => {
  const router = useRouter();
  const { locale, pathname } = router;
  const { isDesktop } = useResponsive();
  const { menu, banner } = t[locale];
  const { scrolledNav = false, withLogo = true } = props;
  const { isAuthenticated, user, logout } = useAuth();

  const [toggle, setToggle] = useState(false);
  const [hasWhiteNav, setHasWhiteNav] = useState(false);

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

  const changeBackground = () => {
    const scrollPosition = 300;
    if (window.scrollY < scrollPosition) {
      setHasWhiteNav(false);
    } else {
      setHasWhiteNav(true);
    }
  };

  const handleClickUsername = () => {
    logout();
  };

  useEffect(() => {
    if (scrolledNav) window.addEventListener('scroll', changeBackground);

    return () => {
      if (scrolledNav) window.removeEventListener('scroll', changeBackground);
    };
  });

  const menuItemClass = `menu-item${isAuthenticated ? 's' : ''}`;

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
                {isAuthenticated ? (
                  <div
                    className={menuItemClass}
                    style={{ marginRight: 48 }}
                    onClick={handleClickUsername}
                    role="button">
                    {banner?.hello} {user?.name}
                  </div>
                ) : null}
                {menuList
                  .filter((x) => x.show === true)
                  .map((item, index) => (
                    <div
                      className={menuItemClass}
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
        {isAuthenticated ? (
          <div
            className={menuItemClass}
            style={{ marginRight: 48 }}
            onClick={handleClickUsername}
            role="button">
            {banner?.hello} {user?.name}
          </div>
        ) : null}
        {menuList
          .filter((x) => x.show === true)
          .map((item, index) => (
            <div
              className={`${menuItemClass}${index > 0 ? ' ms-5' : ''}`}
              role="button"
              onClick={() => onClickMenu(item)}
              key={index}>
              {menu[item.name]}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className={`header${scrolledNav ? ' header-fix' : ''}${hasWhiteNav ? ' scrolled' : ''}`}>
      {withLogo ? (
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={50}
          height={35.69}
          onClick={() => router.push('/')}
          role="button"
        />
      ) : null}

      {renderMenu()}
    </div>
  );
};

export default Header;
