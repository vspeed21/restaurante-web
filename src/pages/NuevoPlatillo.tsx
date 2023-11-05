import { useFormik } from 'formik';
import * as yup from 'yup';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import FileUploader from 'react-firebase-file-uploader';

import { CATEGORIAS } from "../lib/constants";
import useFirebase from '../hooks/useFirebase';

import Input from "../componenents/formulario/Input";
import Error from '../componenents/formulario/Error';

function NuevoPlatillo() {

  const [subiendoImage, setSubiendoImage] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [urlImagen, setUrlImagen] = useState('');

  const { firebase } = useFirebase();

  // schema to validate form fields
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

  // Hook para redireccionar
  const navigate = useNavigate();

  // inicializar valores
  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categoria: '',
      imagen: '',
      descripcion: '',
      existencia: true,
    },
    validationSchema: validationSchema,
    onSubmit: platillo => {
      try {
        platillo.imagen = urlImagen;
        firebase.db.collection('platillos').add(platillo);
        navigate('/menu');

      } catch (error) {
        console.log(error);
      }
    }
  });

  // images function
  const handleUploadStart = () => {
    setProgreso(0);
    setSubiendoImage(true);
  }

  const handleUploadError = (error: unknown) => {
    setSubiendoImage(false);
    console.log(error);
  }

  const handleUploadSuccess = async (nombre: string) => {
    setProgreso(100);
    setSubiendoImage(false);

    const url = await firebase.storage.ref('platillos')
      .child(nombre).getDownloadURL();

    setUrlImagen(url);
  }

  const handleProgress = (progresoParam: number) => {
    setProgreso(progresoParam);
  }

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
            {!urlImagen ? (
              <label className="px-3 py-2 text-sm font-bold text-white bg-blue-700 rounded active:scale-95 w-60 hover:cursor-pointer hover:bg-blue-800" htmlFor="imagen">
                Seleccione la imagen del platillo
              </label>
            ) : null}
            <FileUploader
              hidden
              accept='image/*'
              id='imagen'
              name='imagen'
              randomizeFilename
              storageRef={firebase.storage.ref('platillos')}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </div>

          {subiendoImage ? (
            <div className='relative w-full h-10 border'>
              <div className={`bg-green-500 absolute left-0 top-0 h-10 text-white text-sm items-center flex px-3`} style={{ width: `${progreso}%` }}>
                {progreso} %
              </div>
            </div>
          ) : null}

          {urlImagen ? (
            <div className='mb-4'>
              <p className='py-1 mb-4 text-sm font-bold text-center text-white bg-green-500 rounded'>La imagen se subio correctamente</p>
              <img
                src={urlImagen}
                alt='imagen del platillo'
                title='Imagen del platillo subido'
                className='w-44 h-44'
              />
            </div>
          ) : null}

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
