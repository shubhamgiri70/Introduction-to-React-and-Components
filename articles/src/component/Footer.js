import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <span>2024 All Rights Reserved</span>
        <ul className="socials">
          <li className="fb">
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li className="insta">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="twitter">
            <i class="fa-brands fa-x-twitter"></i>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
