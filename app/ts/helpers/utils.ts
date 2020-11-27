
export function aoFocar() {
  $(this.parentNode.parentNode.parentNode).addClass("focus");
}

export function aoSair() {
  if (this.value == "") {
    $(this.parentNode.parentNode.parentNode).removeClass("focus");
  }
}

export function horaAtual() {
    return new Date().toLocaleTimeString();
}

//Plugins JQuery
(function ($){
  $.fn.nVal = function(){
    return Number(this.val())
  }
}( jQuery ));

