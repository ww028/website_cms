import React from 'react';
import { Link } from 'react-router-dom';

function MyHeader() {
  return (
    <header>
      <Link to='/login'>登录</Link>
      <Link to='/detail'>详情</Link>
    </header>
  );
}

export default MyHeader;
