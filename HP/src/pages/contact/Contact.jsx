import React from "react"
import ContactImage from "../../images/force/contact_fullsize.jpg"
import Form from "./Form"

import "./contact.scss"
import Layout from "../../components/layout"
import Archi from "../../images/pic/architecture-LightGray.jpg"
const Contacts = () => {

    return (
        <Layout>
            <div className="parent">
                <div className="heading">
                    {/* <img src={ Archi } className="stairs" alt=""/> */}
                    <h1>お問い合わせ</h1>
                </div>
                <div className="formPart">
                    <div className="container mt-5 contents">
                        <p>弊社に関してのご不明な点はこちらのフォームにて承ります。</p>
                        {/* <p>下記フォームにご記入いただきました皆様の個人情報は、<Link to="/contact/PrivacyPolicy">「個人情報保護ポリシー」</Link>に基づき取り扱わせていただきます。</p> */}
                        <p>ご記入いただきました個人情報は、お問い合わせへご回答するのみに利用する目的で収集いたします。</p>
                        <p className="required-text">※すべて必須項目です。</p>
                    </div>
                        <Form />
                    <div className="container mt-5 mb-5 bottom-contents">
                        <p>お電話にてお問い合わせ頂く場合、株式会社MS総研【総合係】まで</p>
                        <p className="h5">TEL 03-XXXX-XXXX</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contacts