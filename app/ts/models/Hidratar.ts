export class Hidratar {
    
    constructor(readonly volume: number, public totalIngerido: number = 0){}

    ingerir(){
        this.totalIngerido += this.volume;
        
    };

    informarTotalDiario(){
        return `Total ingerido hoje(mínimo): ${this.totalIngerido} ml`;	
    }

    calcularIngestaoIdeal(peso: number){
        return peso * 35;
    }
}