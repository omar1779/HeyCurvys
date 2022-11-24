import React from "react";
import { useSelector } from "react-redux";
function Admin() {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const handlerNewProduct = () => {};
  return (
    <div className="overflow-auto scrollbar-hide p-2 h-full flex flex-col w-4/5 items-center sm:p-4   text-black">
      <div
        className="flex flex-col w-full"
      >
        <h2 className="mb-4 text-2xl font-thin text-black text-center">
          Panel de administracion
        </h2>
        <table className="w-full text-xs mb-5">
          <thead className="bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Producto</th>
              <th className="p-3">imagen</th>
              <th className="p-3">precio</th>
              <th className="p-3 text-right">delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((elements) => (
              <tr
                key={elements._id}
                className="border-b border-opacity-20 border-gray-700 bg-gray-300"
              >
                <td className="pr-3 pl-3 pb-1">
                  <p>{elements.name}</p>
                </td>
                <td className="pr-3 pl-3 pb-1">
                  <img
                    className="object-cover w-12 h-12 rounded-full"
                    src={elements.image}
                    alt={elements.name}
                  />
                </td>
                <td className="pr-3 pl-3 pb-1">
                  <p>{elements.price}</p>
                </td>
                <td className="text-center">
                  <button className="bg-violet-900 text-white w-5 h-5 rounded-full">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    </div>
  );
}

export default Admin;
