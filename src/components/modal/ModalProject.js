import Tags from '@components/tag/Tags';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import { useRouter } from 'next/router';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ModalProject = ({ isOpen, toggle, data, source }) => {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { locale } = router;
  const { whatIdo, stack, link } = t[locale];

  const externalCloseButtonClass = {
    position: 'absolute',
    top: 25,
    right: 25
  };

  const externalCloseButton = (
    <Button style={externalCloseButtonClass} close onClick={toggle}></Button>
  );

  const hasExternalButton = !!source;

  return (
    <Modal
      className="modal-project-detail"
      centered
      fullscreen={!isDesktop}
      scrollable
      toggle={toggle}
      isOpen={isOpen}
      external={hasExternalButton ? externalCloseButton : null}
      size="lg">
      <ModalHeader toggle={!hasExternalButton ? toggle : null}>
        <div className="d-flex align-items-center">
          <div className="image-wrapper">
            {data?.file ? (
              <img
                className="company-image"
                src={`/assets/images/projects/${data?.file}`}
                alt={data?.name}
              />
            ) : (
              <div className="company-text rounded">{Helper.getInitial(data?.company)}</div>
            )}
          </div>

          <div className="d-flex flex-column">
            <span className="text-start fw-bold fs-5">{data?.name}</span>
            <span className="fw-normal fs-6">
              {Helper.dayJSDateDiff(data?.start, data?.end, true)}
            </span>
          </div>
        </div>
      </ModalHeader>
      <ModalBody className="mb-2">
        <span>{data?.description}</span>
        <div className="my-3">
          <span>
            <b>&gt;</b>
            &nbsp;{data?.jobdesk}
          </span>
        </div>

        <div>
          <span>{`${whatIdo}:`}</span>
          <ul>
            {data?.task.map((item) => (
              <li key={item} style={{ listStyleType: 'number' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span>{`${stack}:`}</span>
          <div className="tags-wrapper">
            {data?.tech.map((item, key) => (
              <div key={key} className="w-auto mx-2">
                <Tags item={item} />
              </div>
            ))}
          </div>
        </div>
      </ModalBody>
      {data?.link && (
        <ModalFooter>
          <Button
            color="primary rounded-pill"
            className={isDesktop && 'px-5'}
            block={!isDesktop}
            style={{ height: 'fit-content' }}
            onClick={() => window.open(data?.link, '_blank')}>
            {link}
          </Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default ModalProject;
