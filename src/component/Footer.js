import React, { Component } from 'react'

class Footer extends Component{

  render() {
    return (
      <div>
        <footer className="w3-center w3-blue-background w3-padding-32"
          style={{marginBottom: "18px"}}>
          <a href="#home" className="w3-button w3-light-grey">
            <i className="fa fa-arrow-up w3-margin-right"/>
            Cima
          </a>
          <div className="w3-xlarge w3-section">
            <i className="fa fa-facebook-official w3-hover-opacity w3-margin"/>
            <i className="fa fa-instagram w3-hover-opacity w3-margin"/>
            <i className="fa fa-snapchat w3-hover-opacity w3-margin"/>
            <i className="fa fa-pinterest-p w3-hover-opacity w3-margin"/>
            <i className="fa fa-twitter w3-hover-opacity w3-margin"/>
            <i className="fa fa-linkedin w3-hover-opacity w3-margin"/>
          </div>
          <p>Desenvolvido por
            <a href="https://www.unifor.br/web/graduacao/-/nati-lanca-selecao-para-estagiarios-de-computacao-e-desenvolvimento-de-sistemas?inheritRedirect=true&redirect=https%3A%2F%2Fwww.unifor.br%2Fhome%3Fp_p_id%3Dcom_liferay_portal_search_web_portlet_SearchPortlet%26p_p_lifecycle%3D0%26p_p_state%3Dmaximized%26p_p_mode%3Dview%26_com_liferay_portal_search_web_portlet_SearchPortlet_cur%3D1%26_com_liferay_portal_search_web_portlet_SearchPortlet_assetTagNames.raw%3D%26_com_liferay_portal_search_web_portlet_SearchPortlet_mvcPath%3D%252Fsearch.jsp%26_com_liferay_portal_search_web_portlet_SearchPortlet_assetCategoryIds%3D%26_com_liferay_portal_search_web_portlet_SearchPortlet_keywords%3Dnati%26_com_liferay_portal_search_web_portlet_SearchPortlet_entryClassName%3Dcom.liferay.journal.model.JournalArticle%26_com_liferay_portal_search_web_portlet_SearchPortlet_formDate%3D1550771941860%26_com_liferay_portal_search_web_portlet_SearchPortlet_searchPrimaryKeys%3D%26_com_liferay_portal_search_web_portlet_SearchPortlet_scope%3Deverything%26_com_liferay_portal_search_web_portlet_SearchPortlet_groupId%3D0%26_com_liferay_portal_search_web_portlet_SearchPortlet_format%3D"
               title="Nati Unifor"
               target="blank"
               className="w3-hover-text-green">
              NATI
            </a>
          </p>
        </footer>
      </div>
    )
  }

}

export default Footer
