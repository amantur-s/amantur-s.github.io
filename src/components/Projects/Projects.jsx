import Button from "../ButtonWrapper/Button";
import ImgBox from "./imgBox/imgBox";
import c from "./Projects.module.css";

const Projects = (props) => {
  return (
    <div className={c.projects}>
      <h2>Наши проекты</h2>
      <p>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.
      </p>
      <div>
        <ImgBox />
        <ImgBox />
        <ImgBox />
        <ImgBox />
      </div>
      <Button name="Наши проекты" />
    </div>
  );
};

export default Projects;
