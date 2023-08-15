export default {
  name: 'sekcja1',
  title: 'Sekcja1',
  type: 'document',

  fields: [
    {
      name: 'backgroundType',
      title: 'Typ Tła',
      type: 'string',
      options: {
        list: [
          {title: 'Kolor', value: 'color'},
          {title: 'Zdjecie', value: 'image'},
        ],
      },
    },
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
      hidden: ({parent}) => parent && parent.backgroundType === 'image',
    },
    {
      name: 'backgroundImage',
      title: 'Zdjecie Tło',
      type: 'image',
      description: 'Wybierz zdjęcie na tło komponentu.',
      hidden: ({parent}) => parent && parent.backgroundType === 'color',
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
      name: 'textMaly',
      title: 'Text Maly',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'button1Text',
      title: 'Tekst Przycisku 1',
      type: 'string',
      description:
        'Najlepiej użyć tekst jak: Poznaj nas, o nas itp. ponieważ po wciśnięciu przycisku animacja odsyła nas do sekcji poniżej.',
    },
    {
      name: 'button2Text',
      title: 'Tekst Przycisku 2',
      type: 'string',
      description:
        'Najlepiej użyć test jak: Produkty, oferta itp. ponieważ przycisk odsyła nas bezpośrednio do podstrony produktów.',
    },
    {
      name: 'buttonBackground',
      title: 'Kolor Tła Przycisków',
      type: 'string',
      description: 'Wybierz kolor tła przycisków.',
      options: {
        list: [
          {title: 'Biały', value: '#ffffff'},
          {title: 'Czarny', value: '#000000'},
          {title: 'Czerwony', value: '#ff0000'},
          {title: 'Zielony', value: '#00ff00'},
          {title: 'Niebieski', value: '#0000ff'},
          // Dodaj więcej opcji kolorów, jeśli potrzebujesz
        ],
      },
    },
    {
      name: 'buttonTextColor',
      title: 'Kolor Tekstu Przycisków',
      type: 'string',
      description: 'Wybierz kolor tekstu przycisków.',
      options: {
        list: [
          {title: 'Biały', value: 'white'},
          {title: 'Czarny', value: 'black'},
          {title: 'Czerwony', value: 'red'},
          {title: 'Zielony', value: 'green'},
          {title: 'Niebieski', value: 'blue'},
          // Dodaj więcej opcji kolorów, jeśli potrzebujesz
        ],
      },
    },
  ],
}
