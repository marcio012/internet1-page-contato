import React from 'react'
import Card from 'react-bootstrap/Card'

const Header = props => {

  const padding = {
    backgroundColor: "#fff",
    padding: "12px 26px",
    color: "#002969"
  }

  const padding2 = {
    backgroundColor: "rgba(0, 41, 105, .9)",
    padding: '48px'
  }


  const bgimg1 = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url("https://www.unifor.br/documents/20143/554520/1.+Campus+%28Desktop%29.jpg/24826674-6639-7f71-c6fc-a3b5f5a54d1f?t=1516049878295")`,
    minHeight: "100%",
    height: "100vh",
    backgroundColor: "black"
  }

  return (
    <div>
      <header style={bgimg1}
              className="bgimg-1 w3-display-container w3-grayscale-min"
              id="home">
        <div className="w3-display-right w3-text-white"
             style={padding2}>

          <Card bg="primary" text="white" style={{ width: '18rem' }}>
            <Card.Header>
              <h3>Conheça a Unifor</h3>
              </Card.Header>
            <Card.Body>

              <Card.Text>
                <ul className="lista">
                  <li className="lista-unifor">
                    <p><i class="fa fa-check"
                          style={{marginRight: '10px', color: 'rgb(76, 255, 76)' }}/>
                      Acessibilidade
                    </p>
                  </li>

                  <li>
                    <p>
                      <i className="fa fa-check"
                         style={{marginRight: '10px', color: 'rgb(76, 255, 76)' }}/>
                      Biblioteca
                    </p>
                  </li>

                  <li>
                    <p>
                      <i className="fa fa-check"
                         style={{marginRight: '10px', color: 'rgb(76, 255, 76)' }}/>
                      Guia do Campus
                    </p>
                  </li>

                  <li>
                    <p>
                      <i className="fa fa-check"
                         style={{marginRight: '10px', color: 'rgb(76, 255, 76)' }}/>
                      Laboratório e Salas de Aula
                    </p>
                  </li>

                  <li>
                    <p>
                      <i className="fa fa-check"
                          style={{marginRight: '10px', color: 'rgb(76, 255, 76)' }}/>
                      Núcles de Práticas Acadêmicas
                    </p>
                  </li>

                </ul>

              </Card.Text>
            </Card.Body>
          </Card>

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
