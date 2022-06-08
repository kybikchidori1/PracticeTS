import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Страница Информация</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolores
        voluptatibus voluptas reprehenderit quaerat consequuntur, quae pariatur
        saepe. Facilis, porro!
      </p>
      <button className="btn" onClick={() => navigate("/")}>
        Обратно к списку
      </button>
    </>
  );
};
