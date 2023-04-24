import useResponsive from '@utils/useResponsive';
import { useState } from 'react';
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

const ModalSecretKey = ({ isOpen, toggle, onSubmit }) => {
  const { isDesktop } = useResponsive();

  const [credential, setCredential] = useState({ username: '', password: '' });

  const onChangeCredential = (e) => {
    const { id, value } = e.target;

    setCredential({ ...credential, [id]: value });
  };

  return (
    <Modal centered fullscreen={!isDesktop} scrollable toggle={toggle} isOpen={isOpen}>
      <ModalHeader>Hello!</ModalHeader>
      <ModalBody>
        <h6>Please input some information here</h6>
        <FormGroup>
          <Label>Username</Label>
          <Input
            id="username"
            onChange={onChangeCredential}
            value={credential?.username}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            id="password"
            onChange={onChangeCredential}
            value={credential?.password}
            type="password"
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="danger rounded-pill" outline onClick={() => onSubmit('cancel')}>
          {credential?.username || credential?.password ? 'Cancel' : 'Close'}
        </Button>
        <Button color="success rounded-pill" onClick={() => onSubmit('ok', credential)}>
          Let&#39;s Go!
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalSecretKey;
