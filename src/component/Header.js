import React from 'react'

const Header = props => {

  const padding = {
    backgroundColor: "#fff",
    padding: "12px 26px",
    color: "#002969"
  }

  const padding2 = {
    padding: '48px'
  }

  const bgimg1 = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url("https://blog.123milhas.com/wp-content/uploads/2017/01/sc4r6mC-1024x680.jpg")`,
    minHeight: "100%",
    height: "100vh",
    backgroundColor: "black"
  }

  const titulo = {
    backgroundColor: "white",
    color: "#002969"
  }


  return (
    <div>
      <header style={bgimg1} className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
        <div className="w3-display-left w3-text-white" style={padding2}>
          <span className="w3-jumbo w3-hide-small" style={titulo}>
            Use sua nota do ENEM ou inscreva-se para a Prova
          </span>
          <p>
            <a href="#about"
               className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
              Quero matricular
            </a>
          </p>
        </div>
        <div className="w3-display-bottomleft w3-text-blue w3-large">
          <i className="fa fa-facebook-official w3-hover-opacity" style={padding}/>
          <i className="fa fa-instagram w3-hover-opacity" style={padding}/>
          <i className="fa fa-snapchat w3-hover-opacity" style={padding}/>
          <i className="fa fa-pinterest-p w3-hover-opacity" style={padding}/>
          <i className="fa fa-twitter w3-hover-opacity" style={padding}/>
          <i className="fa fa-linkedin w3-hover-opacity" style={padding}/>
        </div>
      </header>
    </div>
 )

}

export default Header
