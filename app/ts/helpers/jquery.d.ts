/*
 * Arquivo de definição
 * Contém a interface de plugins JQuery feitos por mim.
 * Serve para informar ao TypeScript que esses atributos
 * estendem o objeto JQuery, farão parte do objeto $.fn.
 * 
 * A declaração das funções está no arquivo utils.ts
 */
interface JQuery {
    nVal(): number;
}