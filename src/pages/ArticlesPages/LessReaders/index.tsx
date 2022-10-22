import { articlesTextLess } from "../../../services/articlestext";
import { Link } from "react-router-dom";

function LessReaders() {
  return (
    <div>
      <ul>
        {articlesTextLess?.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <div>{item.tittle}</div>
            <div>{item.article}</div>
            <img src={item?.firstImage} alt={item?.firstImage} />
            <div>{item.secondArticle}</div>
            <img src={item?.secondImage} alt={item?.secondImage} />
            <div>{item.thirdArticle}</div>
            <div>
              <span>Para mais informações</span>
              <span>Fonte: {item.font} </span>
                <a href={item.link} target="blank" >Matéria completa</a>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/contents">Ir para conteúdos</Link>
    </div>
  );
}

export default LessReaders;
