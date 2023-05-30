import classNames from 'classnames/bind';
import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

interface PaginationProps {
  handleSwitchPage: (to: 'prev' | 'next') => void;
  prevPage: string | null;
  nextPage: string | null;
  disablePaginationButtons: boolean;
  currentPage: number;
  pagesCount: number;
}

const Pagination = ({
  disablePaginationButtons,
  handleSwitchPage,
  pagesCount,
  nextPage,
  prevPage,
  currentPage,
}: PaginationProps) => {
  return (
    <div className={cx('pagination')}>
      <button
        className={cx('pagination__button')}
        onClick={() => handleSwitchPage('prev')}
        disabled={!prevPage || disablePaginationButtons}
      >
        &#60; Previous
      </button>
      <p>
        {currentPage} of {pagesCount}
      </p>
      <button
        className={cx('pagination__button')}
        onClick={() => handleSwitchPage('next')}
        disabled={!nextPage || disablePaginationButtons}
      >
        Next &#62;
      </button>
    </div>
  );
};

export default Pagination;
