import { Amplitude } from '@utils/Amplitude';
import { langList } from '@utils/constant';
import { t } from '@utils/t';
import { find } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const LanguageSelect = () => {
  const router = useRouter();
  const { pathname, locale } = router;

  const [currentLang, setCurrentLang] = useState(find(langList, { value: locale }));

  const { lang } = t[currentLang.value];

  const selectStyles = {
    valueContainer: () => ({
      width: 130,
      height: 40,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: 8
    })
  };

  const CustomOption = ({ innerProps, isDisabled }) => {
    const id = innerProps.id;
    const idx = id.substr(id.length - 1);

    return (
      <>
        {!isDisabled ? (
          <div {...innerProps} className="px-2" role="button">
            {lang[langList[idx].value]}
          </div>
        ) : null}
      </>
    );
  };

  const handleChangeLocale = (options, action) => {
    const updateOptions = {
      value: options.value,
      label: lang[options.value]
    };

    if (action !== 'init') {
      Amplitude('change language initiated', {
        page: window.location.pathname ?? '',
        url: window.location.href ?? '',
        item: updateOptions
      });
    }

    setCurrentLang(updateOptions);
    router.replace(pathname, pathname, { locale: options.value });
  };

  useEffect(() => {
    if (locale) {
      handleChangeLocale({ value: locale }, 'init');
    } else {
      handleChangeLocale({ value: 'en-US' }, 'init');
    }
  }, [locale]);

  return (
    <Select
      styles={selectStyles}
      options={langList}
      value={currentLang}
      onChange={handleChangeLocale}
      components={{ Option: CustomOption }}
      menuPlacement="top"
      isSearchable={false}
    />
  );
};

export default LanguageSelect;
