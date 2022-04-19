import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

interface PaginationProps {
  pageCount: number;
  handlePageClick: (data: any) => void;
}
const Pagination = ({ pageCount, handlePageClick }: PaginationProps) => (
  <ReactPaginate
    className={styles.container}
    nextLabel=">"
    previousLabel="<"
    pageCount={pageCount}
    marginPagesDisplayed={0}
    pageRangeDisplayed={3}
    onPageChange={handlePageClick}
    activeClassName={styles.active}
  />
);

export default Pagination;
