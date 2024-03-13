export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
