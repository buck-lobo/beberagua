System.register([], function (exports_1, context_1) {
    "use strict";
    var Hidratar;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Hidratar = class Hidratar {
                constructor(volume, totalIngerido = 0) {
                    this.volume = volume;
                    this.totalIngerido = totalIngerido;
                }
                ingerir() {
                    this.totalIngerido += this.volume;
                }
                ;
                informarTotalDiario() {
                    return `Total ingerido hoje(mínimo): ${this.totalIngerido} ml`;
                }
                calcularIngestaoIdeal(peso) {
                    return peso * 35;
                }
            };
            exports_1("Hidratar", Hidratar);
        }
    };
});
