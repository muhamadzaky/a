import LanguageSelect from '@components/field/LanguageSelect';
import PrivateLayout from '@components/layouts/PrivateLayouts';
import { Amplitude } from '@utils/Amplitude';
import { t } from '@utils/t';
import { map } from 'lodash';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Papa from 'papaparse';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';

const LinkPage = () => {
  const router = useRouter();
  const { locale } = router;
  const { banner } = t[locale];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vT1jNdzmhZMeh_Bu8agPbmL8tT-34B9CsfKpRLiGhkn9EwAiJLwE34z5DQF9hC6n2VSYrCXlKm14ynd/pub?output=csv',
      {
        download: true,
        header: true,
        complete: async (results) => {
          const dt = Array.from(results.data);
          const x = map(
            dt.filter((x) => x.show.toLowerCase() === 'true'),
            (item) => {
              return {
                ...item,
                id: Number(item?.id) ?? null,
                show: item?.show?.toLowerCase() === 'true' ? true : false
              };
            }
          );

          setData(x);
          setLoading(false);
        }
      }
    );
  };

  const handleClickItem = (dt) => {
    Amplitude('click link card', {
      page: 'link page',
      url: window.location.href ?? '',
      link: dt?.url ?? '',
      name: dt?.name ?? '',
      slug: dt?.slug ?? ''
    });

    window.open(dt?.url, '_blank');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PrivateLayout title="Link" hasNavbar={false} hasFooter={false}>
      <Container className="d-flex justify-content-center align-items-center flex-column vh-100 position-relative">
        <div className="position-absolute" style={{ left: 10, top: 10 }}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={50}
            height={35.69}
            onClick={() => router.push('/')}
            role="button"
          />
        </div>

        <h1>{`${banner?.hello} ${banner?.imZaky}🙇🏻‍♂️`}</h1>

        <div className="mt-3 mb-5">
          {data?.length < 1 && loading ? (
            <Spinner color="primary" />
          ) : (
            map(data, (item) => (
              <div
                key={item.id}
                className="text-center my-3 px-3 py-2 rounded shadow cursor-pointer"
                onClick={() => handleClickItem(item)}>
                {item?.name ?? 'n/a'}
              </div>
            ))
          )}
        </div>

        <LanguageSelect />
      </Container>
    </PrivateLayout>
  );
};

export default LinkPage;
