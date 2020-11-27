import { Notificacao } from './Notificacao';

export class NotificacaoView {

    constructor(private notificacao: Notificacao){}

    notificar() {
		let n = new Notification(this.notificacao.title, this.notificacao.opcoes);		
		n.onclick = event => {
			event.preventDefault();
			window.focus();
		}
	}
}