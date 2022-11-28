import React from "react";

function CreateProduct() {
  return (
    <div className="p-6 w-full bg-gray-800 text-gray-50 rounded-md">
      <form
        onSubmit={() => {
          handlerNewProduct();
        }}
        className="flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 xl:flex xl:flex-col rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Nuevo producto</p>
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
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
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
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
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
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
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
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="stock" className="text-sm">
                Stock
              </label>
              <input
                id="state"
                type="text"
                placeholder="Stock"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="precio" className="text-sm">
                Precio
              </label>
              <input
                id="Precio"
                type="text"
                placeholder="valor numerico"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateProduct;
