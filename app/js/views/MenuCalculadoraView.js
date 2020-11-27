System.register(["./SugestaoConsumoView"], function (exports_1, context_1) {
    "use strict";
    var SugestaoConsumoView_1, MenuCalculadoraView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (SugestaoConsumoView_1_1) {
                SugestaoConsumoView_1 = SugestaoConsumoView_1_1;
            }
        ],
        execute: function () {
            MenuCalculadoraView = class MenuCalculadoraView {
                constructor(seletor) {
                    $(seletor).html(this.template());
                    new SugestaoConsumoView_1.SugestaoConsumoView('#sugestoesConsumo');
                }
                template() {
                    return `
        <div class="card-body ">
          <h5 class="card-title">Calcular consumo ideal</h5>
            <div class="custom-input mt-0 d-flex flex-row">
              <div class="col-10 d-flex">
                <div class="i">
                  <i class="fas fa-weight"></i>
                </div>
                <div class="">
                  <h5>Informe seu peso</h5>
                  <input id="peso" class="input" type="number" min="1" />
                </div>
              </div>
              <div class="col-2 d-flex mt-4">                
                <span>Kg</span>
              </div>
            </div>
            <div class="custom-input mt-0 d-flex flex-row">
              <div class="col-8 mt-3 d-flex">
                <span id="ingestaoDiaria"></span>
              </div>
              <div class="col-4 mt-4 d-flex">   
                <button
                id="calcular"
                type="button"
                class="btn btn-primary ml-auto p-1"
              >
                Calcular
              </button>
              </div>
            </div>
          </div>
        `;
                }
            };
            exports_1("MenuCalculadoraView", MenuCalculadoraView);
        }
    };
});
