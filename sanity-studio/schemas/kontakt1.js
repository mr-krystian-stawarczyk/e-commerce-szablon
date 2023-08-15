export default {
  name: 'kontakt1',
  title: 'Kontakt1',
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
      name: 'telefon',
      title: 'Telefon',
      type: 'string',
      description: 'Wpisz główny tekst duży.',
    },
    {
      name: 'telefonPrzycisk',
      title: 'Telefon Przycisk',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'emailPrzycisk',
      title: 'Email Przycisk',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'adres',
      title: 'Adres',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
    },
    {
      name: 'adresPrzycisk',
      title: 'Adres Przycisk',
      type: 'string',
      description: 'Wpisz główny tekst mały.',
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
