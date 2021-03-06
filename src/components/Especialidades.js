import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Especialidades = () => {
  const { t } = useTranslation();
  return (
    <Container className="cont-especialidades" id="especialidades">
      <Row>
        <Col md={12}>
          <Card className="text-white rounded-0 border-0">
            <StaticImage
              alt="health supply"
              src="../images/especialidades-sm.png"
              className="d-block d-lg-none"
              style={{ height: "100%", width: "100%" }}
            // imgStyle={{ objectFit: "contain" }}
            />
            <StaticImage
              alt="health supply"
              src="../images/especialidades.png"
              className="d-none d-lg-block"
              style={{ height: "100%", width: "100%" }}
            // imgStyle={{ objectFit: "contain" }}
            />
            <Card.ImgOverlay>
              <div className="texto-tarjeta mt-md-3 mt-lg-5 ms-md-3 ms-lg-5">
                <h3 className="titulo-home text-light">
                  {t("medicamentos.titulo")}
                </h3>
                <p className="texto-especialidades">
                  {t("medicamentos.subtitulo")}
                </p>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mb-5">
        <Col md={12} lg={11} className="card-especialidades">
          <div className="bg-card shadow">
            <Row>
              <Col md={4} lg={5} className="my-auto">
                <h3 className="titulo-especialidad">
                  {t("especialidades.titulo")}
                </h3>
                <p className="texto-especialidad">
                  {t("especialidades.parrafo")}
                </p>
              </Col>
              <Col md={8} lg={7}>
                <Swiper
                  className="mySwiper"
                  navigation={true}
                  slidesPerView={1}
                  // autoHeight={true}
                  // loop={Infinity}
                  autoplay={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/oncologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("oncologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("oncologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/neurologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("neurologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("neurologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/dermatologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("dermatologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("dermatologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/patologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("patologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("patologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/infectologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("infectologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("infectologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/neumologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("neumologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("neumologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/reumatologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("reumatologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("reumatologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/hematologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("hematologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("hematologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/ginecologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("ginecologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("ginecologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/endocrinologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("endocrinologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("endocrinologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  <SwiperSlide className="px-3 px-md-5 py-2">
                    <Container className="p-2">
                      <Row className="shadow rounded-3">
                        <Col md={3} lg={3} xxl={5} className="my-auto">
                          <figure className="p-3 mb-0">
                            <StaticImage
                              alt="health supply"
                              src="../images/especialidades/cardiologia.png"
                              className=""
                              style={{ height: "100%", width: "100%" }}
                              imgStyle={{ objectFit: "contain" }}
                            />
                          </figure>
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          xxl={7}
                          className="my-auto p-4 ps-md-0"
                        >
                          <h3 className="titulo-especialidad">
                            {t("cardiologia.titulo")}
                          </h3>
                          <p className="texto-especialidad-card">
                            {t("cardiologia.parrafo")}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Especialidades;
