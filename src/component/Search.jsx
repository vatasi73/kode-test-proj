import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BiMenuAltRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "./features/search/search-slice";
import Modal from "./modal/Modal";

export default function Search() {
  const dispatch = useDispatch();

  const [isModalActive, setModalActive] = useState(false);

  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setModalActive(true);
  };

  return (
    <>
      <h2 className="mb-3 ml-3 text-2xl font-bold">Поиск</h2>
      <div className="w-full  mb-5">
        <form>
          <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <div className="w-4 h-4 absolute ml-3 pointer-events-none ">
              <GoSearch />
            </div>
            <div className="w- h-4 absolute mr-3  right-0 cursor-pointer">
              <BiMenuAltRight onClick={handleClick} />
            </div>
            <input
              onChange={handleSearch}
              value={search}
              type="text"
              name="search"
              placeholder="Введите имя, тег..."
              className="w-full pr-3 pl-10 py-2 placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-0 focus:ring-2 focus:outline-none "
            />
          </div>
        </form>
        {isModalActive && <Modal setActive={setModalActive} />}
      </div>
    </>
  );
}
