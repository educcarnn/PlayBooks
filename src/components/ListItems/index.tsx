import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { userAddApi } from "../../providers/Api";
import { ContentsLi } from "./style";

export function ListItems() {
  const { list } = useContext(userAddApi);

  return (
    <div>
       <span>Livros</span>
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
          {list?.map((item) => (
            <SwiperSlide key={item?.id}>
              <ContentsLi key={item?.id}>
                <div>
                  <img
                    src={item?.volumeInfo?.imageLinks?.thumbnail}
                    alt=""
                    className="img"
                  />
                </div>
                <div className="itemContent">
                  <p className="text">{item?.volumeInfo?.title}</p>
                  {item?.volumeInfo?.pageCount === undefined ? (
                  <span>Número de páginas: Não informado</span>
                  ): (
                  <span>Número de páginas: {item?.volumeInfo?.pageCount}</span>
                  )}
                </div>
                <div className="itemContent">
                  <span>Linguagem: {item?.volumeInfo?.language} </span>
                  <span>Tipo: {item?.volumeInfo?.printType}</span>
                  <a href={item?.volumeInfo?.previewLink} target="blank">
                    Mais informações
                  </a>
                </div>
              </ContentsLi>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default ListItems;
