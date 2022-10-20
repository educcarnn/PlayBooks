import { useContext } from "react"
import { userAddApi } from "../../providers/Api"
import { userAddStates } from "../../providers/States"

function FilteredItems(){
    const {setFilter, filter} = useContext(userAddApi)
    const {value, setValue } = useContext(userAddStates)

    const filteredProducts = () => {

    }

    return (
        <div>
 <ul className="Ul-Father">
        {filter.filter((searchValue) => {
            if (value === "") {
              return null;
            } else if (searchValue.volumeInfo.title.toLowerCase().includes(value.toString().toLowerCase())) {
              return searchValue;
            }
            else{
              return false
            }
          }).map((filteredProducts) => (
            <li key={filteredProducts.id}>
            <div>
              <img
                src={filteredProducts.volumeInfo.imageLinks.thumbnail}
                alt=""
                className="img"
              />
              {/* <button onClick={() => SetFavorites(item)}>FAV</button> */}
            </div>
            <div>
              <p>{filteredProducts.volumeInfo.title}</p>
              <p>Publicação {filteredProducts.volumeInfo.publishedDate}</p>
              <span>Número de páginas: {filteredProducts.volumeInfo.pageCount}</span>
            </div>
            <div>
              <span>Linguagem: {filteredProducts.volumeInfo.language} </span>
              <span>{filteredProducts.volumeInfo.printType}</span>
              <a href={filteredProducts.volumeInfo.previewLink} target="blank">
                Mais informações
              </a>
            </div>
          </li>
          ))}
      </ul>
        </div>
    )
}
export default FilteredItems