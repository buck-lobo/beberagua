System.register([], function (exports_1, context_1) {
    "use strict";
    var NotificacaoView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NotificacaoView = class NotificacaoView {
                constructor(notificacao) {
                    this.notificacao = notificacao;
                    this.notificar = this.notificar.bind(this);
                }
                notificar() {
                    let n = new Notification(this.notificacao.title, this.notificacao.opcoes);
                    n.onclick = event => {
                        event.preventDefault();
                        window.focus();
                    };
                }
            };
            exports_1("NotificacaoView", NotificacaoView);
        }
    };
});
