System.register(["./controllers/MenuController", "./controllers/TemporizadorController", "./helpers/utils"], function (exports_1, context_1) {
    "use strict";
    var MenuController_1, TemporizadorController_1, utils_1, menu, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (MenuController_1_1) {
                MenuController_1 = MenuController_1_1;
            },
            function (TemporizadorController_1_1) {
                TemporizadorController_1 = TemporizadorController_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            if (Notification.permission != "granted") {
                Notification.requestPermission();
            }
            menu = new MenuController_1.MenuController();
            controller = new TemporizadorController_1.TemporizadorController();
            controller.configuracao.displayHoraAtual();
            $("#iniciar").on("click", controller.iniciar.bind(controller));
            $("#parar").on("click", controller.parar.bind(controller));
            $(".input").on("focus", utils_1.aoFocar).on("blur", utils_1.aoSair);
            controller.aoEntrar();
            $(".menu-link").on('click', menu.configurarMenu.bind(menu));
            $("#calcular").on('click', controller.sugerirComCalculadora.bind(controller));
            $("#sugestoesConsumo button").on('click', controller.aceitarSugestao.bind(controller));
        }
    };
});
