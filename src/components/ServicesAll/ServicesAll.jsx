import Button from "../ButtonWrapper/Button";
import BoxAll from "./BoxAll/BoxAll";
import c from "./ServicesAll.module.css";

const ServicesAll = (props) => {
  return (
    <div className={c.servicesAll}>
      <div className={c.head_title}>
        <h2>Наши работы, на которых мы специализируемся</h2>
        <Button name="Все услуги"></Button>
      </div>
      <div className={c.boxCont}>
        <BoxAll />
        <BoxAll />
        <BoxAll />
      </div>
      <div className={c.line} />
    </div>
  );
};
export default ServicesAll;
