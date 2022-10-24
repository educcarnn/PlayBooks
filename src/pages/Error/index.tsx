
import { useHistory } from "react-router-dom";
import { HomeDiv } from "../Home/style"

function ErrorPage(){
    let history = useHistory();
    const handleContents = () => {
      history.push("/contents");
    };
    
    return (
        <HomeDiv>
            <div className="text">404</div>
            <button className="button class" onClick={handleContents}>Voltar para a ação</button>
        </HomeDiv>
    )
}
export default ErrorPage