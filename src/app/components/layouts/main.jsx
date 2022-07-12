import React from "react";
import { Container } from "react-bootstrap";
import TextAnimation from "../common/textAnimation/textAnimation";
import Users from "./users";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../store/usersSlice";
import Loading from "../ui/loading";

const Main = () => {
  const data = useSelector(getDataStatus());
  return (
    <>
      <Container>
        {data ? (
          <div className="main-wrapper">
            <TextAnimation text={"Добро пожаловать!"}/>
            <p>
              Данное приложение реализовала команда 20-й учебной группы 3-го потока на курсе "Junior Frontend Developer".
              Для большинства участников команды инструменты были новыми.
              Реализовать все задуманное в такой срок оказалось сложно, так как приходилось на лету осваивать стек и несколько раз переписывать отдельные части приложения.
              
            </p>
            <p>Мы не успели сделать полноценный, красивый и бесперебойно работающее приложение.
              В будущем планируем тщательнее готовиться к участию, делать заготовки и наборы решений, которые можно будет быстро перекомпоновать под задачи хакатона.</p>
            <p className="mb-5">P.S. мы старались</p>
            <Users/>
          </div>
        ) : <Loading/>}
      </Container>
    </>
  );
};

export default Main;
