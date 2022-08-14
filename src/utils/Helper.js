import dayjs from 'dayjs';
import _, { set } from 'lodash';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import { t } from './t';

export default class Helper {
  static scrollTo(to, offset) {
    scroller.scrollTo(to, {
      duration: 500,
      smooth: 'easeInOutQuart',
      offset: offset,
      scrollSpy: true,
      animateScroll: true
    });
  }

  static countDateDiff(start, end, forceMonth = false) {
    const router = useRouter();
    const hl = router.locale;
    const { date } = t[hl];

    const getStartDate = dayjs(start).startOf('M');
    const getEndDate = dayjs(end || new Date()).endOf('M');

    const startDate = !forceMonth ? start : getStartDate;
    const endDate = !forceMonth ? end : getEndDate;

    const year = dayjs(endDate).diff(startDate, 'years');
    const yLocale = date?.year;
    const mLocale = date?.month;

    if (year > 0) {
      return `${year} ${yLocale}${
        (year > 1 && hl.toLowerCase() === 'en-us') || hl === '' ? 's' : ''
      }`;
    } else {
      const month = dayjs(endDate).diff(startDate, 'months');
      return `${month} ${mLocale}${
        (month > 1 && hl.toLowerCase() === 'en-us') || hl === '' ? 's' : ''
      }`;
    }
  }

  static getInitial(name) {
    return name
      ? name.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '')
      : '';
  }

  static truncateByLength(text, length = 50) {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  }
}
