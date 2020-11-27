export class ModalTemporizadorView{
    constructor(seletor:string){
        $(seletor).html(this.template());
    }

    template():string{
        return `
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark text-center" id="modalTitle">
                Suas preferências
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                id="fechar-modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-dark container-fluid">
              <!-- Input do intervalo -->
              <div class="custom-input mt-0 d-flex flex-row">
                <div class="col-sm d-flex">
                  <div class="i ">
                    <i class="fas fa-stopwatch"></i>
                  </div>
                  <div class="">
                    <h5>Intervalo</h5>
                    <input id="intervalo" class="input" type="number" min="1" />
                  </div>
                </div>
                <div class="col-sm mt-4">
                  
                  <select id="periodo" class="btn-secondary mt-1">
                    <option value="min">Minutos</option>
                    <option value="hora">Hora</option>
                  </select>
                </div>
              </div>
              <!-- Input do volume (ml) -->
              <div class="custom-input mt-0 d-flex flex-row">
                <div class="col-sm d-flex">
                  <div class="i ">
                    <i class="fas fa-stopwatch"></i>
                  </div>
                  <div class="">
                    <h5>Volume (em ml)</h5>
                    <input id="volume" class="input" type="number" min="200" />
                  </div>
                </div>
                <div class="col-sm mt-4 d-flex">   
                  <span class="font-weight-bold">Mililitros</span>
                  <button
                   id="iniciar"
                   type="button"
                   class="btn btn-primary ml-auto p-2"
                 >
                   Iniciar
                 </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        `
    }
}