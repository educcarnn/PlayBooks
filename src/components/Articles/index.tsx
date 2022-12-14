import { Link } from "react-router-dom";
import { ArticlesUl } from "./style";


function Articles() {
  return (
    <div>
        <div id="artigos">Artigos</div>
      <ArticlesUl>
        <li>
          <div>
            <p>
              Retratos da leitura no Brasil: por que estamos perdendo leitores
            </p>
            <span>Fonte: Cenpec </span>
            <Link to="/menos-leitores" target="blank"> Ler mais</Link>
          </div>
        </li>
        
        <li>
          <div>
            <p>
            Qual é a importância da leitura na Educação Infantil?
            </p>
            <span>Fonte: Blog Leituirinha </span>
            <Link to="/importancia-da-leitura" target="blank">Ler mais</Link>
          </div>
        </li>
      </ArticlesUl>
    </div>
  );
}
export default Articles;
