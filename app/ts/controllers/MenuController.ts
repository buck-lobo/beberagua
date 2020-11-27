import { MenuCalculadoraView } from '../views/MenuCalculadoraView';
import { MenuImportanciaView } from '../views/MenuImportanciaView';
import { MenuLinkView } from './../views/MenuLinkView';

export class MenuController {
  private _menus: JQuery;
  private _links: JQuery;
  private _itemClicado: string;

  constructor() {
    new MenuLinkView('#linksUteis');
    new MenuImportanciaView('#boasVindas');
    new MenuCalculadoraView('#calcularIngestao');

    this._menus = $(".menu-link");
    this._links = $(".link.dispara-menu");
    this._setarItemClicado();
    this._configurarLinks();


  }

  private _setarItemClicado(){
    let classe = this;
    classe._menus.on('click', function(){
      classe._itemClicado = `#${this.id}`;
    })
  }

  private _configurarLinks(){
    let classe = this;
    classe._links.on('click', function(){
      let target = <string>$(this).attr('data-click');
      $(target).trigger('click');
    })
  }

  configurarMenu() {
    let item = $(this._itemClicado);
    let target: string;
    let targetUnico: string;

    if (item.attr("unico")) {
      targetUnico = <string>item.attr("data-target");
      if(item.hasClass("active")){
        item.removeClass("active")
        if($(targetUnico).attr('data-filho')){
          $(`#${$(targetUnico).attr('data-filho')}`).removeClass("show");
        }
      }else{
        item.addClass("active");
      }
      this._menus.each(function() {
        target = <string>$(this).attr("data-target");
        if (target != targetUnico) {
          $(this).removeClass("active");
          $(target).removeClass("show");
          
        }
      });
    } else if (item.hasClass("active")) {
        item.removeClass("active");
      } else {
        item.addClass("active");
        targetUnico = <string>$("[unico]").attr("data-target");
        $("[unico]").removeClass("active");
        $(targetUnico).removeClass("show");
        if($(targetUnico).attr('data-filho')){
          $(`#${$(targetUnico).attr('data-filho')}`).removeClass("show");
        }
      }
  }

}
