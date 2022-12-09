import React from "react";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import {postProductAsync} from "../features/product/productSlice"
function CreateProduct() {
  const dispatch = useDispatch()
  const {register , handleSubmit} = useForm();
  const create = (data) =>{
    dispatch(postProductAsync(data));
  }
  return (
    <div className="p-6 w-full bg-gray-800 text-gray-50 rounded-md">
      <form
        onSubmit={handleSubmit(create)}
        className="flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 xl:flex xl:flex-col font-thin rounded-md shadow-sm bg-violet-900">
          <div className="space-y-2 col-span-full lg:col-span-1 font-thin">
            <p className="font-thin">Nuevo producto</p>
            <p className="text-xs">
              formulario para crear un producto en la base de datos
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Nombre" className="text-sm">
                Nombre del producto
              </label>
              <input
                id="Nombre"
                type="text"
                placeholder="Nombre"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 pl-1 focus:ring-violet-400 border-gray-700 text-gray-900"
                {...register("name")}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="imagen" className="text-sm">
                Imagen del producto
              </label>
              <input
                id="imagen"
                type="text"
                placeholder="URL de Firebase Bucket"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 pl-1 focus:ring-violet-400 border-gray-700 text-gray-900"
                {...register("image")}
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="descripcion" className="text-sm">
                Descripcion del producto
              </label>
              <input
                id="descripcion"
                type="text"
                placeholder="Descripcion"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 pl-1 focus:ring-violet-400 border-gray-700 text-gray-900"
                {...register("description")}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="categoria" className="text-sm">
                Categoria
              </label>
              <input
                id="categoria"
                type="text"
                placeholder="Categoria"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 pl-1 focus:ring-violet-400 border-gray-700 text-gray-900"
                {...register("category")}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="stock" className="text-sm">
                Stock
              </label>
              <input
                id="state"
                type="number"
                placeholder="Stock"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 pl-1 focus:ring-violet-400 border-gray-700 text-gray-900"
                {...register("stock")}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="precio" className="text-sm">
                Precio
              </label>
              <input
                id="Precio"
                type="number"
                placeholder="valor numerico"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 pl-1 focus:ring-violet-400 border-gray-700 text-gray-900"
                {...register("price")}
              />
            </div>
            <button className="bg-white w-20 text-black rounded-md hover:animate-pulse">Enviar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateProduct;
