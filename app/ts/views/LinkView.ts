import { Link } from "./../models/Link";

export class LinkView {

  constructor(private _links?: Link[]) {}

  private _criarLink(href: string, descritivo: string) {
    return `
        <a href="${href}" target="_blank">
          ${descritivo}
        </a>
        `;
  }

  renderizarLinks(): string {
    let classe = this;
    let linksHTML = "";

    if (this._links) {
      this._links.forEach((link) => {
        linksHTML += `
                  <li>
                    ${classe._criarLink(link.href, link.descritivo)}
                  </li>
                  `;
      });
    }

    return linksHTML;
  }

  linkPersonalizado(objeto: any) {
    let retorno = "<a";
    let chaves = Object.keys(objeto);

    for (let i = 0; i < Object.keys(objeto).length; i++) {
      const valor = objeto[chaves[i]];
      if (chaves[i] == "descritivo") {
        retorno += `>${valor}</a>`;
      } else {
        retorno += ` ${chaves[i]}="${valor}"`;
      }
    }
    return retorno;
  }
}
