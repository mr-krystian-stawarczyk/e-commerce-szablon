export default {
  name: 'onas2',
  title: 'Onas2',
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
      name: 'textDuzy1',
      title: 'Text Duży1',
      type: 'string',
      description: 'Wpisz główny tekst duży.',
    },
    {
      name: 'textDuzy2',
      title: 'Text Duży2',
      type: 'string',
      description: 'Wpisz główny tekst duży.',
    },
    {
      name: 'textMaly1',
      title: 'Text Maly1',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'textMaly2',
      title: 'Text Maly2',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'textMaly3',
      title: 'Text Maly3',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'textMaly4',
      title: 'Text Maly4',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'textMaly5',
      title: 'Text Maly5',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'textMaly6',
      title: 'Text Maly6',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
  ],
}
