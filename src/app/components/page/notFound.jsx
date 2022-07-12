import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const handleSaveMain = () => {
    history.push("/");
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col className="mt-3">
          <h1 className="text-center text-danger">
            Ошибка 404
          </h1>
        </Col>
      </Row>
      <Row className="mt-5 p-5 d-flex justify-content-center">
        <p className="lead text-center">
          Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно
          она устарела, была удалена, или был введен неверный адрес в адресной строке.
        </p>
        <Button
          variant="outline-secondary"
          className="w-25 mt-5"
          onClick={() => handleSaveMain()}
        >
          Перейти на главную
        </Button>
      </Row>
    </Container>
  );
};

export default NotFound;
