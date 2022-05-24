import c from "./AboutUs.module.css";
import img from "../../images/AboutUs.png";
import Box from "./Box/Box";

const AboutUs = (props) => {
  return (
    <div className={c.about}>
      <div className={c.box}>
        <div className={c.content}>
          <h2>Высокие стандарты разработки</h2>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={c.line}></div>
      <div className={c.box_wrap} >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default AboutUs;
