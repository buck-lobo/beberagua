System.register(["../views/MenuCalculadoraView", "../views/MenuImportanciaView", "./../views/MenuLinkView"], function (exports_1, context_1) {
    "use strict";
    var MenuCalculadoraView_1, MenuImportanciaView_1, MenuLinkView_1, MenuController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (MenuCalculadoraView_1_1) {
                MenuCalculadoraView_1 = MenuCalculadoraView_1_1;
            },
            function (MenuImportanciaView_1_1) {
                MenuImportanciaView_1 = MenuImportanciaView_1_1;
            },
            function (MenuLinkView_1_1) {
                MenuLinkView_1 = MenuLinkView_1_1;
            }
        ],
        execute: function () {
            MenuController = class MenuController {
                constructor() {
                    new MenuLinkView_1.MenuLinkView('#linksUteis');
                    new MenuImportanciaView_1.MenuImportanciaView('#boasVindas');
                    new MenuCalculadoraView_1.MenuCalculadoraView('#calcularIngestao');
                    this._menus = $(".menu-link");
                    this._links = $(".link.dispara-menu");
                    this._setarItemClicado();
                    this._configurarLinks();
                }
                _setarItemClicado() {
                    let classe = this;
                    classe._menus.on('click', function () {
                        classe._itemClicado = `#${this.id}`;
                    });
                }
                _configurarLinks() {
                    let classe = this;
                    classe._links.on('click', function () {
                        let target = $(this).attr('data-click');
                        $(target).trigger('click');
                    });
                }
                configurarMenu() {
                    let item = $(this._itemClicado);
                    let target;
                    let targetUnico;
                    if (item.attr("unico")) {
                        targetUnico = item.attr("data-target");
                        if (item.hasClass("active")) {
                            item.removeClass("active");
                            if ($(targetUnico).attr('data-filho')) {
                                $(`#${$(targetUnico).attr('data-filho')}`).removeClass("show");
                            }
                        }
                        else {
                            item.addClass("active");
                        }
                        this._menus.each(function () {
                            target = $(this).attr("data-target");
                            if (target != targetUnico) {
                                $(this).removeClass("active");
                                $(target).removeClass("show");
                            }
                        });
                    }
                    else if (item.hasClass("active")) {
                        item.removeClass("active");
                    }
                    else {
                        item.addClass("active");
                        targetUnico = $("[unico]").attr("data-target");
                        $("[unico]").removeClass("active");
                        $(targetUnico).removeClass("show");
                        if ($(targetUnico).attr('data-filho')) {
                            $(`#${$(targetUnico).attr('data-filho')}`).removeClass("show");
                        }
                    }
                }
            };
            exports_1("MenuController", MenuController);
        }
    };
});
