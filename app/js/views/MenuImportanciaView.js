System.register(["./LinkView"], function (exports_1, context_1) {
    "use strict";
    var LinkView_1, MenuImportanciaView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (LinkView_1_1) {
                LinkView_1 = LinkView_1_1;
            }
        ],
        execute: function () {
            MenuImportanciaView = class MenuImportanciaView {
                constructor(seletor) {
                    this._linkView = new LinkView_1.LinkView();
                    this._links = {
                        menuLink: {
                            "data-click": "#menuLinks",
                            class: "link dispara-menu",
                            descritivo: "links"
                        },
                        menuCalculadora: {
                            "data-click": "#menuCalcular",
                            class: "link dispara-menu",
                            descritivo: "calculadora"
                        },
                        timer: {
                            "data-toggle": "modal",
                            "data-target": "#preparativos",
                            class: "link",
                            descritivo: "timer"
                        }
                    };
                    this._paragrafos = [
                        {
                            conteudo: `Acredito que todos sabem que beber água é extremamente importante, mas será que você sabe porque?
        Aqui você encontrará ${this._linkView.linkPersonalizado(this._links.menuLink)} para te ajudar a descobrir, uma calculadora que lhe informará a quantidade
        de água adequada para seu consumo e um timer para te ajudar a lembrar de beber água enquanto cuida dos seus
        afazeres!`
                        },
                        {
                            conteudo: `No intuito de te ajudar, vou listar aqui alguns dos benefícios de beber água em quantidades adaquedas a você! Afinal
        a ingestão de água é individual e depende de fatores como idade, peso e o clima da sua região! Aqui vão alguns benefícios...
        Melhora a qualidade da sua pele, protege os rins, melhora o funcionamento do intestino, contribui no transporte de nutrientes
        e muitos mais!! 
        `
                        },
                        {
                            conteudo: `Está esperando o que? Utilize a ${this._linkView.linkPersonalizado(this._links.menuCalculadora)}, ajuste o 
        ${this._linkView.linkPersonalizado(this._links.timer)}
        e navegue pelos ${this._linkView.linkPersonalizado(this._links.menuLink)}!! 
        Lembre-se sua saúde vem em primeiro lugar!!
      </p>`
                        }
                    ];
                    $(seletor).html(this._template());
                }
                _renderizarParagrafos() {
                    let classe = this;
                    let paragrafosHTML = '';
                    this._paragrafos.forEach(paragrafo => {
                        paragrafosHTML += classe._criarParagrafo(paragrafo.conteudo);
                    });
                    return paragrafosHTML;
                }
                _criarParagrafo(conteudo) {
                    return `
      <p>
        ${conteudo}
      </p>
      `;
                }
                _template() {
                    return `
        <div class="card card-body bg-dark mt-1 text-justify">
          ${this._renderizarParagrafos()} 
        </div>
        `;
                }
            };
            exports_1("MenuImportanciaView", MenuImportanciaView);
        }
    };
});
