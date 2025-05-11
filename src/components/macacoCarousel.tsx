"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MacacoCard from "./macacoCard";

type Macaco = {
  id: string;
  nome: string;
  especie: string;
  idade: number;
  descricao: string;
  fotoUrl: string;
};

export default function MacacoCarousel({ macacos }: { macacos: Macaco[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {macacos.map((macaco) => (
        <SwiperSlide key={macaco.id}>
          <MacacoCard macaco={macaco} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
