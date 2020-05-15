import React from 'react';
import { Link } from 'react-router-dom';

function AsideBar() {
  return (
    <aside>
      <div>
        <Link to='/login'>登录</Link>
      </div>
      <div>
        <Link to='/detail'>详情</Link>
      </div>
    </aside>
  );
}

export default AsideBar;
