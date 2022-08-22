import { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import useFetch from "../tiles/deal_details/state/useFetch";

const ULComponent = () => {
	const data = useFetch("https://jsonplaceholder.typicode.com/todos");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  return (
    <div>
      <h3>This is UL tag</h3>
      <hr />
      <br />

      <ul>
        {data &&
          data.map((item) => {
            return <ListComponent key={item.id} item={item} />;
          })}
      </ul>
    </div>
  );
};

export default ULComponent;
