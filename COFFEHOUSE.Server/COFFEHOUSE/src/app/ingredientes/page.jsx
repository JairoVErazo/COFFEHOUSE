import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div style={{ backgroundColor: "#efeceb", color: "#94303c" }}>
          <h2 className="uppercase font-semibold text-6xl">ingredientes</h2>
          <div className="space-y-3">
            <div className="bg-white flex rounded-lg py-6 px-16">
              <img
                src="/img/huevos.jpg"
                width={200}
                className="rounded-sm"
                style={{
                  borderColor: "#94303c",
                  border: "solid",
                  borderWidth: "10px",
                }}
                alt="Ingrediente 1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
