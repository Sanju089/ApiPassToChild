import { createContext, useEffect, useState } from "react";
import ComB from "./ComB";

const UserContext = createContext();
function ComA() {
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const data = await res.json();
      // console.log(data)
      setData1(data);
    };
    getData();
  }, []);
  // console.log(data1)
  return (
    <>
      <h1>This is parent</h1>
      <UserContext.Provider value={data1}>
        <ComB />
      </UserContext.Provider>
    </>
  );
}
export default ComA;
export { UserContext };
