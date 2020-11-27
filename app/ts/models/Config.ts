import { horaAtual } from "../helpers/utils";

export class Config {
    private _pHoraAtual: JQuery;

    constructor(){
        this._pHoraAtual = $("#hora p:last");
    }

    displayHoraAtual(){
        setInterval(() => {
                this._pHoraAtual.text(horaAtual())
            }
        ,1000);       
    }

    armazenarConfiguracoes(config: Settings){	
        let itens = `{"volume":${config.volume},"intervalo":${config.intervalo},"periodo":"${config.periodo}"}`;
        localStorage.setItem('beberAgua-config', itens);
    }
}

export interface Settings {
    volume: number;
    intervalo: number;
    periodo: string
}