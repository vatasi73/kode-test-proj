import React from "react";
import nlo from "../img/nlo.svg";
export default function Error() {
  return (
    <div className="flex  h-screen justify-center mt-40">
      <div className="text-center">
        <figure>
          <img src={nlo} alt="нло" className="mx-auto" />
        </figure>
        <h2 className="text-xs font-bold pb-1">
          Какой-то сверхразум всё сломал
        </h2>
        <p className="text-xs text-gray-400 font-normal pb-1">
          Постараемся быстро починить
        </p>
        <button className="text-xs font-semibold text-almost-purple">
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
