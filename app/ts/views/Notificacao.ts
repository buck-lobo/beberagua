export interface Notificacao {
    title: string;
    opcoes: {
               body: string;
               icon: string;
               renotify: boolean;
            };		
}