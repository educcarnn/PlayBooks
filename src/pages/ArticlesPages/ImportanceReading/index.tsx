import { Link } from "react-router-dom";
import { articlesTextImportance } from "../../../services/articlestext";

function ImportanceReading() {
  return (
    <div>
      <ul>
        {articlesTextImportance?.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.title}</span>
            <div>{item.article}</div>
            <img src={item.image} alt={item.image} />
            <div>{item.secondArticle}</div>
            <div>
              <span>Para mais informações</span>
              <span>Fonte: {item.font} </span>
              <a href={item.link} target="blank">
                Matéria completa
              </a>
            </div>
          </li>
        ))}
      </ul>

      <Link to="/contents">Ir para conteúdos</Link>
    </div>
  );
}
export default ImportanceReading;
