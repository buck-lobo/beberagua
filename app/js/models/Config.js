System.register(["../helpers/utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1, Config;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            Config = class Config {
                constructor() {
                    this._pHoraAtual = $("#hora p:last");
                }
                displayHoraAtual() {
                    setInterval(() => {
                        this._pHoraAtual.text(utils_1.horaAtual());
                    }, 1000);
                }
                armazenarConfiguracoes(config) {
                    let itens = `{"volume":${config.volume},"intervalo":${config.intervalo},"periodo":"${config.periodo}"}`;
                    localStorage.setItem('beberAgua-config', itens);
                }
            };
            exports_1("Config", Config);
        }
    };
});
