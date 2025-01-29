
import './Footer.css'
import Youtube_icon from '../../assets/youtube_icon.png'
import Twitter_icon from '../../assets/twitter_icon.png'
import Instagram_icon from '../../assets/instagram_icon.png'
import Facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={Youtube_icon} alt="" />
        <img src={Twitter_icon} alt="" />
        <img src={Instagram_icon} alt="" />
        <img src={Facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centren</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Noticesn</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@1997-2024 Netflix,Inc..</p>
    </div>
  )
}

export default Footer