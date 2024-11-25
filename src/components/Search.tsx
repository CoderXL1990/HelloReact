import React from "react";
import { useState, useEffect} from "react";

type Props = {
  onChange: (value: string) => void,

}

const Search = (props: Props) => {
  const { onChange } = props;
  const [value, setValue] = useState("");
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
