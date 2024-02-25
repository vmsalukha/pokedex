import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({
  totalItems,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}) => {
  return (
    <TablePagination
      component="div"
      count={totalItems}
      page={currentPage}
      onPageChange={(event, newPage) => setCurrentPage(newPage)}
      rowsPerPage={pageSize}
      onRowsPerPageChange={(event) => {
        setPageSize(parseInt(event.target.value, 10));
        setCurrentPage(0);
      }}
      rowsPerPageOptions={[10, 20, 50]}
    />
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
};

export default Pagination;