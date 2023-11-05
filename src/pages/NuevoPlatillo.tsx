import Input from "../componenents/formulario/Input";
import { CATEGORIAS } from "../lib/constants";

function NuevoPlatillo() {
  return (
    <>
      <h1 className="text-xl font-bold">Agregar Platillo</h1>

      <div className="flex justify-center mt-6">
        <form className="w-full max-w-3xl">
          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="nombre">Nombre</label>
            <Input
              placeholder="Ej: Dona Glaseada"
              id="nombre"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="precio">Precio</label>
            <Input
              type="number"
              placeholder="$15"
              id="precio"
              min={0}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="precio">Categoría</label>
            <select
              className="w-full px-3 py-2 leading-tight text-center text-gray-700 border rounded appearance-none focus:border-blue-800 focus:outline-none focus:shadow"
              id="precio"
            >
              <option value=''>-- Seleccione --</option>
              {CATEGORIAS.map(cat => (
                <option value={cat.value}>{cat.texto}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="imagen">Imagen</label>
            <Input
              id="imagen"
              type="file"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="descripcion">Descripción</label>
            <Input
              as="textarea"
              placeholder="Descripción del platillo"
              id="descripcion"
            />
          </div>

          <input
            type="submit"
            className="w-full p-2 mt-6 font-bold text-white uppercase bg-gray-800 active:scale-95 hover:cursor-pointer hover:bg-gray-900"
            value='Guardar platillo'
          />
        </form>
      </div>

    </>
  )
}

export default NuevoPlatillo;
