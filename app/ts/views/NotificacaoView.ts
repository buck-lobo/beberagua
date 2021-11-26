import { Notificacao } from './Notificacao';

export class NotificacaoView {

    constructor(private notificacao: Notificacao){
		this.notificar = this.notificar.bind(this)
	}

    notificar() {
		let n = new Notification(this.notificacao.title, this.notificacao.opcoes);		
		n.onclick = event => {
			event.preventDefault();
			window.focus();
		}
	}
}