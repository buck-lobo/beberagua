import { ModalTemporizadorView } from '../views/ModalTemporizadorView';
import { Config, Settings } from './../models/Config';
import { NotificacaoView } from './../views/NotificacaoView';
import { Tempo } from './../models/Tempo';
import { Temporizador } from "../models/Temporizador";
import { Hidratar } from '../models/Hidratar';


export class TemporizadorController {
    private _inputIntervalo: JQuery;
    private _inputVolume: JQuery;
    private _inputPeriodo: JQuery;
    private _inputPeso: JQuery;
    private _pInformativo: JQuery;
    private _pCronometro: JQuery;
    private _pTotal: JQuery;
    private _bFechar: JQuery;
    private _hidratar: Hidratar;
    private _tempo: Tempo;
    private _notificacao: NotificacaoView;
    private _settings: Settings;
    private _spanIngestao: JQuery;
    private _cardSugestao: JQuery;
    
    configuracao: Config;

    constructor(){
        new ModalTemporizadorView('#preparativos');

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

        this.configuracao = new Config(); 


        
    }

    private _validarCampos(){
        if(this._inputIntervalo.val() && this._inputVolume.val() && this._inputPeriodo.val()){
            return true
        } else {
            return false
        }
    }

    private _instanciarClasses(intervalo: number, periodo: string, volume: number){
        
        if (this._hidratar) {  
            let totalAnterior = this._hidratar.totalIngerido;           
            this._hidratar = new Hidratar(volume, totalAnterior);
        } else {
            this._hidratar = new Hidratar(volume);
        }
        
        const temporizador = new Temporizador(
            periodo == 'hora'? intervalo : 0,
            periodo == 'min'? intervalo : 0);
        
        this._tempo = temporizador.tempo;            
            
        this._notificacao = new NotificacaoView( {
            title: 'Pare tudo e beba água!',
            opcoes: {
                body: `Vamos lá, é rápido... Está na hora de beber água! ${volume} ml!!`,
                icon: '../images/icon.png',
                renotify: true
            }
        });
    }

    private _configurar(){
        let intervalo=  this._settings.intervalo,
            periodo = this._settings.periodo,
            volume = this._settings.volume;

        this._instanciarClasses(intervalo, periodo, volume);            
               
        this._tempo.timer = setInterval(() => this._contagemRegressiva(), 1000); 
        this.configuracao.armazenarConfiguracoes(this._settings);
        this._pInformativo.text(`Beber ${volume} ml de água a cada: ${this._tempo.inicio}`);
        this._pCronometro.text(this._tempo.inicio);
        this._pTotal.text(this._hidratar.informarTotalDiario());
        
    }    

    private _contagemRegressiva(){
        this._tempo.segundo -= 1;  
        let timer = {
            zerado: this._tempo.segundo == 0 && this._tempo.minuto == 0 && this._tempo.hora == 0,
            zerouSegundoExisteMinuto: this._tempo.segundo < 0 && this._tempo.minuto > 0,
            zerouMinutoExisteHora: this._tempo.minuto < 0 && this._tempo.hora > 0,
            zerouHora: this._tempo.hora < 0,
            passouUmaHora: this._tempo.segundo < 0 && this._tempo.minuto == 0 && this._tempo.hora > 0
        }      
        
        
        if (timer.zerado){
            this._notificacao.notificar();
            this._tempo.reiniciar();
            this._hidratar.ingerir(); 
            this._pTotal.text(this._hidratar.informarTotalDiario());    
		} else {
			if (timer.zerouSegundoExisteMinuto){
				this._tempo.minuto -= 1;
				this._tempo.segundo = 59;
				if (timer.zerouMinutoExisteHora){
					this._tempo.hora -= 1;
					this._tempo.minuto = 0;
					if (timer.zerouHora){
						this._tempo.hora = 0;
					}
				}
			} else if (timer.passouUmaHora) {
                this._tempo.hora -= 1;
                this._tempo.minuto = 59;
                this._tempo.segundo = 59;

            }
            
            this._tempo.atualizarContagem();
		    this._pCronometro.text(this._tempo.contagem);
			//titulo.text(`Beber água em: "${zeroHora}:${zeroMinuto}:${zeroSegundo}`);
		}
  };

  private _conferirLS(): boolean{
        if (localStorage.getItem('beberAgua-config')){
            let settings: Settings = JSON.parse(<string>localStorage.getItem('beberAgua-config'));
            this._settings = {
                volume: settings.volume,
                intervalo: settings.intervalo,
                periodo: settings.periodo
            }
            return true
        } else {
            return false
        }
          
    }

    private _obterPreferencias(){
        this._settings = {
            volume: this._inputVolume.nVal(),
            intervalo: this._inputIntervalo.nVal(),
            periodo: <string>this._inputPeriodo.val()
        }
    }

    private _fecharModal(){
        this._bFechar.trigger('click');
    }

    //ao iniciar o sistema
    aoEntrar(){
        if (this._conferirLS()){
            this._configurar();
        }
    }

    //vem do click do botão
    iniciar(){
        if (this._validarCampos()) {
            this._obterPreferencias();
            this.parar();
            this._configurar();
            this._fecharModal();
        } else {
            alert('Preencha todos os campos!')
        }    
    }


  parar(){
      if (this._tempo){
          clearInterval(this._tempo.timer);
      }
  }

  sugerirComCalculadora(){
    let peso = this._inputPeso.nVal(); 
    if (peso){
        if (!this._hidratar){
            this._hidratar = new Hidratar(0);
        }
        let totalConsumo = this._hidratar.calcularIngestaoIdeal(peso)
        this._spanIngestao.html(`Consumo diário: ${totalConsumo/1000} litro(s)`);
        this._cardSugestao.find('#Sugestao-1').text(`200ml a cada hora durante ${(totalConsumo/200).toFixed(2)} horas`);
        this._cardSugestao.find('#Sugestao-2').text(`300ml a cada hora durante ${(totalConsumo/300).toFixed(2)} horas`);
        this._cardSugestao.find('#Sugestao-3').text(`500ml a cada hora durante ${(totalConsumo/500).toFixed(2)} horas`);
        this._cardSugestao.addClass("show");
    }
  }

  aceitarSugestao(el: any){ 
    this._inputIntervalo.val(1);
    this._inputPeriodo.val('hora');
     let volume = el.target.getAttribute('data-volume');
    this._inputVolume.val(volume);
    this.iniciar();
  }

}