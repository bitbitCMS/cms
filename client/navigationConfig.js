const navigationConfig = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    href: '/admin'
  },
  {
    id: 'post',
    title: 'Post',
    type: 'collapse',
    href: '/admin/post',
    children: [
      {
        id: 'addpost',
        title: 'Add Post',
        type: 'item',
        href: '/admin/post/add',
      },
      {
        id: 'addpage',
        title: 'Add Page',
        type: 'item',
        href: '/admin/page/add',
      },
    ]
  },
  {
    id: 'category',
    title: 'Category',
    type: 'item',
    href: '/admin/category'
  },
]

export default navigationConfig
