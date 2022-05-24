import c from "./Box.module.css";
import img from "../../../images/project.png";

const Box = (props) => {
  return (
    <div className={c.box}>
      <div className={c.img_border} >
        <img src={img} alt="" />
      </div>
      <div className={c.text}>
        <h3>Создание сайтов</h3>
        <p>
          Lorem Ipsum - это текст- "рыба", часто используе в печати и
          вэб-дизайне.
        </p>
      </div>
    </div>
  );
};

export default Box;
