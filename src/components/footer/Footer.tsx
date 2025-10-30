import "../styles/footer.scss";
import Navigation from "./components/Navigation";
import Socials from "./components/Socials";

function Footer() {
    return (
        <footer>
            <p className="footer-title">Stay smooth</p>

            <div style={{display: "flex", gap: "50px"}}>
                <div>
                    <Socials />
                    <Navigation />
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.4227179196675!2d44.76924893482858!3d41.721588435727305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044737570178cc5%3A0x79890c4154ab9f4b!2seos%20Georgia!5e0!3m2!1sen!2sge!4v1761411168125!5m2!1sen!2sge&"
                        width="850px"
                        height="400px"
                        style={{ border: "0", borderRadius: "30px" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
