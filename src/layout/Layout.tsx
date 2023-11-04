import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar />

      <div className='p-6 md:w-3/5 xl:w-4/5'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
