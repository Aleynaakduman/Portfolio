import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CgProfile } from "react-icons/cg";
import { CiMail} from "react-icons/ci";
import { IoGitNetworkOutline } from "react-icons/io5";
import { FiTool } from "react-icons/fi";
import '../styles/Tabs.css';
import { GoProjectSymlink } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import Sidebar from '../components/Sidebar'
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact'
import projeres1 from "../img/proje-1.png"
import projeres2 from "../img/hava.webp"
import projeres3 from "../img/web.webp"
export default function LabTabs() {
   const project = () => {
    window.location.href = "https://github.com/Aleynaakduman/Portfolio";
   }

   const project2 = () => {
    window.location.href = "https://github.com/Aleynaakduman/hava-durumu";
   }


   const project3 = () => {
    window.location.href = "https://github.com/Aleynaakduman/react-coffee";
   }

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList variant = "fullWidth" onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<CgProfile />} label="Hakkımda" value="1" />
            <Tab icon={<FiTool />} label="Yetenekler" value="2" />
            <Tab icon={<IoGitNetworkOutline />} label="Tecrübe" value="3" />
            <Tab icon={<CiMail />} label="İletişim" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <div className='container' >
                <Sidebar/>


                 <div className='right'>
                    {/*Hakkımda kısmı */} 
                    <h3>Hakkımda</h3>
                    <p  style={{color: '#6C757D'}} >Merhaba! Ben Aleyna, frontend geliştirici olarak modern ve kullanıcı dostu web uygulamaları oluşturmayı seviyorum. Yeni teknolojiler öğrenmekten ve projeler geliştirmekten keyif alıyorum.</p>

                    <div className='cards'>

                          <div className='card'>
                            <GoProjectSymlink  style={{fontSize:'50px', color:'#1E3A8A' , background:'#E0F2FE', borderRadius:'10px', padding:'5px' }} />
                            <div className="card-content">
                                 <h3>12+</h3>
                            <p>Proje Tamamlandı</p>
                            </div>
                        </div>


                        <div className='card'>
                            <IoGitNetworkOutline  style={{fontSize:'50px', color:'#1E3A8A' , background:'#E0F2FE', borderRadius:'10px', padding:'5px' }} />
                            <div className="card-content">
                                <h3>2+</h3>
                            <p>Yıl Deneyim</p>
                            </div>
                        </div>


                          <div className='card'>
                            <PiMedalThin  style={{fontSize:'50px', color:'#1E3A8A' , background:'#E0F2FE', borderRadius:'10px', padding:'5px' }} />
                            <div className="card-content">
                                <h3>5+</h3>
                            <p>Mutlu Müşteri</p>
                            </div>
                        </div>



                        
                    </div>


                    <div className='skills' >
                        <h3>İlgi Alanlarım</h3>
                        <div className='skills-card' >
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>Material UI</p>
                            <p>CSS/SASS</p>
                            <p>Responsive</p>
                        </div>
                    </div>



                   {/* Son çalışmalarım kısmı */}
                   <div className='right-end' >
                    <h3>Son Çalışmalarım</h3> 
                    <div className="cards-2">
                        <div className="card-2">
                            <img src={projeres1} alt="" />
                            <div className="card2-contact">
                                <h5>Kişisel Portföy</h5>
                            <p>React,MUI</p>
                            <button onClick={project}  className="proje-buton" >Detay</button>
                            </div>
                        </div>
                        <div className="card-2">
                            <img src={projeres2}/>
                            <div className="card2-contact">
                                <h5>Hava Durumu</h5>
                            <p>Openweather API</p>
                            <button onClick={project2} className="proje-buton" >Detay</button>
                            </div>
                        </div>
                        <div className="card-2">
                            <img src={projeres3} alt="" />
                           <div className="card2-contact">
                             <h5>Web Sitesi</h5>
                            <p>React</p>
                            <button onClick={project3} className="proje-buton" >Detay</button>
                           </div>
                        </div>
                    </div>
                    </div> 
                   
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
            <Skills/>
        </TabPanel>
        <TabPanel value="3">
            <Experience/>
        </TabPanel>
        <TabPanel value="4">
            <Contact/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}