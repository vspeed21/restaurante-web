import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from "../componenents/formulario/Input";
import { CATEGORIAS } from "../lib/constants";
import Error from '../componenents/formulario/Error';

function NuevoPlatillo() {

  const validationSchema = yup.object().shape({
    nombre: yup.string()
      .min(4, 'Los platillo deben tener al menos 4 caracteres')
      .required('El nombre del platillo es obligatorio'),
    precio: yup.number()
      .min(1, 'Debes agregar el precio')
      .required('El precio del platillo es obligatorio'),
    categoria: yup.string()
      .required('La categoría es obligatoria'),
    descripcion: yup.string()
      .required('La descripción es obligatoria')
      .min(10, 'La descripción debe ser de al menos 10 caracteres'),
  });

  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categoria: '',
      imagen: '',
      descripcion: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <>
      <h1 className="text-xl font-bold">Agregar Platillo</h1>

      <div className="flex justify-center mt-6">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-3xl">
          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="nombre">Nombre</label>
            <Input
              placeholder="Ej: Dona Glaseada"
              id="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
            />
          </div>

          {formik.errors.nombre ? (
            <Error msg={formik.errors.nombre} />
          ) : null}

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="precio">Precio</label>
            <Input
              type="number"
              placeholder="$15"
              id="precio"
              min={0}
              value={formik.values.precio}
              onChange={formik.handleChange}
            />
          </div>

          {formik.errors.precio ? (
            <Error msg={formik.errors.precio} />
          ) : null}

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="categoria">Categoría</label>
            <select
              className="w-full px-3 py-2 leading-tight text-center text-gray-700 border rounded appearance-none focus:border-blue-800 focus:outline-none focus:shadow"
              id="categoria"
              value={formik.values.categoria}
              onChange={formik.handleChange}
            >
              <option value=''>-- Seleccione --</option>
              {CATEGORIAS.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.texto}</option>
              ))}
            </select>
          </div>

          {formik.errors.categoria ? (
            <Error msg={formik.errors.categoria} />
          ) : null}

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="imagen">Imagen</label>
            <Input
              id="imagen"
              type="file"
              value={formik.values.imagen}
              onChange={formik.handleChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-bold text-gray-700" htmlFor="descripcion">Descripción</label>
            <Input
              as="textarea"
              placeholder="Descripción del platillo"
              id="descripcion"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
            />
          </div>

          {formik.errors.descripcion ? (
            <Error msg={formik.errors.descripcion} />
          ) : null}

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
