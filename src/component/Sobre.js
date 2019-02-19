import React from 'react'

const Sobre = props => {

  const padding = {
    padding: '26px'
  }

  const marginTop = {
    marginTop: "64px"
  }


  return (
    <div className="w3-container" style={padding} id="about">
      <h3 className="w3-center">ESTUDE, PESQUISE E INOVE NA UNIFOR</h3>
      <div className="w3-row-padding w3-center" style={marginTop}>
        <div className="w3-quarter">
          <i className="fa fa-graduation-cap w3-margin-bottom w3-jumbo"/>

          <p className="w3-large">
            GRADUAÇÃO
          </p>

          <p>
            Cursos de Graduação Oportunidades de Estágio  Intercâmbio Acadêmico Monitoria Aulas em inglês  Iniciação Científica
          </p>

        </div>
        <div className="w3-quarter">
          <i className="fa fa-university w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">PÓS-GRADUAÇÃO</p>

          <p>
            Especialização e MBA  Mestrados  Doutorados  Internacionalização  Líderes que Transformam  Instituições parceiras
          </p>


        </div>
        <div className="w3-quarter">
          <i className="fa fa-users w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">EDUCAÇÃO CONTINUADA</p>
          <p>
            Cursos em diversas áreas  Descontos e facilidades para estudar
          </p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-cogs w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">PESQUISA E INOVAÇÃO</p>
          <p>
            Áreas de Pesquisa  Espaços de Inovação  Parque Tecnológico  Incubadora de Empresas  Portfolio de Propriedade Intelectual
          </p>
        </div>
      </div>
    </div>


  )

}

export default Sobre
