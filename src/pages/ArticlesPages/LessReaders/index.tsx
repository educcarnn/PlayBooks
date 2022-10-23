import { useHistory } from "react-router-dom";
import { articlesTextLess } from "../../../services/articlestext";
import { ArticlesDiv, DivElem } from "../style";

function LessReaders() {
  let history = useHistory();
   const handleContents = () => {
    history.push("/contents");
  };

  return (
    <div>
       <DivElem className="elem" onClick={handleContents}>Play Books</DivElem>
      <ul>
        <ArticlesDiv>
          {articlesTextLess?.map((item) => (
            <li key={item.id} className="ArticlesLi">
              <span>{item.name}</span>
              <div>{item.tittle}</div>
              <div>{item.article}</div>
              <img src={item?.firstImage} alt={item?.firstImage} className="img"/>
              <div>{item.secondArticle}</div>
              <img src={item?.secondImage} alt={item?.secondImage} className="img"/>
              <div>{item.thirdArticle}</div>
              <div className="elem">
                <span>Para mais informações</span>
                <span>Fonte: {item.font} </span>
                <a href={item.link} target="blank">
                  Matéria completa
                </a>
              </div>
            </li>
          ))}
        </ArticlesDiv>
      </ul>
    </div>
  );
}

export default LessReaders;
