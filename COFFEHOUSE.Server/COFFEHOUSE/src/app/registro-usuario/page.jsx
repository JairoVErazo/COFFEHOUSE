const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg ">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-extrabold text-center text-5xl">
            Registrar Usuario
          </h2>
        </div>
        <form action="" className="mt-5 flex flex-col  items-center mb-10">
          <div className="flex space-x-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor=""
                  className="uppercase  text-white font-extrabold"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-80  rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold"
              >
                Apellido
              </label>
              <input
                type="text"
                className="w-80  rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor=""
                  className="uppercase  text-white font-extrabold"
                >
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  className="w-80  rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold"
              >
                contraseña
              </label>
              <input
                type="password"
                className="w-80  rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
              />
            </div>
          </div>

          <div className="flex space-x-10 mt-10">
            <div>
              <div className="flex flex-col ">
                <label
                  htmlFor=""
                  className="uppercase  text-white font-extrabold"
                >
                  Estado
                </label>
                <select
                  name=""
                  className="w-80  rounded-lg border-none"
                  style={{ backgroundColor: "#dfdfdf" }}
                  id=""
                ></select>
              </div>
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="uppercase  text-white font-extrabold"
              >
                Rol
              </label>
              <select
                name=""
                className="w-80  rounded-lg border-none"
                style={{ backgroundColor: "#dfdfdf" }}
                id=""
              ></select>
            </div>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#94303c" }}
            className="px-14 text-white font-bold rounded-lg mt-10 py-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
