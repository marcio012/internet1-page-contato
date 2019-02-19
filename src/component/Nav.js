import React from 'react'

const Nav = props => {

  const titulo = {
    color: "#002969"
  }

  const diplayNone = {
    display: "none"
  }



  return (
    <div className="w3-top" style={titulo}>
      <div className="w3-bar w3-white w3-card" id="myNavbar">
        <a href="#home" className="w3-bar-item w3-button w3-wide" style={titulo}>UNIFOR</a>
        {/*Right-sided navbar links*/}
        <div className="w3-right w3-hide-small" style={titulo}>
          <a href="/" className="w3-bar-item w3-button">HISTORIA</a>
          <a href="/" className="w3-bar-item w3-button"> CURSOS</a>
          <a href="/" className="w3-bar-item w3-button"> CAMPUS</a>
          <a href="/" className="w3-bar-item w3-button"> NOTÍCIAS</a>
          <a href="/" className="w3-bar-item w3-button"> CONTATO</a>
        </div>
        {/*Hide right-floated links on small screens and replace them with a menu icon*/}

        <a href="/" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium">
          <i className="fa fa-bars" />
        </a>
      </div>

      {/*Sidebar on small screens when clicking the menu icon*/}
      <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={diplayNone} id="mySidebar">
        <a href="/" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close &times;</a>
        <a href="/" onclick="w3_close()" >HISTORIA</a>
        <a href="/" onclick="w3_close()" >CURSOS</a>
        <a href="/" onclick="w3_close()" >CAMPUS</a>
        <a href="/" onclick="w3_close()" >NOTÍCIAS</a>
        <a href="/" onclick="w3_close()" >CONTATO</a>
      </nav>

    </div>
  )

}
export default Nav
