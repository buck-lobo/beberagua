export interface Tempo {
    readonly inicio: string;    
    hora: number;
    minuto: number;
    segundo: number;
    contagem: string;
    timer: number;
    atualizarContagem: Function;
    reiniciar: Function;
}
