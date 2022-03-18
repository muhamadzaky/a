import PrivateLayout from '@components/layouts/PrivateLayouts';
import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';
import { Button, Card, CardBody } from 'reactstrap';

const InternalServerErrorPage = () => {
  const router = useRouter();
  return (
    <PrivateLayout hasNavbar={false} hasFooter={false}>
      <Div100vh className="d-flex justify-content-center align-items-center m-auto">
        <Card>
          <CardBody className="d-flex flex-column justify-content-center align-items-center p-5 shadow">
            <span className="fs-1 fw-bold">500</span>
            <span>There is an error with this page, try again later.</span>
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

export default InternalServerErrorPage;
