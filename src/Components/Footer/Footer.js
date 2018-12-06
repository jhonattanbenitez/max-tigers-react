import React from 'react';
import './footer.css'

const Footer = () =>{
    return(
        <footer className="section">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
        <div className="container">
        <p>Max Tigers &copy;2018 maxtigers.com</p>
        <ul>
          <li><a className="facebook" href="https://www.facebook.com/MaxTigersGG/"><i className="fab fa-facebook"></i></a></li>
          <li><a className="twitter" href="https://twitter.com/MaxTigersGG"><i className="fab fa-twitter-square"></i></a></li>
          <li><a className="linkedin" href="https://www.linkedin.com/company/max-tigers-ec/"><i className="fab fa-linkedin"></i></a></li>
          <li><a className="instagram" href="https://www.instagram.com/maxtigersgg/"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
    );
}

export default Footer;