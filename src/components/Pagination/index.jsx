import React from 'react';
import Pagination from 'react-js-pagination';
import './style.css';

export default function Pagenation({ totalPosts, limit, page, updatePage }) {
  const handlePageChange = (page) => {
    updatePage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={limit}
      totalItemsCount={totalPosts}
      pageRangeDisplayed={limit}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
}
