import Sidebar from '../components/Sidebar'
import { FiMessageCircle } from "react-icons/fi";
import '../styles/Contact.css'
import { CiLock, CiMail, CiLocationOn } from "react-icons/ci";
import { IoPersonOutline, IoTimeOutline } from "react-icons/io5";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io"
import { AiTwotoneMessage } from "react-icons/ai";

function Contact() {
    return (

        <div className="container" >

            <Sidebar />
            <div className="right-content">

                <div className="right-contact">
                    <div className="top-right">
                        <div className="form">

                            <div className="input">
                                <h4><FiMessageCircle /> Mesaj Gönderin</h4>
                                <div className="input-column"> <input type="text" placeholder="Adınız Soyadınız" />
                                    <input type="text" placeholder="E-Mail Adresiniz" /></div>
                                <input type="text" placeholder="Konu" />
                                <textarea style={{ height: '100px', resize: 'none', border: ' 1px solid #6C757D', borderRadius: '8px', padding: '8px' }} placeholder="Mesajınız"></textarea>
                                <button>Mesaj Gönder</button>
                                <p style={{ color: '#6C757D' }}> <CiLock /> Mesajlarınız güvenli bir şekilde iletilir</p>
                            </div>
                        </div>


                        <div className="contact">
                            <h4> <IoPersonOutline /> İletişim Bilgileri</h4>
                            <div className="contact-cards">
                                <div className="contact-card">
                                    <div className="icon"><CiMail /></div>
                                    <div className="contact-content">
                                        <p>E-Mail</p>
                                        <p>akdumanaleyna9@gmail.com</p>
                                    </div>
                                </div>


                                <div className="contact-card">
                                    <div style={{ color: 'purple' }} className="icon"><FaPhoneAlt /></div>
                                    <div className="contact-content">
                                        <p>Telefon</p>
                                        <p>+90 552 244 14 81</p>
                                    </div>
                                </div>


                                <div className="contact-card">
                                    <div style={{ color: 'red' }} className="icon"><CiLocationOn /></div>
                                    <div className="contact-content">
                                        <p>Konum</p>
                                        <p>İstanbul, Türkiye/</p>
                                    </div>
                                </div>


                                <div className="contact-card">
                                    <div style={{ color: 'blue' }} className="icon"><FaLinkedinIn /></div>
                                    <div className="contact-content">
                                        <p>Linkedin</p>
                                        <p>linkedin.com/in/aleyna-akduman-313997313/</p>
                                    </div>
                                </div>


                                <div className="contact-card">
                                    <div className="icon"><IoLogoGithub /></div>
                                    <div className="contact-content">
                                        <p>Github</p>
                                        <p>github.com/Aleynaakduman</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="end-contact">
                    <div className="end-one">


                        <div className="end-icon">
                            <IoTimeOutline />
                        </div>
                        <div className="end-content">
                            <h4>Hızlı Geri Dönüş</h4>
                            <p style={{ color: '#6C757D' }} >Mesajlarınıza genellikle 24 saat içerisinde <br /> geri dönüş yapıyorum</p>
                        </div>
                    </div>

                    <div className="end-two">


                        <div className="end-icon">
                            <AiTwotoneMessage />
                        </div>
                        <div className="end-content">
                            <h4>Bir Proje Fikriniz Var Mı?</h4>
                            <p style={{ color: '#6C757D' }} >Yeni projeler ve iş birlikleri hakkında
                                <br /> konuşmaktan mutluluk duyarım!</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Contact