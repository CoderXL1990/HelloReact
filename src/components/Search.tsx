import React from "react";
import { useState, useEffect, useCallback } from "react";

type Props = {
  onChange: (value: string) => void;
};

const Search = (props: Props) => {
  const { onChange } = props;
  const [value, setValue] = useState("");
  // useMemo  object 用
  // const func = useMemo(() => {
  //   return (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };
  // }, []);
  // useCallback  function 用
  const onValueChanged = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <div>
      <input type="text" value={value} onChange={onValueChanged}  />
    </div>
  );
};

export default Search;
