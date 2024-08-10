import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Liens utiles</h3>
        <ul>
          <li>À propos de nous</li>
          <li>Termes et conditions</li>
          <li>Politique de retour et de remboursement</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>01 03 07 12 33</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>dreamnest@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
      <div className="footer_right_info">
          <LocationOn />
          <p>123 Rue Imaginaire, Paris, France</p>
        </div>
      </div>
  )
}

export default Footer;