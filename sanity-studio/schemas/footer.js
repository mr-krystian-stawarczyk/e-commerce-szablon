export default {
  name: 'footer',
  title: 'Dolna Stopka Nawigacji',
  type: 'document',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Kolor Tła',
      type: 'string',
      description: 'Wybierz jaki kolor ma mieć tło sekcji.',
      options: {
        list: [
          {title: 'Biały', value: '#ffffff'},
          {title: 'Czarny', value: '#000000'},
          {title: 'Czerwony', value: '#ff0000'},
          {title: 'Zielony', value: '#00ff00'},
          {title: 'Niebieski', value: '#0000ff'},
          // Add more color options as needed
        ],
      },
    },
    {
      name: 'textColor',
      title: 'Kolor Tekstu',
      type: 'string',
      description: 'Wybierz kolor tekstu.',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'},
          {title: 'Red', value: 'red'},
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
          // Add more color options as needed
        ],
      },
    },
    {
      name: 'nazwaFirmy',
      title: 'Nazwa Firmy',
      type: 'string',
      description: 'Do użycia all rights reserved.',
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Wpisz główny tekst duży.',
    },
    {
      name: 'fbLink',
      title: 'FB Link',
      type: 'string',
      description:
        'Podaj Link FB. / Ważne! - jeżeli nie masz linku do którejś platformy nie wprowadzaj.',
    },
    {
      name: 'snLink',
      title: 'Snap Link',
      type: 'string',
      description: 'Podaj Snapchat Link.',
    },
    {
      name: 'istaLink',
      title: 'Instagram Link',
      type: 'string',
      description: 'Podaj Instagram Link.',
    },
  ],
}
