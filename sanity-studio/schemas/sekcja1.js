export default {
  name: 'sekcja1',
  title: 'Sekcja1',
  type: 'document',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Select the background color for your component.',
      options: {
        list: [
          {title: 'White', value: '#ffffff'},
          {title: 'Black', value: '#000000'},
          {title: 'Red', value: '#ff0000'},
          {title: 'Green', value: '#00ff00'},
          {title: 'Blue', value: '#0000ff'},
          // Add more color options as needed
        ],
      },
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Select the text color for your component.',
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
