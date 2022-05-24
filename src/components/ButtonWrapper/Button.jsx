import c from "./Button.module.css";

const Button = (props) => {
  return <button className={c.button_wrapper}>{props.name}</button>;
};

export default Button;
