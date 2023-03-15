import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import { t } from './t';

export default class Helper {
  static scrollTo(to, offset, duration = 100) {
    scroller.scrollTo(to, {
      duration,
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

  static dayJSDateDiff(start, end) {
    dayjs.extend(RelativeTime);
    return end ? dayjs(end).from(dayjs(start), true) : dayjs().from(dayjs(start), true);
  }

  static getInitial(name) {
    return name
      ? name.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '')
      : '';
  }

  static truncateByLength(text, length = 50) {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  }

  static arrayToString(array) {
    const joinString = array?.join();

    return array?.length > 1 ? joinString?.replace(',', ', ') : array;
  }

  static generate30m() {
    const now = new Date();
    const minutes = 30;
    now.setTime(now.getTime() + minutes * 60 * 1000);
    now.toUTCString();

    return now;
  }
}
