import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
function Search({ match }) {
  const location = useLocation();
  return (
    <>
      <h1>검색 페이지</h1>
      <p>여기는 {match.params.name}를 검색한 결과를 나타내고 있습니다</p>
    </>
  );
}

export default Search;
