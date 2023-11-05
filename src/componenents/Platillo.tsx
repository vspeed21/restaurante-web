import { useRef } from 'react';

import { Platillo as IPlatillo } from "../interface/platillo";
import useFirebase from '../hooks/useFirebase';

interface Props {
  platillo: IPlatillo
}

function Platillo({ platillo }: Props) {

  const { id, nombre, imagen, categoria, descripcion, existencia, precio } = platillo;

  const existenciaRef = useRef<HTMLSelectElement | null>(null);

  const { firebase } = useFirebase();

  function handleUpdateDisponibilidad() {
    if (existenciaRef.current) {
      const existenciaVar = (existenciaRef.current.value === 'true');

      try {
        firebase.db.collection('platillos')
          .doc(id)
          .update({ existencia: existenciaVar });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='w-full px-3 mb-4'>
      <div className="p-5 bg-white shadow-md">
        <div className="lg:flex lg:gap-3">
          <div className="lg:w-5/12 xl:w-3/12">
            <img
              src={imagen}
              alt="imagen platillo"
              className='w-full h-44'
            />

            <div className="mt-3 sm:flex sm:gap-2">
              <label htmlFor="existencia" className="font-bold">Existencía: </label>
              <select
                className="px-4 text-center text-gray-700 border rounded focus:border-blue-800 focus:outline-none focus:shadow"
                id="existencia"
                value={existencia.toString()}
                ref={existenciaRef}
                onChange={() => handleUpdateDisponibilidad()}
              >
                <option value='true'>Disponible</option>
                <option value='false'>No Disponible</option>
              </select>
            </div>

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