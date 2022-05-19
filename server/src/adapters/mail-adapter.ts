export interface SendMailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendmail: (data: SendMailData) => void;
}
