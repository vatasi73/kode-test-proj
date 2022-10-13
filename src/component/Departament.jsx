import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectDepartment, setDepartment } from "./features/loadAll-slice";

export const DEPART = [
  { value: "all", label: "Все" },
  { value: "android", label: "Android" },
  { value: "ios", label: "iOS" },
  { value: "design", label: "Дизайн" },
  { value: "management", label: "Менеджмент" },
  { value: "qa", label: "QA" },
  { value: "back_office", label: "Бэк-офис" },
  { value: "frontend", label: "Frontend" },
  { value: "hr", label: "HR" },
  { value: "pr", label: "PR" },
  { value: "backend", label: "Backend" },
  { value: "support", label: "Техподдержка" },
  { value: "analytics", label: "Аналитика" },
];

export default function Departament() {
  const dispatch = useDispatch();
  const chooseDepartment = useSelector(selectDepartment);
  const handleChooseDep = (e) => {
    dispatch(setDepartment(e));
  };

  return (
    <div className="ml-1 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          {DEPART.map((dep, i) => (
            <button
              onClick={() => handleChooseDep(dep.value)}
              value={chooseDepartment}
              key={i}
              className={
                chooseDepartment === dep.value
                  ? "inline-block p-4 rounded-t-lg border-b-2  border-almost-purple text-black"
                  : `inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-almost-purple hover:text-black`
              }
            >
              {dep.label}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}
