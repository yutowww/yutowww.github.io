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
              {/* <Col md={3}>
                <Link to="/recruitment/recruit" className="footer1">
                  採用情報
                </Link>
              </Col> */}
              <Col md={3}>
                <Link to="/contact/Contact" className="footer1">
                  お問い合わせ
                </Link>
              </Col>
            </Row>
            <Row>
              
            </Row>
          </div>
          <div className="logo">
            <Link to="/">
              <h1>株式会社MS総合<span>研</span>究所</h1>
              <h2>東京都渋谷区恵比寿東3丁目16番1号<br />
                  ベルザ恵比寿ビル<br />
                  代表取締役　坂井勇一
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