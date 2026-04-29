import Sidebar from "../components/Sidebar"
import '../styles/Tabs.css'
import '../styles/Skills.css'
import { FaReact, FaHtml5, FaGithub,FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMui, SiVite } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
function Skills() {
    return (
        <div className="container">
            <Sidebar />


            <div className="right" >
                <h3>Yeteneklerim</h3>
                <p style={{ color: '#6C757D' }}>Teknik becerilerim ve teknolojilere hakimiyet seviyem</p>
                <div className="skills-cards">
                    <div className="teknik-yetenekler">
                        <h4>Teknik Yetenekler</h4>
                        <div className="slide">

                            <p><FaReact /> React</p>
                            <div className="ilerleme">
                                <div style={{ width: '85%' }} className="cubuk"></div>
                            </div>
                        </div>

                        <div className="slide">

                            <p> <IoLogoJavascript /> JavaScript</p>
                            <div className="ilerleme">
                                <div style={{ width: '70%' }} className="cubuk"></div>
                            </div>
                        </div>

                        <div className="slide">

                            <p> <FaHtml5 />
                                HTML&CSS</p>
                            <div className="ilerleme">
                                <div style={{ width: '100%' }} className="cubuk"></div>
                            </div>
                        </div>

                        <div className="slide">

                            <p> <FaGithub /> Git&Github</p>
                            <div className="ilerleme">
                                <div style={{ width: '80%' }} className="cubuk"></div>
                            </div>
                        </div>


                        <div className="slide">

                            <p> <SiMui /> Material UI</p>
                            <div className="ilerleme">
                                <div style={{ width: '70%' }} className="cubuk"></div>
                            </div>
                        </div>

                    </div>
                        
                    <div className="right-column">
                        <div className="araçlar" >
                            <h4>Araçlar & Teknolojiler</h4>
                            <div className="araclar" >
                                <div className="arac" >
                                    <FaReact />
                                    <span>React</span>
                                </div>
                                <div className="arac" >
                                    <IoLogoJavascript />
                                    <span>JavaScript</span>
                                </div>
                                <div className="arac" >
                                    <SiMui />
                                    <span>MUI</span>
                                </div>
                                <div className="arac" >
                                    <FaGitAlt />
                                    <span>Git</span>
                                </div>
                                <div className="arac" >
                                    <FaGithub />
                                    <span>Github</span>
                                </div>
                                <div className="arac" >
                                    <SiVite />
                                    <span>Vite</span>
                                </div>
                                <div className="arac" >
                                    <FaHtml5 />
                                    <span>HTML&CSS</span>
                                </div>
                                <div className="arac" >
                                    <BsBootstrap />
                                    <span>Bootstrap</span>
                                </div>
                                <div className="arac" >
                                    <TbBrandRedux />
                                    <span>Redux</span>
                                </div>
                            </div>




                        </div>

                        <div className="yetenek-kategori">
                            <h4>Yetenek Kategorilerim</h4>
                            <div className="donut-container">
                                <div style={{
                                    background: `conic-gradient(#7c4dff 0% 40%,    
        #b39ddb 40% 70%,   
        #d1c4e9 70% 90%,   
        #e0e0e0 90% 100%)`}} className="donut">

                                    <div className="donut-ic">

                                    </div>
                                </div>
                           
                            </div>

                                <div className="yetenek-content">
                            <div className="dot-content">
                                    <div style={{background:'#7c4dff'}}  className="dot"></div>
                                    <span >Frontend Development</span>
                            </div>
                             <div className="dot-content">
                                    <div style={{background:'#e0e0e0 '}}  className="dot"></div>
                                    <span>UI/UX Design</span>
                            </div>
                             <div className="dot-content">
                                    <div style={{background:'#b39ddb'}}  className="dot"></div>
                                    <span>API Entegrasyonu</span>
                            </div>
                            
                            <div className="dot-content">
                                    <div style={{background:'#d1c4e9'}}  className="dot"></div>
                                    <span>Mühendislik</span>
                            </div>
                                </div>
                           







                        </div>
                    </div>



                </div>


            </div>

        </div>
    )
}

export default Skills