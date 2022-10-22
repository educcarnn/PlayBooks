import { Link } from "react-router-dom";


function Articles() {
  return (
    <div>
        <div>Artigos</div>
      <ul>
        <li>
          <div>
            <p>
              Retratos da leitura no Brasil: por que estamos perdendo leitores
            </p>
            <span>Fonte: Cenpec</span>
            <Link to="/menos-leitores">Ler mais</Link>
          </div>
        </li>
        
        <li>
          <div>
            <p>
            Qual é a importância da leitura na Educação Infantil?
            </p>
            <span>Fonte: Blog Leituirinha</span>
            <Link to="/importancia-da-leitura">Ler mais</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Articles;
