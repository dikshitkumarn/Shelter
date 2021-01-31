import { useEffect, useState } from "react";
import EmptyMessage from "../../../../UI/EmptyMessage/EmptyMessage";
import ErrorBox from "../../../../UI/ErrorBox/ErrorBox";
import { axiosInstance } from "../../../../Utility/axiosInstance";
import EachMate from "./EachMate/EachMate";
import Loader from "./Loader";
import "./HouseMembers.css";
import AsyncButton from "../../../../UI/AsyncButton/AsyncButton";

const HouseMembers = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post("/server1/houseMembers")
      .then((res) => {
        console.log(res.data);
        setData([...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
        // setData([{ name: "Mani", contact: 329049 }]);
      });
  }, []);

  let element = (
    <div>
      <AsyncButton
        className="blue back-button bck-transparent move-left"
        onClick={props.close}
      >
        <i className="fas fa-chevron-left"></i> Back
      </AsyncButton>
      {data.map((el, index) => (
        <EachMate {...el} key={index} />
      ))}
    </div>
  );

  if (loading) {
    element = <Loader />;
  } else if (data.length === 0) {
    element = (
      <div>
        <AsyncButton
          className="blue back-button bck-transparent"
          onClick={props.close}
        >
          <i className="fas fa-chevron-left"></i> Back
        </AsyncButton>
        <EmptyMessage message="No Roommates found !" />
      </div>
    );
  }
  if (error) {
    element = (
      <div>
        <ErrorBox message="Something went wrong !" />
        <br />
        <AsyncButton
          className="blue back-button bck-transparent"
          onClick={props.close}
        >
          <i className="fas fa-chevron-left"></i> Back
        </AsyncButton>
      </div>
    );
  }

  return (
    <div
      className="houses-container flex-row flex-wrap"
      style={{ position: "relative", marginTop: 30 }}
    >
      {element}
    </div>
  );
};

export default HouseMembers;