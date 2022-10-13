import React, { useEffect, useState } from "react";
import ga from "../img/ga.png";
import { AiOutlineStar } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";

import Wrapper from "../component/Wrapper";

export default function UserPage() {
  const { state } = useLocation();
  const [employee, setEmployers] = useState([]);
  useEffect(() => {
    if (state && state.id) {
      setEmployers(state);
    }
  }, [state]);

  const { birthday, firstName, lastName, userTag, position, phone } = employee;

  const today = new Date();
  const birthDate = new Date(birthday);
  const age_now = today.getFullYear() - birthDate.getFullYear();
  const formatYear = new Intl.NumberFormat("ru", {
    style: "unit",
    unit: "year",
    unitDisplay: "long",
  });

  return (
    <div>
      <div className="flex  bg-not-so-gray">
        <div className=" w-full max-h-18  rounded-md  pt-[4.5rem] pb-6 text-center">
          <div className=" items-center w-full h-full">
            <figure className="w-[6.5rem]  h-[6.5rem] rounded-full mx-auto mb-6">
              <img
                className="w-full h-full"
                src={ga}
                alt="Злой гусь с палкой:D"
              />
            </figure>
            <div className="flex flex-col ">
              <h2 className="font-bold text-base w-full justify-between pb-3">
                {firstName} {lastName}
                <span className="pl-1  text-sm font-normal text-gray-400 ">
                  {userTag}
                </span>
              </h2>
              <span className="font-normal text-xs text-gray-400">
                {position}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Wrapper>
        <Link className="absolute top-0  text-black ml-3.5 mt-7 " to="/">
          <IoIosArrowBack />
        </Link>
        <div className="flex mt-3 mx-0.5 justify-between">
          <div className="flex font-medium">
            <AiOutlineStar className="mt-1" />
            <span className="pl-3 ">{birthday}</span>
          </div>
          <span className="text-gray-400 font-medium">
            {formatYear.format(age_now)}
          </span>
        </div>
        <div className="mt-12 flex font-medium">
          <FiPhone className="mt-1" />
          <div className="pl-3">
            <Link
              href={phone?.replace(
                /\+(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
                "+$1 ($2) $3 $4 $5"
              )}
            >
              {phone?.replace(
                /\+(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
                "+$1 ($2) $3 $4 $5"
              )}
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
