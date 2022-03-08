import './cardProject'

class ProjectsApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

         }
         * {
         box-sizing: border-box;
          margin: 0;
         padding: 0;
        }
        
        .renderProjects{
            display:grid;
            grid-template-columns:repeat(2,1fr);
        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${ProjectsApp.styles}</style>
    <div class='container'>
        <div class='renderProjects'>
            <card-project name='dblog'></card-project>
            <card-project name='galleryPage'></card-project>
            <card-project name='DavWord'></card-project>
            <card-project name='davSock'></card-project>
            <card-project name='web3login'></card-project>
            <card-project name='davtion'></card-project>
        </div>
        <slot></slot>
    </div>
    `;
    }
}
customElements.define('projects-app', ProjectsApp);