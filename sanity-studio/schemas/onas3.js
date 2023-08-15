export default {
  name: 'onas3',
  title: 'Onas3',
  type: 'document',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Kolor Tła',
      type: 'string',
      description:
        'Wybierz jaki kolor ma mieć tło sekcji. Ważne !!! Wszystkie elementy w tej sekcji musza miec ustawiony taki sam kolor tla!',
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
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },

    {
      name: 'iconStyleBackground',
      title: 'Icon Style Background',
      type: 'string',
      description: 'Wybierz kolor koła do elementu czasowego.',
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
  ],
}
