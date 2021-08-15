import ReactPaginate from "react-paginate";
import "./styles.scss";

export function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}
