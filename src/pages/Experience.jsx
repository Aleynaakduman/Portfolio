import Sidebar from "../components/Sidebar"
import '../styles/Experience.css'
const Experience = () => {
  return (
    <div className="container" >
        <Sidebar/>

        <div className="right">
           <div className="experience-content">
             <h4>Staj Deneyimlerim</h4>
            <p  style={{color: '#6C757D'}}  >Kariyer yolculuğumda edindiğim değerli staj deneyimleri.</p>

           </div>

          <div className="staj-container">
                   <div className="staj-akisi">
    <div className="nokta">
     
   <div className="staj-card">
                <img style={{width:'130px', height:'150px'}} src="../src/img/bera.jpeg" alt="" />
                <div className="staj-content">
                                  <h4>Bera Arge Yazılım</h4>
                <p style={{color:'blue'}} >Frontend Stajyer</p>
                <p style={{color: '#6C757D'}}>Gerçek projeler üzerinde çalışarak frontend geliştirme sürecine katkıda bulundum</p>
                <p  style={{color: '#6C757D'}} >Temmuz 2025 - Ağustos 2025</p>
                </div>

              </div>

    </div>
    <div className="cizgi-yolu">
        <div className="nokta-orta">
            <div className="staj-card">
                <img style={{width:'130px', height:'150px'}} src="../src/img/ndm.webp" alt="" />
               <div className="staj-content">
                 <h4>NDM Software</h4>
                <p style={{color:'blue'}} >Frontend Stajyer</p>
                <p style={{color: '#6C757D'}}>Şirketin web sitesinin tasarımında yer aldım. Şirkete trello benzeri bir web uygulamsı geliştirme sürecinde yer aldım.</p>
                <p style={{color: '#6C757D'}}>Ocak 2026 - Mart 2026</p>
               </div>
              </div>
        </div>
    </div>
</div>
        

      
          </div>
        
        
        </div>
    </div>
  )
}

export default Experience