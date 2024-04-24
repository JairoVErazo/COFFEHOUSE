export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div style={{ backgroundColor: "#bb8b90" }} className="rounded-lg">
        <div className="py-9 px-44 ">
          <h2 className="text-white font-extrabold text-center text-5xl">
            Log in
          </h2>
        </div>
        <form action="" className="mt-5 flex flex-col  items-center mb-10">
          <div className="flex flex-col ">
            <label htmlFor="" className="uppercase  text-white font-extrabold">
              username
            </label>
            <input
              type="text"
              className="w-80  rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="" className="uppercase  text-white font-extrabold">
              password
            </label>
            <input
              type="password"
              className="w-80  rounded-lg border-none"
              style={{ backgroundColor: "#dfdfdf" }}
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#94303c" }}
            className="px-14 text-white font-bold rounded-lg mt-10 py-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
