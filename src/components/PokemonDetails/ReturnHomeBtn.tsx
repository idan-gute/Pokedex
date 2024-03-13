import RightArrow from "../../assets/styles/Icons/RightArrow";
import { Link } from "react-router-dom";

const ReturnHomeBtn = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" ,marginBlockEnd:'40px'}}>
    <RightArrow />
    <Link to="/">Home page</Link>
  </div>
);

export default ReturnHomeBtn;
