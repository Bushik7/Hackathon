import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import Line from "../common/line";
import SocialNetworks from "../ui/socialNetworks";
import LineBlack from "../common/lineBlack";
import ButtonScrollTo from "../common/buttonScrollTo";
import {useSelector} from "react-redux";
import {getDataStatus, getUserById} from "../../store/usersSlice";
import {useParams} from "react-router-dom";
import Loading from "../ui/loading";
import SliderBox from "../ui/slider/slider";
import Wave from "../common/vawe/wave";
import Progress from "../common/progress";
import BackButton from "../common/backButton";
import Bookmark from "../common/bookmark/bookmark";

const UserPage = () => {
  const {userId} = useParams();
  const dataStatus = useSelector(getDataStatus());
  const user = useSelector(getUserById(Number(userId)));
  return (
    <>
      {!dataStatus ? <Loading/>
        : (
          <>
            <Container>
              <Row>
                <Col>
                  <BackButton/>
                </Col>
                <Col className="usePage d-flex justify-content-end">
                  <Bookmark/>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6} className="mt-5 d-flex">
                  <Row className="d-flex flex-column">
                    <Col>
                      <Row className="d-flex flex-column">
                        <Col>
                          <Line className="mt-5"/>
                          <h1 className="my-3">
                            {user.name} {user.surname}
                          </h1>
                          <Line/>
                        </Col>
                        <Col className="mt-2 d-flex justify-content-between w-50">
                          <SocialNetworks socialNetworks={user.socialNetworks}/>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="d-flex flex-column justify-content-end">
                      <h5>
                        Студент курса "Junior Frontend Developer Поток 3"
                        <LineBlack/>
                      </h5>
                      <p>
                        Освоили тему React на уровне Junior, овладели
                        основами профессии. Создали с помощью
                        фреймворка React Single Application визуальную
                        составляющую приложения: элементы и анимацию.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} md={6} className="d-flex justify-content-center">
                  <Image src={user.img} className="w-75 border-radius"/>
                </Col>
              </Row>
              <Row className="mt-5 d-flex flex-column">
                <Col className="d-flex flex-column align-items-center">
                  <h2>
                    Вместе мы создаем решения
                  </h2>
                  <h4 className="text-danger">
                    Хакатон. Командная разработка по теме «React»
                  </h4>
                  <p>
                    Закрепляем знания модуля React, разработаем SPA
                    приложение на React благодаря командной работе.
                  </p>
                </Col>
                <Col className="d-flex flex-column align-items-center">
                  <Line/>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3">
                  <ButtonScrollTo/>
                  <Row>
                    <Col>
                      МЫ команда состоящая из программистов, дизайнеров, продакт-менеджеров и других
                      специалистов IT-сферы. Мы уже готовый коллектив, так и одиночные специалисты,
                      которые объедились непосредственно на мероприятии.
                    </Col>
                    <Col>
                      Как только получили задание, сразу приступили к работе над кодингом для достижения поставленных
                      целей.
                      Работа кипит почти без перерывов до тех пор, пока не истечет уделенное на соревнование время.
                      Царит довольно напряженная атмосфера, разработчики работают в течение длительных промежутков
                      времени без сна и останавливаются только для того, чтобы поесть и попить.
                    </Col>
                    <Col>
                      {user.involvedInDevelopment}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className="my-5 p-5 banner-background text-center text-white">
              <h3>
                Мы, как специалисты можем предложить подходящую модель для решения ваших проблем
              </h3>
            </div>
            <Container>
              <Row>
                <Col>
                  <Col className="d-flex flex-column align-items-center">
                    <h2>
                      Обо мне
                    </h2>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <Line/>
                  </Col>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <p>
                    {user.about}
                  </p>
                </Col>
              </Row>
              <Row className="mt-5">
                <Row>
                  <Col>
                    <Col className="d-flex flex-column align-items-center">
                      <h2>
                        Ключевые навыки
                      </h2>
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                      <Line/>
                    </Col>
                  </Col>
                </Row>
                <Col className="mt-3">
                  <Progress user={user.progressBar}/>
                </Col>
              </Row>
              <Row className="mt-5">
                <Row>
                  <Col>
                    <Col className="d-flex flex-column align-items-center">
                      <h2>
                        Мои работы
                      </h2>
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                      <Line/>
                    </Col>
                  </Col>
                </Row>
                <Col className="mt-5">
                  <SliderBox userSlider={user.slider}/>
                </Col>
              </Row>
            </Container>
          </>
        )}
    </>
  );
};

export default UserPage;