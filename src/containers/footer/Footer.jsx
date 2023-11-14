import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__c">
          <h3 className="footer__title">THE COMPANY</h3>
          <ul className="footer__links">  
            <li className="footer__link"><a href="#">Mecanicos AG</a></li>
            <li className="footer__link"><a href="#">Valores de Marca</a></li>
            <li className="footer__link"><a href="#">Contacto</a></li>
            <li className="footer__link"><a href="#">Careers</a></li>
            <li className="footer__link"><a href="#">Hágase concesionario</a></li>
            <li className="footer__link"><a href="#">Investor Relations</a></li>
            <li className="footer__link"><a href="#">Procurement</a></li>
            <li className="footer__link"><a href="#">Press Center</a></li>
            <li className="footer__link"><a href="#">Media Library</a></li>
            <li className="footer__link"><a href="#">Expert Motohall</a></li>
          </ul>
        </div>
        <div className="footer__c">
          <h3 className="footer__title">EXPERT WORLD</h3>
          <ul className="footer__links">
            <li className="footer__link"><a href="#">News</a></li>
            <li className="footer__link"><a href="#">Racing</a></li>
            <li className="footer__link"><a href="#">Stories</a></li>
            <li className="footer__link"><a href="#">KTM Motohall</a></li>
            <li className="footer__link"><a href="#">Ride Expert</a></li>
            <li className="footer__link"><a href="#">Mecanicos Rally</a></li>
            <li className="footer__link"><a href="#">Newsletter</a></li>
            <li className="footer__link"><a href="#">Online Configurator</a></li>
            <li className="footer__link"><a href="#">Book a Testride</a></li>
          </ul>
        </div>
        <div className="footer__c">
          <h3 className="footer__title">SERVICE</h3>
          <ul className="footer__links">
            <li className="footer__link"><a href="#">Garantia</a></li>
            <li className="footer__link"><a href="#">Seguridad</a></li>
            <li className="footer__link"><a href="#">Manuales</a></li>
            <li className="footer__link">
              <a href="#">Control de Mantenimiento y Seguridad</a>
            </li>
            <li className="footer__link"><a href="#">Hotline Freeride</a></li>
            <li className="footer__link"><a href="#">Spare Part Finde</a></li>
          </ul>
        </div>
        <div className="footer__c">
          <h3 className="footer__title">LEGAL</h3>
          <ul className="footer__links">
            <li className="footer__link"><a href="#">Impresion</a></li>
            <li className="footer__link"><a href="#">Privacy Policy</a></li>
            <li className="footer__link"><a href="#">Avisos Legales</a></li>
          </ul>
        </div>
        <div className="footer__c">
          <h3 className="footer__title">CONNECT</h3>
          <ul className="footer__links footer__social">
            <li className="footer__link footer__icons">
              <a href="">
                <img
                  src="./src/assets/icons/bxl-facebook-circle.svg"
                  alt=""
                  className="footer__icon"
                />
              </a>
            </li>
            <li className="footer__link">
              <a href="#">
                <img
                  src="./src/assets/icons/bxl-instagram-alt.svg"
                  alt=""
                  className="footer__icon"
                />
              </a>
            </li>
            <li className="footer__link">
              <a href="#">
                <img
                  src="./src/assets/icons/bxl-twitter.svg"
                  alt=""
                  className="footer__icon"
                />
              </a>
            </li>
            <li className="footer__link">
              <a href="#">
                <img
                  src="./src/assets/icons/bxl-youtube.svg"
                  alt=""
                  className="footer__icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="derechos">
        <div className="derechos__container">
          <div>
            <p>Derechos reservados por Mecanicos Exper</p>
          </div>
          <div className="back">
            <a href="" className="derechos__cta">Voleber al inicio</a>
            <img className="back__img" src="./icons/bx-chevrons-up.svg" alt="" />
          </div>
        </div>
      </section>
    </footer>
  )
}
