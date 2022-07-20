import React from "react"
import Stairs from  "../../images/pic/stairs-LightGray.jpg"
import Archi from  "../../images/pic/architecture-LightGray.jpg"
import Minister from "../../images/pic/minister.jpg"
import Mapping from "../access/map"
import "./home.scss"
import Layout from "../../components/layout"

const Home = () => {

    return (
        <Layout>
        <div className="greet">
                    <img src={ Minister } className="minister" alt=""/>
                
                <div className="box">
                    <div className ="smalltitle">
                        <p><span>■</span>MS総研の使命感</p>
                    </div>
                    {/* <div>
                        <p className="sub_title">１.チャレンジ精神</p>
                    </div> */}
                    <div className="sub_contentsR">
                        <p>"MS総合研究所はIT企業に関わる技術者の満足度を向上させることで<br />
                            IT企業の業績を向上させることで社会に貢献する企業を目指すことを<br />
                            使命と致します"</p>
                    </div>
                </div>
        </div>
        <div className="mapping">
            {/* <img src={ Archi } className="stairs" alt="" /> */}
            <h1>アクセス</h1>
            <p>access</p>
            <h3>〒101-0054<br />
                　　　　東京都　港区芝浦<br />
                　　　　　　　〜〜ビルディング　７階
            </h3>
            <div className="map"><Mapping /></div>
        </div>
        
</Layout>
    )
}

export default Home