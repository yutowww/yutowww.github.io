import React from "react"
import { graphql,Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import Arrows from "../images/pic/arrows-.jpg"
import Digi from "../images/pic/digitization-DarkBlue.jpg"
import Stairs from  "../images/pic/stairs-LightGray.jpg"
import Archi from  "../images/pic/architecture-LightGray.jpg"
import Office from  "../images/pic/office-.jpg"
import Hands from  "../images/pic/hands-blue.jpg"
import Airplane from  "../images/pic/airplane-gray.jpg"


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="株式会社MS総研"/>
          <div className="Airplane">
            <img src={ Airplane } className="Airplane" alt=""/>
          </div>
        <section className="page-section back" id="about">
            <div className="row justify-content-center">
              <div className="leftright">
                <div className="OrangeBox">
                  <h1 className="bigmessage1 text-black">We can,</h1>
                  <h1 className="bigmessage1 text-black">We do,</h1>
                  <h1 className="bigmessage1 text-black">We go.</h1>
                  <div className="text-center">
                    <button type="button" className="btn-outline-primary blueline-button" >
                      <Link className="js-scroll-trigger nav-link" to="/recruitment/recruit">企業理念</Link>
                    </button>
                  </div>
                </div>
                <img src={ Arrows } className="arrow" alt=""/>
                <img src={ Digi } className="digi" alt=""/>
              </div>
                <img src={ Stairs } className="stairs" alt=""/>
              <div className="parent">
                <Link className="peripheryBox" to="/recruitment/recruit">
                  <img src={ Office } className="office" alt=""/>
                  <h3>Company</h3>
                  <p>会社案内</p>
                </Link>
                <Link className="peripheryBox" to="/recruitment/recruit">
                  <img src={ Hands } className="hands" alt=""/>
                  <h3>Recruit</h3>
                  <p>採用情報</p>
                </Link>
              </div>
            </div>
        </section>
         <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
           <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
         </PortfolioModal>
       </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
