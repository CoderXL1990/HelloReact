import React, { useState } from "react";

const List = () => {
  const [searchList, setSearchList] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  const addAction = (str: string) => {
    if (str.trim() !== "") {
      // setSearchList.push(str);
      setSearchList((prevList) => [...prevList, searchText]);
    }
    setSearchText("");
    (document.querySelector("#inputElement")! as HTMLInputElement) .blur()
    
  };

  const deleteAction = (item: string) => {
    setSearchList((prevList) => prevList.filter((i) => i !== item));
  };

  const searchTextHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    
  };

  return (
    <div>
      <div className=" bg-red-500 flex flex-col pt-8 justify-center items-center  h-44">
        <h2 className="title font-bold mb-3 text-white text-3xl">
          My To Do List
        </h2>
        <div className="searchContainer w-full flex flex-row justify-center items-center ">
          <input id="inputElement"
            className=" w-8/12 leading-10 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 pl-2"
            type="text"
            placeholder="Title..."
            onChange={searchTextHandle}
            value={searchText}
          />
          <button
            className="text-base bg-slate-200 leading-10 w-2/12 "
            onClick={() => {
              addAction(searchText);
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="list">
        <ul>
          {searchList.map((item, index) => {
            return (
              <li
                key={index}
                className="text-lg text-neutral-800 h-12 bg-slate-200 flex justify-between items-center pl-20 pr-2  odd:bg-slate-100 even:bg-slate-200 hover:bg-slate-300 "
              >
                <span >{item}</span>
                <button
                  className="w-14 h-full hover:bg-red-500 text-sm text-black"
                  onClick={() => {
                    deleteAction(item);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;
