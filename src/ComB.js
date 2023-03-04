import { useContext } from "react";
import { UserContext } from "./ComA";

function ComB() {
  const GetData1 = useContext(UserContext);
  console.log(GetData1);
  return (
    <>
      <h1>
        This is Child{" "}
        {GetData1.map((elem, id) => {
          return (
            <>
              <div
                className="container"
                style={{ border: "1px solid black", margin: "5px" }}
              >
                <h6>{elem.title}</h6>
                <img
                  src={elem.image}
                  alt={elem.img}
                  style={{ width: "50px", height: "70%" }}
                />
                <span>{elem.price}</span>
                <h6>{elem.description}</h6>
              </div>
            </>
          );
        })}
      </h1>
    </>
  );
}
export default ComB;
