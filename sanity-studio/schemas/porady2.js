export default {
  name: 'porady2',
  title: 'Porady2',
  type: 'document',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Kolor Tła',
      type: 'string',
      description:
        'Wybierz jaki kolor ma mieć tło sekcji. Ważne wszystkie artykuly musza miec ustawione taki sam kolor tla!',
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
      name: 'image',
      title: 'Zdjęcie Karty',
      type: 'image', // Added the image type field
      description: 'Dodaj zdjęcie karty sekcji najlepiej 400x400px.',
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
      name: 'textDuzy',
      title: 'Text Duży',
      type: 'string',
      description: 'Wpisz główny tekst duży.',
    },
    {
      name: 'data',
      title: 'Data Napisania',
      type: 'string',
      description:
        'Dodaj Datę strona będzie sortować artykuły według najnowszej daty DD-MM-RR Zeby dobrze sortowało.',
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
  ],
}