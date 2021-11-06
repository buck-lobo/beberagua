System.register(["../views/ModalTemporizadorView", "./../models/Config", "./../views/NotificacaoView", "../models/Temporizador", "../models/Hidratar"], function (exports_1, context_1) {
    "use strict";
    var ModalTemporizadorView_1, Config_1, NotificacaoView_1, Temporizador_1, Hidratar_1, TemporizadorController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ModalTemporizadorView_1_1) {
                ModalTemporizadorView_1 = ModalTemporizadorView_1_1;
            },
            function (Config_1_1) {
                Config_1 = Config_1_1;
            },
            function (NotificacaoView_1_1) {
                NotificacaoView_1 = NotificacaoView_1_1;
            },
            function (Temporizador_1_1) {
                Temporizador_1 = Temporizador_1_1;
            },
            function (Hidratar_1_1) {
                Hidratar_1 = Hidratar_1_1;
            }
        ],
        execute: function () {
            TemporizadorController = class TemporizadorController {
                constructor() {
                    new ModalTemporizadorView_1.ModalTemporizadorView('#preparativos');
                    this._inputIntervalo = $('#intervalo');
                    this._inputVolume = $('#volume');
                    this._inputPeriodo = $('#periodo');
                    this._inputPeso = $('#peso');
                    this._pInformativo = $("#cronometro p:first");
                    this._pCronometro = $("#cronometro p:last");
                    this._pTotal = $("#total p:first");
                    this._bFechar = $('#fechar-modal');
                    this._spanIngestao = $('#ingestaoDiaria');
                    this._cardSugestao = $('#sugestoesConsumo');
                    this.configuracao = new Config_1.Config();
                }
                _validarCampos() {
                    if (this._inputIntervalo.val() && this._inputVolume.val() && this._inputPeriodo.val()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                _instanciarClasses(intervalo, periodo, volume) {
                    if (this._hidratar) {
                        let totalAnterior = this._hidratar.totalIngerido;
                        this._hidratar = new Hidratar_1.Hidratar(volume, totalAnterior);
                    }
                    else {
                        this._hidratar = new Hidratar_1.Hidratar(volume);
                    }
                    const temporizador = new Temporizador_1.Temporizador(periodo == 'hora' ? intervalo : 0, periodo == 'min' ? intervalo : 0);
                    this._tempo = temporizador.tempo;
                    this._notificacao = new NotificacaoView_1.NotificacaoView({
                        title: 'Pare tudo e beba água!',
                        opcoes: {
                            body: `Vamos lá, é rápido... Está na hora de beber água! ${volume} ml!!`,
                            icon: '../images/icon.png',
                            renotify: true
                        }
                    });
                }
                _configurar() {
                    let intervalo = this._settings.intervalo, periodo = this._settings.periodo, volume = this._settings.volume;
                    this._instanciarClasses(intervalo, periodo, volume);
                    this._tempo.timer = setInterval(() => this._contagemRegressiva(), 1000);
                    this.configuracao.armazenarConfiguracoes(this._settings);
                    this._pInformativo.text(`Beber ${volume} ml de água a cada: ${this._tempo.inicio}`);
                    this._pCronometro.text(this._tempo.inicio);
                    this._pTotal.text(this._hidratar.informarTotalDiario());
                }
                _contagemRegressiva() {
                    this._tempo.segundo -= 1;
                    let timer = {
                        zerado: this._tempo.segundo == 0 && this._tempo.minuto == 0 && this._tempo.hora == 0,
                        zerouSegundoExisteMinuto: this._tempo.segundo < 0 && this._tempo.minuto > 0,
                        zerouMinutoExisteHora: this._tempo.minuto < 0 && this._tempo.hora > 0,
                        zerouHora: this._tempo.hora < 0,
                        passouUmaHora: this._tempo.segundo < 0 && this._tempo.minuto == 0 && this._tempo.hora > 0
                    };
                    if (timer.zerado) {
                        this._notificacao.notificar();
                        this._tempo.reiniciar();
                        this._hidratar.ingerir();
                        this._pTotal.text(this._hidratar.informarTotalDiario());
                    }
                    else {
                        if (timer.zerouSegundoExisteMinuto) {
                            this._tempo.minuto -= 1;
                            this._tempo.segundo = 59;
                            if (timer.zerouMinutoExisteHora) {
                                this._tempo.hora -= 1;
                                this._tempo.minuto = 0;
                                if (timer.zerouHora) {
                                    this._tempo.hora = 0;
                                }
                            }
                        }
                        else if (timer.passouUmaHora) {
                            this._tempo.hora -= 1;
                            this._tempo.minuto = 59;
                            this._tempo.segundo = 59;
                        }
                        this._tempo.atualizarContagem();
                        this._pCronometro.text(this._tempo.contagem);
                    }
                }
                ;
                _conferirLS() {
                    if (localStorage.getItem('beberAgua-config')) {
                        let settings = JSON.parse(localStorage.getItem('beberAgua-config'));
                        this._settings = {
                            volume: settings.volume,
                            intervalo: settings.intervalo,
                            periodo: settings.periodo
                        };
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                _obterPreferencias() {
                    this._settings = {
                        volume: this._inputVolume.nVal(),
                        intervalo: this._inputIntervalo.nVal(),
                        periodo: this._inputPeriodo.val()
                    };
                }
                _fecharModal() {
                    this._bFechar.trigger('click');
                }
                aoEntrar() {
                    if (this._conferirLS()) {
                        this._configurar();
                    }
                }
                iniciar() {
                    if (this._validarCampos()) {
                        this._obterPreferencias();
                        this.parar();
                        this._configurar();
                        this._fecharModal();
                    }
                    else {
                        alert('Preencha todos os campos!');
                    }
                }
                parar() {
                    if (this._tempo) {
                        clearInterval(this._tempo.timer);
                    }
                }
                sugerirComCalculadora() {
                    let peso = this._inputPeso.nVal();
                    if (peso) {
                        if (!this._hidratar) {
                            this._hidratar = new Hidratar_1.Hidratar(0);
                        }
                        let totalConsumo = this._hidratar.calcularIngestaoIdeal(peso);
                        this._spanIngestao.html(`Consumo diário: ${totalConsumo / 1000} litro(s)`);
                        this._cardSugestao.find('#Sugestao-1').text(`200ml a cada hora durante ${(totalConsumo / 200).toFixed(2)} horas`);
                        this._cardSugestao.find('#Sugestao-2').text(`300ml a cada hora durante ${(totalConsumo / 300).toFixed(2)} horas`);
                        this._cardSugestao.find('#Sugestao-3').text(`500ml a cada hora durante ${(totalConsumo / 500).toFixed(2)} horas`);
                        this._cardSugestao.addClass("show");
                    }
                }
                aceitarSugestao(el) {
                    this._inputIntervalo.val(1);
                    this._inputPeriodo.val('hora');
                    let volume = el.target.getAttribute('data-volume');
                    this._inputVolume.val(volume);
                    this.iniciar();
                }
            };
            exports_1("TemporizadorController", TemporizadorController);
        }
    };
});
