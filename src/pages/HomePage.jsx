import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../component/Error";
import {
  selectAllInfo,
  selectDepartment,
  selectVisibleItems,
  SetloadAll,
} from "../component/features/loadAll-slice";
import { selectControls } from "../component/features/search/search-slice";
import { selectSort } from "../component/features/sort/sort-slice";
import NothingFound from "../component/NothingFound";
import Skeleton from "../component/Skeleton";
import Search from "../component/Search";
import Departament from "../component/Departament";

import UserList from "../component/UserList";

export default function HomePage() {
  const dispatch = useDispatch();

  const { error, status } = useSelector(selectAllInfo);

  const search = useSelector(selectControls);

  const sort = useSelector(selectSort);
  const loadAll = useSelector((state) => selectVisibleItems(state, search));

  const SortArray = (a, b) => {
    if (sort === true) {
      return a.firstName.localeCompare(b.firstName);
    }
    if (sort === false) {
      const aCreatedDate = new Date(a.birthday.slice(5));
      const bCreatedDate = new Date(b.birthday.slice(5));
      if (aCreatedDate < bCreatedDate) return -1;
    }
  };

  const renderList = useMemo(() => {
    const sortAll = JSON.parse(JSON.stringify(loadAll)).sort(SortArray);
    const after = [];
    const before = [];
    const date = new Date();
    const year = date.getFullYear().toString();
    const dateNow = date.getTime();

    sortAll.forEach((el) => {
      const birth = new Date(
        el.birthday.replace(/(\d{4})-(\d{2})-(\d{2})/g, `${year}-$2-$3`)
      ).getTime();

      const between = dateNow - birth;

      if (between > 0) {
        after.push(el);
      } else {
        before.push(el);
      }
    });

    return [
      ...after.map((el) => <UserList key={el.id} {...el} />),
      !sort && !!before.length && (
        <div className="flex text-gray-400">
          <span className="flex border-b-2 w-[50%] border-gray-400 mx-10 mb-2"></span>
          {date.getFullYear()}
          <span className="flex border-b-2 w-[50%] border-gray-400 mx-10 mb-2"></span>
        </div>
      ),
      ...before.map((el) => <UserList key={el.id} {...el} />),
    ];
  }, [loadAll]);

  const department = useSelector(selectDepartment);

  useEffect(() => {
    dispatch(SetloadAll(department.value || department));
  }, [dispatch, department]);

  return (
    <>
      <Search />
      <Departament />
      {status === "loading" ? (
        <Skeleton />
      ) : (
        <>
          {error ? <Error /> : renderList}
          {!loadAll.length && <NothingFound />}
        </>
      )}
    </>
  );
}
