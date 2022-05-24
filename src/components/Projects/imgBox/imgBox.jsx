import c from "./imgBox.module.css";
import img from "../../../images/iconProject.png";

const ImgBox = (props) => {
  return (
    <div className={c.imgWrap}>
      <img src={img} alt="" />
    </div>
  );
};

export default ImgBox;
