import dayjs from 'dayjs';
import { scroller } from 'react-scroll';

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

  static countDateDiff(start, end) {
    const year = dayjs(end || new Date()).diff(start, 'years');

    if (year > 0) {
      return `${year} ${year > 1 ? 'years' : 'year'}`;
    } else {
      const month = dayjs(end || new Date()).diff(start, 'months');
      return `${month} ${month > 1 ? 'months' : 'month'}`;
    }
  }

  static getInitial(name) {
    return name
      ? name.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '')
      : '';
  }
}
