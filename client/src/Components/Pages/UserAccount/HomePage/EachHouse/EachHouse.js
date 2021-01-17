import { numberWithComma } from "../../../../Utility/numberWithComma";
import "./EachHouse.css";
import DefaultHouse from "../../../../../assets/default-house-image.jpg";
import { useHistory } from "react-router";

const EachHouse = (props) => {
  const history = useHistory();
  return (
    <div
      className="each-house flex-row hover-grow"
      onClick={() => history.push(`/home/${props.houseId || "afijd"}`)}
    >
      <div
        style={{ backgroundImage: `url(${props.image || DefaultHouse})` }}
        className="house-image"
      />
      <div className="house-details-container flex-row flex-wrap">
        <div className="each-detail">
          <div className="single-detail">
            <small className="text-left">
              <strong>{props.name}</strong>
            </small>
          </div>
          <div className="single-detail">
            <small className="text-left">
              <strong>₹ {numberWithComma(props.rupees)}</strong>
            </small>
          </div>
        </div>
        <div className="each-detail address">
          <div className="single-detail">
            <small className="text-left">
              <strong>{props.address}</strong>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachHouse;