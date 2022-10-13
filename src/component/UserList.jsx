import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ga from "../img/ga.png";

import { selectSort } from "./features/sort/sort-slice";

export default function UserList(el) {
  const sort = useSelector(selectSort);
  const { firstName, lastName, userTag, birthday, department, id } = el;

  const date = new Date(el.birthday);
  const month = date.toLocaleString("default", { month: "long" });

  return (
    <div className=" w-full h-18  rounded-md  mt-6">
      <Link to={`/id/${id}/`} state={el}>
        <div className="flex  flex-row items-center w-full h-full justify-start">
          <figure className="w-[4.5rem]  h-[4.5rem] rounded-full mr-[1.25rem]">
            <img
              className="w-full h-full"
              src={ga}
              alt="Злой гусь с палкой:D"
            />
          </figure>
          <div className="flex flex-col">
            <h2 className="font-medium text-base w-full justify-between">
              {firstName} {lastName}
              <span className="pl-2  text-sm  text-gray-400 ">{userTag}</span>
            </h2>
            <span className="font-normal text-xs text-gray-400">
              {department}
            </span>
          </div>
          {!sort && (
            <span className="font-normal text-xs text-gray-400 ml-auto">
              {birthday.slice(8)} {month.substring(0, 3)}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
