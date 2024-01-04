import './Footer.css'

const FooterDataLinks = [
  {
    title: "THE COMPANY",
    links: [
      { text: "Mecanicos AG", url: "#" },
      { text: "Valores de Marca", url: "#" },
      { text: "Contacto", url: "#" },
      { text: "Careers", url: "#" },
      { text: "Hágase concesionario", url: "#" },
      { text: "Investor Relations", url: "#" },
      { text: "Procurement", url: "#" },
      { text: "Press Center", url: "#" },
      { text: "Media Library", url: "#" },
      { text: "Expert Motohall", url: "#" }
    ]
  },
  {
    title: "EXPERT WORLD",
    links: [
      { text: "News", url: "#" },
      { text: "Racing", url: "#" },
      { text: "Stories", url: "#" },
      { text: "KTM Motohall", url: "#" },
      { text: "Ride Expert", url: "#" },
      { text: "Mecanicos Rally", url: "#" },
      { text: "Newsletter", url: "#" },
      { text: "Online Configurator", url: "#" },
      { text: "Book a Testride", url: "#" }
    ]
  },
  {
    title: "SERVICE",
    links: [
      { text: "Garantia", url: "#" },
      { text: "Seguridad", url: "#" },
      { text: "Manuales", url: "#" },
      { text: "Control de Mantenimiento y Seguridad", url: "#" },
      { text: "Hotline Freeride", url: "#" },
      { text: "Spare Part Finder", url: "#" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { text: "Impresion", url: "#" },
      { text: "Privacy Policy", url: "#" },
      { text: "Avisos Legales", url: "#" }
    ]
  }
]

const footerSocialLinks = [
  {
    platform: "Facebook",
    iconSrc: "./src/assets/icons/bxl-facebook-circle.svg",
    url: "#"
  },
  {
    platform: "Instagram",
    iconSrc: "./src/assets/icons/bxl-instagram-alt.svg",
    url: "#"
  },
  {
    platform: "Twitter",
    iconSrc: "./src/assets/icons/bxl-twitter.svg",
    url: "#"
  },
  {
    platform: "YouTube",
    iconSrc: "./src/assets/icons/bxl-youtube.svg",
    url: "#",
  }
]

function FooterLinks () {
  return (
    <>
      {
        FooterDataLinks.map(({title, links}) => (
          <div key={title} className="footer__c">
            <h3 className="footer__title">{title}</h3>
            <ul className="footer__links"> 
              {
                links.map(({text, url}) => (
                  <li key={text} className="footer__link"><a href={url}>{text}</a></li>
                ))
              } 
            </ul>
          </div>
        )) 
      }
    </>
  )
}

function FooterSocialLiks () {
  return (
    <div className="footer__c">
      <h3 className="footer__title">CONNECT</h3>
      <ul className="footer__links footer__social">
        {
          footerSocialLinks.map(({iconSrc,platform,url}, index) => (
            <li key={index} className="footer__link footer__icons">
              <a href={url}>
                <img
                  src={iconSrc}
                  alt={platform}
                  className="footer__icon"
                />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container">
        <FooterLinks />
        <FooterSocialLiks />
      </section>
      <section className="derechos">
        <div className="derechos__container">
          <div>
            <p>Derechos reservados por Mecanicos Exper</p>
          </div>
          <div className="back">
            <a href="#/header" className="derechos__cta">Voleber al inicio</a>
            <img className="back__img" src="./icons/bx-chevrons-up.svg" alt="" />
          </div>
        </div>
      </section>
    </footer>
  )
}
