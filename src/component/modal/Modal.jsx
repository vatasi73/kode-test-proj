import React, { useEffect, useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort } from "../features/sort/sort-slice";

export default function Modal({ setActive }) {
  const handleClick = () => setActive(false);
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const [checked, setChecked] = useState("");

  useEffect(() => {
    setChecked(String(Number(sort)));
    //eslint-disable-next-line
  }, []);

  const refWrapperModal = useRef(null);

  const handleChangeRadio = (event) => {
    const { value } = event.target;
    setChecked(() => value);
    dispatch(value === "1" ? setSort(true) : setSort(false));
    handleClick();
  };

  useEffect(() => {
    function click(e) {
      if (
        refWrapperModal.current &&
        !refWrapperModal.current.contains(e.target)
      ) {
        handleClick();
      }
    }
    document.addEventListener("click", click);
    return () => {
      document.removeEventListener("click", click);
    };
    //eslint-disable-next-line
  }, [refWrapperModal]);
  return (
    <div
      className={
        "flex fixed inset-0 bg-black bg-opacity-25   items-center justify-center z-50"
      }
    >
      class
      <div
        ref={refWrapperModal}
        className="bg-white p-2 rounded-[1.25rem] min-w-[23.2rem] max-h-[12rem] py-6 px-4.5"
      >
        <button
          onClick={handleClick}
          className="absolute  flex  mt-1 ml-[19.5rem]  bg-gray-100 rounded-full font-medium"
        >
          <RiCloseFill className="text-gray-400 w-6 h-6 " />
        </button>

        <h3 className="mb-8 text-[1.25rem]  text-center font-semibold">
          Сортировка
        </h3>
        <div className="flex items-center mb-4 pl-5 pb-4">
          <input
            onChange={handleChangeRadio}
            id="default-radio-1"
            type="radio"
            checked={sort}
            value={"1"}
            name="default-radio"
            className={
              checked === "1"
                ? "rounded-full h-4 w-4 border border-almost-purple form-check-input appearance-none checked:border-4 checked:border-almost-purple  cursor-pointer"
                : "form-check-input appearance-none rounded-full h-4 w-4 border border-almost-purple cursor-pointer"
            }
          />
          <label
            htmlFor={"default-radio-1"}
            className="ml-2 cursor-pointer text-sm font-medium text-black dark:text-gray-300"
          >
            По алфавиту
          </label>
        </div>
        <div className="flex items-center  pl-5 pb-8">
          <input
            id="default-radio-2"
            onChange={handleChangeRadio}
            value={"0"}
            checked={!sort}
            type="radio"
            name="default-radio"
            className={
              checked === "0"
                ? "rounded-full h-4 w-4 border border-almost-purple form-check-input appearance-none checked:border-4 checked:border-almost-purple  cursor-pointer"
                : "form-check-input appearance-none rounded-full h-4 w-4 border border-almost-purple cursor-pointer"
            }
          />
          <label
            htmlFor={"default-radio-2"}
            className="ml-2 cursor-pointer text-sm font-medium text-blac dark:text-gray-300"
          >
            По дню рождения
          </label>
        </div>
      </div>
    </div>
  );
}
