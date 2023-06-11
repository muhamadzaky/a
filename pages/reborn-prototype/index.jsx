import PrivateLayout from '@components/layouts/PrivateLayouts';
import { menuList } from '@utils/constant';
import { t } from '@utils/t';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  Container
} from 'reactstrap';

const RebornPrototype = () => {
  const router = useRouter();
  const { locale } = router;
  const { about, banner, menu, meta, seeAll, sortedByLastProject } = t[locale];

  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <PrivateLayout className="landing" title={meta?.name} hasNavbar={false}>
      <Container className="position-relative">
        <Card className="shadow position-fixed">
          <CardBody className="">
            <div className="d-flex justify-content-between align-items-center">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={50}
                height={35.69}
                onClick={() => router.push('/')}
                role="button"
              />

              <Image
                src={`/assets/icons/chevron-${menuOpened ? 'up' : 'down'}.svg`}
                className={`chevron__${menuOpened ? 'up' : 'down'}`}
                onClick={toggleMenu}
                width={18}
                height={18}
                loading="lazy"
                role="button"
              />
            </div>

            {menuOpened ? (
              <div className="mt-2 pt-2 border-top">
                {menuList
                  .filter((x) => x.show === true)
                  .map((item, index) => (
                    <div
                      // className={menuItemClass}
                      className="fw-bold"
                      role="button"
                      // onClick={() => onClickMenu(item)}
                      key={index}>
                      {menu[item.name]}
                    </div>
                  ))}
              </div>
            ) : null}
          </CardBody>
        </Card>
      </Container>
      <Container className="mt-5">{banner.hello}</Container>
    </PrivateLayout>
  );
};

export default RebornPrototype;
