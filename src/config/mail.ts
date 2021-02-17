export interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'equipe@gobarber.com.br', // Email configurado no SES,
      name: 'Equipe GoBarber',
    },
  },
} as IMailConfig;
