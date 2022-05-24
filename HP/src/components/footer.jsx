import { Link } from "gatsby";
import React from "react"
import logo from "../images/force/logo-white.png"
import { Container , Row , Col } from "react-bootstrap"

const Footer = () => {

    return(
        <footer className="footer-bg">
          <div className="rightBox">
            <Row className="boxfont">
              <Col md={3}>
                <Link to="/company_information/Home" className="footer1">
                  企業理念
                </Link>
              </Col>
              <Col md={3}>
                <Link to="/recruitment/recruit" className="footer1">
                  採用情報
                </Link>
              </Col>
              <Col md={3}>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 9 }}>
                <Link to="/contact/Contact" className="footer1">
                  お問い合わせ
                </Link>
              </Col>
            </Row>
          </div>
          <div className="logo">
            <Link to="/">
              <h1>(株)MS総合<span>研</span>究所</h1>
              <h2>〒101-0054<br />
                  東京都港区〜〜<br />
                  〜〜ビルディング〜階
              </h2>
            </Link>
          </div>
          <div className="copyright">
            <p>Copyright©︎Managiment＆Solution</p>
          </div>
          <a href="#page-top"><button type="button" className="btn btn-dark pagetop-button" href="#page-top">PAGE TOP</button></a>
        </footer>
    )
}

export default Footer;