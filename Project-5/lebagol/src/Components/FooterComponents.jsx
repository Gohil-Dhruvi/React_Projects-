import { Container, Row, Col } from "react-bootstrap";
import DecorLine from "../assets/decor-primary.svg";
import DeliveryIcon from "../assets/location.jpg";
import IcecreamIcon from "../assets/ice-cream.jpg";
import StoreIcon from "../assets/home.jpg";
import logo from "../assets/logo-primary.svg";
import PaymentImage from "../assets/payment.png";

const FooterComponents = () => {
  return (
    <footer style={{ fontFamily: "sans-serif", marginTop: "60px" }}>
      <Container>
        {/* Internal Responsive Style */}
        <style>
          {`
            .footer-link {
              font-size: 14px;
              margin-top: 8px;
              color: #000;
              transition: all 0.3s ease;
              text-decoration: none;
            }

            .footer-link:hover {
              color: #dc3545;
            }

            .footer-brand {
              font-weight: bold;
              color: #000;
            }

            .footer-brand:hover {
              color: #dc3545;
            }

            @media (max-width: 767.98px) {
              .footer-icons {
                flex-direction: column !important;
                gap: 1.5rem;
              }
              .footer-icons img {
                margin: 0 auto;
              }

              .footer-icons > div {
                width: 100%;
              }

              .footer-main > div {
                margin-bottom: 30px;
              }

              .footer-main {
                text-align: center;
              }

              .footer-bottom {
                text-align: center !important;
              }

              .footer-bottom img {
                margin: 10px 0;
              }
            }
          `}
        </style>

        {/* Top Icons Section */}
        <Row
          className="align-items-center"
          style={{
            borderBottom: "1px solid #ddd",
            borderTop: "3px solid red",
            paddingBottom: "20px",
            paddingTop: "30px",
          }}
        >
          <Col md={4}>
            <h2
              style={{
                fontWeight: "500",
                fontFamily:
                  'Kalnia, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                fontSize: "28px",
              }}
            >
              Need Lebagol Now?
            </h2>
          </Col>

          <Col md={8}>
            <div className="d-flex justify-content-around align-items-center flex-wrap footer-icons">
              {/* Local Delivery */}
              <div className="text-center">
                <img
                  src={DeliveryIcon}
                  alt="Local Delivery"
                  style={{ width: "50px" , height :"50px"}}
                />
                <p
                  className="mt-2"
                  style={{ fontWeight: 500, fontSize: "12px" }}
                >
                  LOCAL DELIVERY
                </p>
              </div>

              <img src={DecorLine} alt="divider" style={{ height: "60px"}} />

              {/* Scoop Shops */}
              <div className="text-center">
                <img
                  src={IcecreamIcon}
                  alt="Scoop Shops"
                  style={{ width: "50px" , height :"50px" }}
                />
                <p
                  className="mt-2"
                  style={{ fontWeight: 500, fontSize: "12px" }}
                >
                  SCOOP SHOPS
                </p>
              </div>

              <img src={DecorLine} alt="divider" style={{ height: "60px" }} />

              {/* Grocery Locator */}
              <div className="text-center">
                <img
                  src={StoreIcon}
                  alt="Grocery Locator"
                  style={{ width: "50px"  , height :"50px"}}
                />
                <p
                  className="mt-2"
                  style={{ fontWeight: 500, fontSize: "12px" }}
                >
                  GROCERY LOCATOR
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Main Footer Grid */}
        <Row className="text-start py-5 footer-main">
          {/* Logo & Contact */}
          <Col md={3}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "50px",
                width: "160px",
                marginBottom: "25px",
              }}
            />
            <p className="footer-link">
              5609 E Sprague Ave, Spokane
              <br />
              Valley, WA 99212, USA
            </p>
            <p
              style={{
                fontWeight: "700",
                fontSize: "18px",
                marginTop: "30px",
                marginBottom: "0px",
              }}
            >
              + 1834 123 456 789
            </p>
            <p className="footer-mail">support1@example.com</p>
          </Col>

          {/* Info Links */}
          <Col md={2}>
            <h6 style={{ fontWeight: "700", fontSize: "16px" }}>Information</h6>
            <p className="footer-link">Help Center</p>
            <p className="footer-link">Shipping</p>
            <p className="footer-link">Returns</p>
            <p className="footer-link">Policies</p>
            <p className="footer-link">Gift Cards</p>
          </Col>

          {/* Useful Links */}
          <Col md={2}>
            <h6 style={{ fontWeight: "700", fontSize: "16px" }}>Useful Links</h6>
            <p className="footer-link">My Account</p>
            <p className="footer-link">Order Tracking</p>
            <p className="footer-link">All Products</p>
            <p className="footer-link">Ingredients</p>
            <p className="footer-link">Wholesale</p>
          </Col>

          {/* About Us */}
          <Col md={2}>
            <h6 style={{ fontWeight: "700", fontSize: "16px" }}>About Us</h6>
            <p className="footer-link">Our story</p>
            <p className="footer-link">Contacts</p>
            <p className="footer-link">Affiliate Program</p>
            <p className="footer-link">Referral Program</p>
            <p className="footer-link">Careers</p>
          </Col>

          {/* Categories */}
          <Col md={3}>
            <h6 style={{ fontWeight: "700", fontSize: "16px" }}>Categories</h6>
            <p className="footer-link">Gelato</p>
            <p className="footer-link">Kulfi</p>
            <p className="footer-link">Sherbet</p>
            <p className="footer-link">Sorbet</p>
            <p className="footer-link">Frozen Yogurt</p>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row
          className="py-4"
          style={{ borderTop: "1px solid #ddd", fontSize: "14px" }}
        >
          <Col xs={12} md={4} className="text-start footer-bottom">
            <p>
              © 2024 <strong className="footer-brand">Lebagol</strong>. All Rights Reserved
            </p>
          </Col>

          <Col xs={12} md={4} className="text-center footer-bottom">
            <img
              src={PaymentImage}
              alt="Payment Methods"
              style={{ maxHeight: "30px" }}
            />
          </Col>

          <Col xs={12} md={4} className="text-end footer-bottom">
            <p
              style={{
                display: "inline",
                marginRight: "10px",
                fontSize: "14px",
              }}
            >
              Follow Us:
            </p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
              width="18"
              alt="Facebook"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
              width="18"
              alt="Twitter"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
              width="18"
              alt="Instagram"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              width="18"
              alt="Pinterest"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png"
              width="18"
              alt="YouTube"
              style={{ marginLeft: "15px" }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponents;
