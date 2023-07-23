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
      <Container className="py-3">
        <span>ざき</span>
      </Container>
      <Container className="mt-5">{banner.hello}</Container>
    </PrivateLayout>
  );
};

export default RebornPrototype;
