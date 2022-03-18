import PrivateLayout from '@components/layouts/PrivateLayouts';
import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';
import { Button, Card, CardBody } from 'reactstrap';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <PrivateLayout hasNavbar={false} hasFooter={false}>
      <Div100vh className="d-flex justify-content-center align-items-center m-auto">
        <Card className="mx-3">
          <CardBody className="d-flex flex-column justify-content-center align-items-center p-5 shadow text-center">
            <span className="fs-1 fw-bold">404</span>
            <span>Sorry the page you&apos;re looking for is not found.</span>
            <Button
              color="primary"
              className="rounded-pill mt-3 px-4"
              onClick={() => router.push('/')}>
              Back to home
            </Button>
          </CardBody>
        </Card>
      </Div100vh>
    </PrivateLayout>
  );
};

export default NotFoundPage;
