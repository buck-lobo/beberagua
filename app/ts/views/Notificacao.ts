export interface Notificacao {
    title: string;
    opcoes: {
               body: string;
               icon: string;
               tag: string;
               renotify: boolean;
            };		
}