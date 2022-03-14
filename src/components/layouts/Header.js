import { menuList } from '@utils/constant';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem } from 'reactstrap';

const Header = () => {
  const router = useRouter();
  const { locale, pathname } = router;
  const { menu } = t[locale];

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const onClickMenu = async (menu) => {
    if (pathname === '/') {
      Helper.scrollTo(menu?.name, menu?.offset);
    } else {
      await router.push('/');
      Helper.scrollTo(menu?.name, menu?.offset);
    }
  };

  return (
    <Navbar color="light" expand="md" full light>
      <NavbarBrand href="/">
        <Image src="/assets/images/logo.png" alt="logo" width={50} height={35.69} />
      </NavbarBrand>
      <NavbarToggler onClick={handleToggle} />
      <Collapse isOpen={toggle} navbar>
        <Nav className="me-auto" navbar>
          {menuList
            .filter((x) => x.show === true)
            .map((item, index) => (
              <NavItem key={index}>
                <NavbarText role="button" onClick={() => onClickMenu(item)}>
                  {menu[item.name]}
                </NavbarText>
              </NavItem>
            ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
