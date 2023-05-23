import { createSlug } from '@/lib'

const blogs = {
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // Adjust the maximum length as needed
        slugify: (input: string) => createSlug(input)
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogsCategories' }] }]
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'string'
    },
    {
      name: 'thumb',
      title: 'Thumbnail',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text'
    }
  ]
}

export default blogs