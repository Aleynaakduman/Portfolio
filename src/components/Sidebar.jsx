
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaLinkedinIn ,  FaGithub } from "react-icons/fa";
import { CiMail , CiYoutube  } from "react-icons/ci";
import '../styles/Tabs.css'
const Sidebar = () => {
  return (
    
        <div className='left'>
                    <div className="profile-img">
                         <img src="../src/img/aleyimg.jpg" alt="Profile" />
                    </div>
                        <div className="content">
                            <h4>Aleyna Akduman</h4>
                            <p style={{ color: 'blue' }} >Frontend Developer</p>
                            <p style={{color: '#6C757D', margin: '10px'}} >React, JavaScript ve modern teknolojilerle kullanıcı dostu web uygulamaları geliştiriyorum</p>
                            <span className='cizgi'></span>
                     <div style={{color: '#6C757D'}} className='content-2' >
                           <p><SlCalender />  10-04-2003</p>
                        <p><FaLocationDot />  İstanbul, Türkiye</p>
                        <p><CiMail /> aleyna9@gmail.com</p>
                    <div className='social-icons' >
                          <a href="https://www.linkedin.com/in/aleyna-akduman/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/aleyna-akduman" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <CiYoutube />
                        </a>
                    </div>
                     </div>
                        </div>
                </div>
    
  )
}

export default Sidebar