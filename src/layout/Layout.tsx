import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />

      <div className='md:w-3/5 xl:w-4/5'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
