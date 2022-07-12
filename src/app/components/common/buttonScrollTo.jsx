import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {IoArrowUpSharp} from "@react-icons/all-files/io5/IoArrowUpSharp";

const ButtonScrollTo = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {
        scroll > 150
          ? <>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button
                  className="position-fixed-button"
                  variant="outline-danger"
                  onClick={handleUpButton}
                >
                  <IoArrowUpSharp/>
                </Button>
              </Col>
            </Row>
          </>
          : ""
      }
    </>
  );
};

export default ButtonScrollTo;
