import { NavLink, useLocation } from "react-router-dom";


function Sidebar() {
  const location = useLocation();

  return (
    <aside className="p-6 bg-gray-800 md:w-2/5 xl:w-1/5">
      <h2 className="text-2xl font-bold text-center text-white uppercase">Restaurante App</h2>
      <p className="mt-2 text-center text-gray-400">Administra tus restaurant en las siguientes opciones:</p>

      <nav className="flex flex-col gap-3 mt-5">
        <NavLink
          to='/'
          className={`block p-1 rounded hover:bg-yellow-500 hover:text-gray-900 ${location.pathname == '/' ? 'bg-yellow-500' : 'text-gray-400'}`}
        >
          Ordenes
        </NavLink>
        <NavLink
          to='/menu'
          className={`block p-1 rounded hover:bg-yellow-500 hover:text-gray-900 ${location.pathname == '/menu' ? 'bg-yellow-500' : 'text-gray-400'}`}
        >
          Menú
        </NavLink>
      </nav>

    </aside>
  );
}

export default Sidebar;
