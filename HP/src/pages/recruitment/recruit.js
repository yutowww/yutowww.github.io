import React from "react"
import Stairs from  "../../images/pic/stairs-LightGray.jpg"
import Archi from  "../../images/pic/architecture-LightGray.jpg"
import Minister from "../../images/pic/minister.jpg"
import Mapping from "../access/map"
import "./recruit .scss"
import Layout from "../../components/layout"

const Recruit = () => {

    return (
        <Layout>
                <div className="greet">
                            <img src={ Minister } className="minister" alt=""/>
                        
                        <div className="box">
                            <div className ="smalltitle">
                                <p><span>■</span>代表挨拶</p>
                            </div>
                            <div>
                                <p className="sub_title">１.チャレンジ精神</p>
                            </div>
                            <div className="sub_contentsR">
                                <p>常に新しい技術が日進月歩のIT業界。<br />常に前向きにプラス思考で新しいことにチャレンジできる向上心のある方。</p>
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

export default Recruit;