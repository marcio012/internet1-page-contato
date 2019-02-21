import React from 'react'

const Contato = props => {

  const grid = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#002969"
  }

  const titulo = {
    color: "#002969"
  }

  const paddingTypes = {
    padding: "128px, 16px"
  }

  const altura = {
    width: "100%",
    // marginTop: "48%"
  }

  const styleTop = {

  }

  const button = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#002969"
  }




  return (

    <div className="w3-container w3-light-grey"
         style={{paddingTypes, marginBottom: "18px"}}
         id="contact"
      >

      <h3 className="w3-center" style={titulo}>CONTATO</h3>
      <p className="w3-center w3-large" style={titulo}>
        Olá, seja bem-vindo à Universidade de Fortaleza.
        Preencha o formulário abaixo com duvidas ou sugestões.
      </p>
      <div style={styleTop}>
        {/*Central de Atendimento: (85) 3477.3000 | Endereço: Av. Washington Soares, 1321 - Edson Queiroz - CEP 60811-905 - Fortaleza-CE Brasil*/}
        <div style={grid}>
          <p><i className="fa fa-map-marker fa-fw w3-xxlarge "/>Fortaleza-CE Brasil</p>
          <p><i className="fa fa-phone fa-fw w3-xxlarge "/>Central de Atendimento: (85) 3477.3000</p>
          <p><i className="fa fa-envelope fa-fw w3-xxlarge "/>Email: unifor@unifor.com</p>
        </div>

        <form>
          <p>
            <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
          </p>
          <p>
            <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
          </p>
          <p>
            <input className="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"/>
          </p>
          <p>
            <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message"/>
          </p>
          <p style={button}>
            <button  className="w3-button w3-blue-unifor w3-blue-unifor " type="submit">
              <i className="fa fa-paper-plane"/> Enviar Mensagem
            </button>
          </p>
        </form>

        <img src="https://www.unifor.br/documents/20143/518076/campus-unifor-17.06.2018-banner-cabecalho.jpg/760d4b6f-6236-29ae-efe5-c1d92d1fb100?t=1529086021982"
             alt="foto-campus-unifor"
             className="w3-image w3-greyscale"
             style={altura} />
      </div>
    </div>

)


}

export default Contato
