import classNames from 'classnames/bind';
import styles from './navigation.module.scss';
import NavItem from './NavItem/NavItem';
import { NavigationProps } from './types';

const cx = classNames.bind(styles);
const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav>
      <ul className={cx('navigation-list')}>
        {items.map((item) => (
          <NavItem title={item.title} url={item.url} key={item.title} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
