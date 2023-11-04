import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <h1 className="text-xl font-bold">Menu</h1>
      <Link
        to='/nuevo-platillo'
        className="inline-block p-2 mt-3 mb-5 font-bold text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
      >
        Agregar platillo
      </Link>
    </div>
  )
}

export default Menu;
