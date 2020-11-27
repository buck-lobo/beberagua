System.register([], function (exports_1, context_1) {
    "use strict";
    var LinkView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            LinkView = class LinkView {
                constructor(_links) {
                    this._links = _links;
                }
                _criarLink(href, descritivo) {
                    return `
        <a href="${href}" target="_blank">
          ${descritivo}
        </a>
        `;
                }
                renderizarLinks() {
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
                linkPersonalizado(objeto) {
                    let retorno = "<a";
                    let chaves = Object.keys(objeto);
                    for (let i = 0; i < Object.keys(objeto).length; i++) {
                        const valor = objeto[chaves[i]];
                        if (chaves[i] == "descritivo") {
                            retorno += `>${valor}</a>`;
                        }
                        else {
                            retorno += ` ${chaves[i]}="${valor}"`;
                        }
                    }
                    return retorno;
                }
            };
            exports_1("LinkView", LinkView);
        }
    };
});
