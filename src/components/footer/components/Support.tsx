import { useTranslation } from "react-i18next";

function Support() {
  const { t: tFooter } = useTranslation("footer");

  return (
    <div className="footer-nav-section">
      <h3>SOCIALS</h3>
      <ul>
        <li className="footer-nav-item">{tFooter("trackYourOrder")}</li>
        <li className="footer-nav-item">{tFooter("shipping")}</li>
        <li className="footer-nav-item">{tFooter("contactUs")}</li>
        <li className="footer-nav-item">{tFooter("helpAndFaq")}</li>
        <li className="footer-nav-item">{tFooter("privacyPolicy")}</li>
        <li className="footer-nav-item">{tFooter("accessibility")}</li>
        <li className="footer-nav-item">{tFooter("sitemap")}</li>
        <li className="footer-nav-item">{tFooter("cookiePreference")}</li>
      </ul>
    </div>
  );
}

export default Support;
