import type { LegalPage, LegalPageKey } from '../siteContent'

export const portugueseLegalPages: Record<LegalPageKey, LegalPage> = {
  terms: {
    eyebrow: 'Termos e Condições',
    title: 'Termos e Condições do My Rents',
    intro:
      'Os presentes Termos e Condições regulam a utilização do My Rents, deste sítio web e do fórum público de suporte geridos por Daniel Rodríguez.',
    updatedAt: '11 de março de 2026',
    sections: [
      {
        title: 'Quem é o responsável',
        paragraphs: [
          'O My Rents é uma aplicação de gestão de arrendamentos e um serviço online disponibilizado por Daniel Rodríguez a título individual.',
          'Estes termos aplicam-se à aplicação móvel, a este sítio web e a todos os canais de suporte associados.',
        ],
      },
      {
        title: 'Aceitação e requisitos',
        paragraphs: [
          'Ao descarregar ou utilizar o My Rents, o utilizador aceita estes termos e a Política de Privacidade.',
          'A utilização do serviço destina-se a pessoas com idade igual ou superior a 13 anos.',
        ],
      },
      {
        title: 'Serviços disponibilizados',
        paragraphs: [
          'O My Rents permite organizar imóveis, frações, contratos de arrendamento, despesas, contactos e relatórios.',
          'O My Rents é uma ferramenta de gestão e apoio. O utilizador mantém a total responsabilidade pelo cumprimento das regras fiscais e legais aplicáveis à sua atividade.',
        ],
      },
      {
        title: 'Assinaturas PRO e compras na app',
        paragraphs: [
          'Determinadas funcionalidades requerem uma subscrição PRO. O processamento de pagamentos e cobranças é gerido pela respetiva loja de aplicações (ex.: Google Play).',
        ],
      },
      {
        title: 'Lei aplicável e contactos',
        paragraphs: [
          'Estes termos são regidos pelas leis de Espanha, sem prejuízo de direitos imperativos do consumidor vigentes no país de residência.',
          'Para quaisquer dúvidas, contacte-nos através de info@myrents-app.com.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Política de Privacidade',
    title: 'Política de Privacidade do My Rents',
    intro:
      'Esta Política de Privacidade esclarece como Daniel Rodríguez recolhe e trata dados pessoais no âmbito da utilização do My Rents nos termos do RGPD.',
    updatedAt: '23 de março de 2026',
    sections: [
      {
        title: 'Responsável pelo tratamento',
        paragraphs: [
          'O responsável pelo tratamento de dados pessoais é Daniel Rodríguez. Contacto: info@myrents-app.com.',
        ],
      },
      {
        title: 'Dados recolhidos e finalidades',
        paragraphs: [
          'Recolhemos o endereço de e-mail e os dados inseridos voluntariamente para gestão dos seus arrendamentos (contratos, recibos, despesas).',
          'Estes dados destinam-se unicamente a prestar o serviço de gestão solicitado. Não partilhamos dados com redes de publicidade nem realizamos remarketing.',
        ],
      },
      {
        title: 'Direitos do titular dos dados',
        paragraphs: [
          'Ao abrigo do RGPD, tem o direito de aceder, retificar, solicitar a eliminação e a portabilidade dos seus dados pessoais.',
        ],
      },
    ],
  },
  eula: {
    eyebrow: 'Contrato de Licença de Utilizador Final',
    title: 'EULA do My Rents',
    intro:
      'Este contrato define as condições e direitos concedidos para a utilização do software My Rents.',
    updatedAt: '11 de março de 2026',
    sections: [
      {
        title: 'Concessão de licença',
        paragraphs: [
          'Daniel Rodríguez concede-lhe uma licença pessoal, não exclusiva e intransmissível para utilizar o software My Rents nos seus dispositivos.',
        ],
      },
      {
        title: 'Propriedade intelectual',
        paragraphs: [
          'Todos os direitos de autor e de propriedade intelectual referentes ao software pertencem exclusivamente a Daniel Rodríguez.',
        ],
      },
    ],
  },
  dataDeletion: {
    eyebrow: 'Eliminação de dados',
    title: 'Eliminação de dados pessoais no My Rents',
    intro: 'Como solicitar a eliminação definitiva da sua conta e dos respetivos dados associados.',
    updatedAt: '11 de março de 2026',
    sections: [
      {
        title: 'Como pedir a eliminação',
        paragraphs: [
          'Pode eliminar a sua conta diretamente através das opções da app ou enviando um pedido para info@myrents-app.com.',
        ],
      },
      {
        title: 'Efeito do pedido',
        paragraphs: [
          'A confirmação da eliminação resulta no apagamento irreversível de todos os imóveis, contratos, despesas e documentos associados à sua conta.',
        ],
      },
    ],
  },
}
