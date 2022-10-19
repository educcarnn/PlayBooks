import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/App.css";

import { Pagination } from "swiper";
import { Header } from "../../components/Header";

import { userAddApi } from "../../providers/Api";
import Description from "../../components/Description";
import { userAddStates } from "../../providers/States";

export function Contents() {
  const { list } = useContext(userAddApi);
  const { isOpen, setIsOpen } = useContext(userAddStates);

  console.log(list);
  // const open = (item: any) => {
  //   const findId = list.find((param) => param.id === item.id);

  //   if (findId) {
  //     return null;
  //   } else {
  //     setIsOpen(true)
  //   }

  // }

  return (
    <div>
      <Header />
      <div>
        {/* <Swiper
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
            <SwiperSlide>
            
              <div>Name 1 </div>
              <div>Name 2 </div>
            </SwiperSlide>
          </Swiper> */}
        {list?.map((item) => (
          <li key={item.id}>
            <div>
              <div></div>
              <div>
                  <p>{item.volumeInfo.title}</p>
                  <p>{item.volumeInfo.publishedDate}</p>
                  <span>{item.volumeInfo.pageCount}</span>
              </div>
              <div>
                <span>{item.saleInfo.language}</span>
                <span>{item.volumeInfo.printType}</span>
                <a href={item.volumeInfo.previewLink} target="_blank">
                  Mais informações
                </a>
              </div>
            </div>
          </li>
        ))}

        {/* <li id={item.id}>
                <div>Imagem</div>
                <div>Resumo</div>
                <div>Ebook</div>
                <div>
                  <div>Autores</div>
                  <div>País</div>
                </div>
              </li> */}
      </div>
    </div>
  );
}
