import Tags from '@components/tag/Tags';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import { useRouter } from 'next/router';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

const ModalProject = ({ isOpen, toggle, data }) => {
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

  return (
    <Modal
      className="modal-project-detail"
      centered
      fullscreen={!isDesktop}
      scrollable
      toggle={toggle}
      isOpen={isOpen}
      external={externalCloseButton}
      size="lg">
      <ModalHeader toggle={toggle}>
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

          <span>{data?.name}</span>
        </div>
      </ModalHeader>
      <ModalBody>
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

        <div className="text-end">
          <span>{Helper.countDateDiff(data?.start, data?.end, true)}</span>
        </div>

        <div className="mt-3 mb-2 text-center">
          <Button
            color="primary rounded-pill"
            className={isDesktop && 'px-5'}
            block={!isDesktop}
            style={{ height: 'fit-content' }}
            onClick={() => window.open(data?.link, '_blank')}>
            {link}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalProject;
