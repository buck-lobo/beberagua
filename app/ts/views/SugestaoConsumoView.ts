interface Sugestao {
  id: string;
  volume: string;
}

export class SugestaoConsumoView{
    private _sugestoes: Sugestao[] = [
      {
        id: 'Sugestao-1',
        volume: '200'
      },
      {
        id: 'Sugestao-2',
        volume: '300'
      },
      {
        id: 'Sugestao-3',
        volume: '500'
      },
    ]

    constructor(seletor: string){
        $(seletor).html(this.template());
    }

     template():string{
        return `
        <div class="card-body text-dark">
          <div class="card-title">
            <h5 class="text-muted">Sugestões</h5>
          </div>
          ${this.renderizarSugestoes()} 
        </div>
        `
    }

    renderizarSugestoes(): string{
      let classe = this;
      let sugestoesHTML = '';

      this._sugestoes.forEach(sugestao=>{
        sugestoesHTML += classe.criarSugestao(sugestao.id, sugestao.volume)
      })

      return sugestoesHTML;
    }

    criarSugestao(id:string, volume:string):string{
      return `
        <div class="d-flex flex-row">
           <div class="col-10 mt-1 d-flex">
             <span id="${id}"></span>
           </div>
           <div class="col-2 d-flex mt-1">
             <button type="button" data-volume="${volume}" class="btn btn-primary ml-auto p-1">Aceitar</button>
           </div>
         </div>
      `
    }
}

