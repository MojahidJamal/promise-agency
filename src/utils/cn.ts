import classNames from 'classnames';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classNames(...classes);
}

