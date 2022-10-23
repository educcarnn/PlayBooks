import { useContext } from "react";
import { userAddApi } from "../../providers/Api";
import { userAddStates } from "../../providers/States";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { ContentsLi } from "../ListItems/style";

function FilteredItems() {
  const { filter } = useContext(userAddApi);
  const { value } = useContext(userAddStates);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <ul className="Ul-Father">
          {filter
            ?.filter((searchValue) => {
              if (value === "") {
                return null;
              } else if (
                searchValue?.volumeInfo?.title
                  .toLowerCase()
                  .includes(value.toString().toLowerCase()) ||
                searchValue?.volumeInfo?.language
                  .toLowerCase()
                  .includes(value.toString().toLowerCase())
              ) {
                return searchValue;
              } else {
                return false;
              }
            })
            .map((filteredProducts) => (
              <SwiperSlide>
                {filter.length === 0 ? (
                  <div>
                    <div>Nenhum livro encontrado</div>
                  </div>
                ) : (
                  <ContentsLi key={filteredProducts.id}>
                    <div>
                      <img
                        src={filteredProducts?.volumeInfo?.imageLinks.thumbnail}
                        alt={filteredProducts?.volumeInfo?.imageLinks.thumbnail}
                        className="img"
                      />
                    </div>
                    <div className="itemContent">
                      <p className="text">
                        {filteredProducts?.volumeInfo?.title}
                      </p>
                      <span>
                        Número de páginas:{" "}
                        {filteredProducts?.volumeInfo?.pageCount}
                      </span>
                    </div>
                    <div className="itemContent">
                      <span>
                        Linguagem: {filteredProducts?.volumeInfo?.language}{" "}
                      </span>
                      <span>{filteredProducts?.volumeInfo?.printType}</span>
                      <a
                        href={filteredProducts?.volumeInfo?.previewLink}
                        target="blank"
                      >
                        Mais informações
                      </a>
                    </div>
                  </ContentsLi>
                )}
              </SwiperSlide>
            ))}
        </ul>
      </Swiper>
    </div>
  );
}
export default FilteredItems;
