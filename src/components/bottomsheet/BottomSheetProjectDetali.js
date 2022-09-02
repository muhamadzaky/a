import Tags from '@components/tag/Tags';
import Helper from '@utils/Helper';
import { t } from '@utils/t';
import useResponsive from '@utils/useResponsive';
import { useRouter } from 'next/router';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Button, Container } from 'reactstrap';

const BottomSheetProjectDetail = ({ isOpen, onDismiss, data }) => {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { locale } = router;
  const { whatIdo, stack, link } = t[locale];

  return (
    <BottomSheet
      open={isOpen}
      onDismiss={onDismiss}
      snapPoints={({ maxHeight }) => maxHeight}
      className="bottom-sheet"
      header={
        <Container className="card-project d-flex pt-3">
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

          <span className="text-start fw-bold">{data?.name}</span>
        </Container>
      }
      footer={
        <>
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
        </>
      }>
      <Container className="bottom-sheet__project pt-3">
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
      </Container>
    </BottomSheet>
  );
};

export default BottomSheetProjectDetail;
