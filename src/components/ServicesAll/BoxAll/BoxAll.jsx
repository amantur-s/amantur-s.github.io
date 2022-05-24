import c from "./BoxAll.module.css";
import img from "../../../images/iconSer.png";
import { NavLink } from "react-router-dom";

const BoxAll = (props) => {
  return (
    <div className={c.box}>
      <img src={img} alt="" />
      <h3>01. Исследование и упаковка</h3>
      <p>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
      <NavLink to="/more"> Подробнее </NavLink>
    </div>
  );
};

export default BoxAll;
