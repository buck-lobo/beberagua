System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function aoFocar() {
        $(this.parentNode.parentNode.parentNode).addClass("focus");
    }
    exports_1("aoFocar", aoFocar);
    function aoSair() {
        if (this.value == "") {
            $(this.parentNode.parentNode.parentNode).removeClass("focus");
        }
    }
    exports_1("aoSair", aoSair);
    function horaAtual() {
        return new Date().toLocaleTimeString();
    }
    exports_1("horaAtual", horaAtual);
    return {
        setters: [],
        execute: function () {
            (function ($) {
                $.fn.nVal = function () {
                    return Number(this.val());
                };
            }(jQuery));
        }
    };
});
