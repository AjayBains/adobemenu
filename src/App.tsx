import { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="w-[200px] h-14 bg-white rounded-2xl flex  justify-center items-center  p-2">
            <img
              src="
            /src/assets/dart.png"
              className="w-8 h-4"
              alt="Dart logo"
            />
            <p className="text-bold">Dart</p>
          </div>
          <div className=" w-[14px] h-5 bg-white "></div>
          <div className="w-[200px] h-14 bg-white rounded-2xl flex  justify-between items-center gap-2 p-2">
            <p
              className={`w-full h-full flex  justify-center items-center ${
                activeIndex === 0
                  ? "bg-blue-500 text-white"
                  : "hover:bg-slate-300 hover:text-blue-700"
              } rounded-lg  cursor-pointer`}
              onClick={() => setActiveIndex(0)}
            >
              Item1
            </p>
            <p
              className={`w-full h-full flex  justify-center items-center ${
                activeIndex === 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-slate-300 hover:text-blue-700"
              } rounded-lg cursor-pointer `}
              onClick={() => setActiveIndex(1)}
            >
              Item2
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
