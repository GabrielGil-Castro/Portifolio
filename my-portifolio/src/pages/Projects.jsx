import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const projects = [
  { id: 1, title: "Projeto 1", description: "Descrição do projeto 1" },
  { id: 2, title: "Projeto 2", description: "Descrição do projeto 2" },
  { id: 3, title: "Projeto 3", description: "Descrição do projeto 3" },
  { id: 4, title: "Projeto 4", description: "Descrição do projeto 4" },
];

function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Meus Projetos</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-4xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
