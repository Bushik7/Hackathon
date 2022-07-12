import React from "react";
import { Col, Button, Card, Row } from "react-bootstrap";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";

const Slider = ({ userSlider }) => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {userSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card style={{ width: "85%", margin: "0 70px", border: "none" }}>
              <Row>
                <Col>
                  <Card.Img height="250" variant="left" src={slide.img} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{slide.title}</Card.Title>
                    <Card.Text>{slide.description}</Card.Text>
                    <Button variant="warning" href={slide.url}>
                      Перейти
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;