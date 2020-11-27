System.register([], function (exports_1, context_1) {
    "use strict";
    var Temporizador;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Temporizador = class Temporizador {
                constructor(_hora, _minuto) {
                    this._hora = _hora;
                    this._minuto = _minuto;
                    let zeroHora, zeroMinuto;
                    zeroMinuto = this._minuto < 10 ? "0" + this._minuto.toString() : this._minuto.toString();
                    zeroHora = this._hora < 10 ? "0" + this._hora.toString() : this._hora.toString();
                    this.tempo = {
                        hora: this._hora,
                        minuto: this._minuto,
                        segundo: 0,
                        inicio: `${zeroHora}:${zeroMinuto}:00`,
                        contagem: `${zeroHora}:${zeroMinuto}:00`,
                        timer: 0,
                        atualizarContagem: this._atualizarContagem.bind(this),
                        reiniciar: this._reiniciar.bind(this)
                    };
                }
                ;
                _atualizarContagem() {
                    let zeroSeg, zeroMin, zeroHora, hora = this.tempo.hora, min = this.tempo.minuto, seg = this.tempo.segundo;
                    zeroSeg = seg == 0 ? "00" : (seg < 10) ? "0" + seg : seg;
                    zeroMin = min == 0 ? "00" : (min < 10) ? "0" + min : min;
                    zeroHora = hora == 0 ? "00" : (hora < 10) ? "0" + hora : hora;
                    this.tempo.contagem = `${zeroHora}:${zeroMin}:${zeroSeg}`;
                }
                _reiniciar() {
                    let padrao = this.tempo.inicio;
                    this.tempo.hora = parseInt(padrao.split(':')[0]);
                    this.tempo.minuto = parseInt(padrao.split(':')[1]);
                    this.tempo.segundo = parseInt(padrao.split(':')[2]);
                    this.tempo.contagem = padrao;
                }
            };
            exports_1("Temporizador", Temporizador);
        }
    };
});
