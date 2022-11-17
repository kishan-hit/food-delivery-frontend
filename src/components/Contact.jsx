import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza shop</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate ratione rem tempore impedit hic reiciendis distinctio
              aperiam at culpa amet sunt iusto nam consequatur odit quibusdam
              obcaecati quo quisquam animi quis quod, cumque, architecto nemo
              nobis. Possimus nam non quod vel tempore voluptatum modi iusto,
              cum nisi distinctio hic, rem fugit. Dignissimos dolorum molestiae
              iure quibusdam porro quidem facere officiis libero? Deleniti,
              quidem quos! Laudantium ut molestias provident autem. Laudantium
              provident nemo eligendi fugit id, atque dicta in? Beatae expedita
              adipisci odio eaque, illo eos blanditiis fugiat dolore hic id
              consectetur porro aut rem, provident veniam unde. Temporibus rerum
              possimus reiciendis! Temporibus veritatis voluptate fuga
              voluptatem consequuntur exercitationem laudantium enim maxime.
              Rerum nulla perspiciatis soluta expedita, nesciunt molestias sed
              reiciendis minima ut ea et, mollitia sequi necessitatibus, atque
              magni ducimus itaque quos assumenda in fugit eveniet omnis
              dolorum? Voluptas neque facere quod provident. Modi praesentium
              sunt ex beatae quisquam eveniet corporis at, aut dignissimos sint.
              Sed, non eaque? Laborum assumenda ab ea, voluptas quis error
              perspiciatis! Velit unde provident eligendi! Sit, neque quidem eum
              possimus officiis asperiores atque? Repellendus voluptatum
              perferendis laboriosam laborum porro recusandae, eveniet ex a
              cumque molestias explicabo debitis itaque cum? Sunt illo quisquam
              aliquid vel ipsa!
            </p>
            <table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --Contact Details--
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-45678</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
