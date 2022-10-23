import {  useHistory } from "react-router-dom";
import { articlesTextImportance } from "../../../services/articlestext";
import { ArticlesDiv, DivElem } from "../style";

function ImportanceReading() {
  let history = useHistory();
   const handleContents = () => {
    history.push("/contents");
  };

  return (
    <div>
      <DivElem className="elem" onClick={handleContents}>Play Books</DivElem>
      <ArticlesDiv>
        <div>
          <ul>
            {articlesTextImportance?.map((item) => (
              <li key={item.id} className="ArticlesLi">
                <span>{item.name}</span>
                <span>{item.title}</span>
                <div>{item.article}</div>
                <img src={item.image} alt={item.image} className="img" />
                <div>{item.secondArticle}</div>
                <div className="elem">
                  <span>Para mais informações</span>
                  <span>Fonte: {item.font} </span>
                  <a href={item.link} target="blank">
                    Matéria completa
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ArticlesDiv>
    </div>
  );
}
export default ImportanceReading;
