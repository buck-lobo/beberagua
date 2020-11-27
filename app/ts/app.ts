import { MenuController } from './controllers/MenuController';
import { TemporizadorController } from "./controllers/TemporizadorController";
import { aoFocar, aoSair } from "./helpers/utils";

if (Notification.permission != "granted") {
  Notification.requestPermission();
}

const menu = new MenuController();
const controller = new TemporizadorController();

controller.configuracao.displayHoraAtual();
$("#iniciar").on("click", controller.iniciar.bind(controller));
$("#parar").on("click", controller.parar.bind(controller));
$(".input").on("focus", aoFocar).on("blur", aoSair);
controller.aoEntrar();


$(".menu-link").on('click', menu.configurarMenu.bind(menu));
$("#calcular").on('click', controller.sugerirComCalculadora.bind(controller));
$("#sugestoesConsumo button").on('click', controller.aceitarSugestao.bind(controller))

