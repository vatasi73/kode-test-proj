import React from "react";
import sherlok from "../img/sherlok.png";
export default function NothingFound() {
  return (
    <div className="flex  h-screen justify-center mt-40">
      <div className="text-center">
        <figure>
          <img src={sherlok} alt="шерлок" className="mx-auto" />
        </figure>
        <h2 className="text-xs font-bold pb-1">Мы никого не нашли</h2>
        <p className="text-xs text-gray-400 font-normal pb-1">
          Попробуй скорректировать запрос
        </p>
      </div>
    </div>
  );
}
