import React, { useState } from 'react';
import style from './style.css';
import Pagination from 'react-js-pagination';

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
