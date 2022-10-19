import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/App.css";

import { Pagination } from "swiper";
import { api } from "../../services/api";
import { Header } from "../../components/Header";

export function Contents() {
  interface ListProps {
    id: string;
  }

  const [list, setList] = useState<ListProps[]>([]);

  useEffect(() => {
    api.get("/volumes?q=search+terms").then((res) => {
      setList(res.data.items);
      console.log(res.data.items);
    });
  }, []);

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
            
              <div></div>
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
