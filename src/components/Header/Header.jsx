import c from "./Header.module.css";
import image from "../../images/HeaderBanner.png";
import { NavLink } from "react-router-dom";
import Button from "../ButtonWrapper/Button";

const NavItem = (props) => {
  const path = props.url;
  return (
    <div className={c.nav_link}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Header = (props) => {
  return (
    <div className={c.header}>
      <img src={image} alt="" />
      <div className={c.header_line}></div>
      <div className={c.nav}>
        <NavItem url="/main" name="Главная" />
        <NavItem url="/main/projects" name="Наши проекты" />
        <NavItem url="/main/services" name="Услуги" />
        <NavItem url="/main/news" name="Новости" />
        <NavItem url="/main/contacts" name="Контакты" />
      </div>
      <div className={c.head_title}>
        <div>
          <h5>Передовая IT студия</h5>
          <h1>Мы создаем легкие решения сложных задач и проблем</h1>
          <Button name="Наши проекты" />
        </div>
      </div>
    </div>
  );
};

export default Header;
