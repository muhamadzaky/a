import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: classNames.ArgumentArray): string => twMerge(classNames(...args));
