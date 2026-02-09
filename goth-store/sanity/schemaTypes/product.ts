export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' }
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Shirt', value: 'shirt' },
          { title: 'Underwear', value: 'underwear' },
          { title: 'Pants', value: 'pants' },
          { title: 'Shoes', value: 'shoes' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Other', value: 'other' }
        ],
      },
    },
  ],
}