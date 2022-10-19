import { useContext } from "react";
import { userAddStates } from "../../providers/States";
import { userAddApi } from "../../providers/Api";

function Description() {
  const { list } = useContext(userAddApi);
  const { isOpen, setIsOpen } = useContext(userAddStates);

  return (
    <div>
      {isOpen ? (
        <div>
          <span onClick={() => setIsOpen(false)}>{"X"}</span>
          <div>
            {list?.map((item) => (
              <li key={item.id}>
                <div>
                  <span>{item.id}</span>
                </div>
              </li>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Description;
