import c from "./Services.module.css";
import Box from "./Box/Box";
import Button from "../ButtonWrapper/Button";

const Serices = (props) => {
  return (
    <div className={c.services}>
      <h2>Мы создаем мобильные приложения для крупных корпораций</h2>
      <h5>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </h5>
      <div className={c.box_wrap}>
        <Box />
        <Box />
        <Box />
      </div>
      <Button name="Все услуги"></Button>
    </div>
  );
};

export default Serices;
