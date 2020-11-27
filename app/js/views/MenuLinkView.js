System.register(["./LinkView"], function (exports_1, context_1) {
    "use strict";
    var LinkView_1, MenuLinkView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (LinkView_1_1) {
                LinkView_1 = LinkView_1_1;
            }
        ],
        execute: function () {
            MenuLinkView = class MenuLinkView {
                constructor(seletor) {
                    this._links = [
                        {
                            href: "https://drauziovarella.uol.com.br/alimentacao/quanta-agua-precisamos-beber-por-dia/",
                            descritivo: "Drauzio Varella (Quanto de água devemos beber por dia)"
                        },
                        {
                            href: "https://www.jornalcruzeiro.com.br/blogs/rota-do-equilibrio/agua-a-bebida-que-mais-emagrece-veja-os-seus-beneficios-comprovados-pela-ciencia/",
                            descritivo: "Jornal Cruzeiro (Benefícios da água)"
                        },
                        {
                            href: "https://www.nsctotal.com.br/noticias/nutricionista-lista-10-beneficios-em-beber-agua-na-quantidade-certa",
                            descritivo: "Nutricionista lista 10 benefícios em beber água"
                        },
                        {
                            href: "https://www.saopaulo.sp.gov.br/spnoticias/saiba-quais-sao-os-beneficios-da-agua-para-o-organismo/",
                            descritivo: "Governo de São Paulo (Benefícios da água para o organismo)"
                        },
                        {
                            href: "https://www.minhavida.com.br/alimentacao/tudo-sobre/33905-agua#:~:text=O%20consumo%20regular%20de%20%C3%A1gua,as%20fun%C3%A7%C3%B5es%20do%20nosso%20metabolismo.",
                            descritivo: "Minha vida (Água: propriedades, quantidade ideal e benefícios)"
                        },
                        {
                            href: "https://blog.amorsaude.com.br/beber-agua/",
                            descritivo: "Amor saúde (Conheça os benefícios de beber água com frequência)"
                        },
                        {
                            href: "https://www.conquistesuavida.com.br/noticia/agua-na-medida-certa-aprenda-a-calcular-corretamente-a-sua-hidratacao_a2245/1#:~:text=O%20c%C3%A1lculo%20feito%20%C3%A9%2035,dia%20(aproximadamente%2014%20copos).",
                            descritivo: "Conquiste sua vida (Água na medida certa)"
                        }
                    ];
                    this._linkView = new LinkView_1.LinkView(this._links);
                    $(seletor).html(this.template());
                }
                template() {
                    return `
        <div class="card card-body bg-dark mt-1">
          <ul>
            ${this._linkView.renderizarLinks()}
          </ul>
        </div>
        `;
                }
            };
            exports_1("MenuLinkView", MenuLinkView);
        }
    };
});
