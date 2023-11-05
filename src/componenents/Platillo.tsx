import { Platillo as IPlatillo } from "../interface/platillo";

interface Props {
  platillo: IPlatillo
}

function Platillo({ platillo }: Props) {

  const { nombre, imagen, categoria, descripcion, precio } = platillo;

  return (
    <div className='w-full px-3 mb-4'>
      <div className="p-5 bg-white shadow-md">
        <div className="lg:flex lg:gap-3">
          <div className="lg:w-5/12 xl:w-3/12">
            <img
              src={imagen}
              alt="imagen platillo"
            />
          </div>

          <div className="lg:w-7/12 xl:w-9/12">
            <p className="mb-2 text-2xl font-bold text-yellow-600">{nombre}</p>
            <p className="mb-2 text-gray-700">
              Categoría: {''}
              <span className="font-bold">
                {categoria.toLocaleLowerCase()}
              </span>
            </p>

            <p className="mb-2 text-gray-700">{descripcion}</p>

            <p className="mb-2 text-gray-700">
              Precio: {''}
              <span className="font-bold">
                $ {precio}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platillo