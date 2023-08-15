export default {
  name: 'sekcja3',
  title: 'Sekcja3',
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
      name: 'buttonText',
      title: 'Tekst Przycisku 1',
      type: 'string',
      description:
        'Najlepiej użyć tekst jak: Poznaj nas, o nas itp. ponieważ po wciśnięciu przycisku animacja odsyła nas do sekcji poniżej.',
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
    {
      name: 'linkTo',
      title: 'Link To',
      type: 'string',
      options: {
        list: [
          {title: 'Kontakt', value: 'contact'},
          {title: 'O Nas', value: 'about'},
          {title: 'Porady', value: 'blog'},
          {title: 'Produkty', value: 'products'},
        ],
      },
      description: 'Wybierz docelową sekcję do ktorej wysyla przycisk.',
    },
  ],
}
