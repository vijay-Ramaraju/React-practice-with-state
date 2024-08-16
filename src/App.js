import { useState } from "react";

import "./styles.css";

export default function App() {
  const [btnchange, setBtnChange] = useState("");

  const handleBtn = (str) => {
    if (btnchange.includes(str)) {
      let index = btnchange.indexOf(str);
      // console.log(index);
      let newString = btnchange.slice(0, index) + btnchange.slice(index + 3);
      console.log(btnchange.slice(0, index));
      console.log(btnchange.slice(index + 3));
      console.log(newString);
      setBtnChange(str + "->" + newString);
    } else {
      setBtnChange((prev) => prev + str + "->");
    }
  };
  return (
    <div className="App">
      <button onClick={() => handleBtn("a")}>a</button>
      <button onClick={() => handleBtn("b")}>b</button>
      <button onClick={() => handleBtn("c")}>c</button>
      <button onClick={() => handleBtn("d")}>d</button>
      <div>
        <p>{btnchange}</p>
      </div>
    </div>
  );
}
