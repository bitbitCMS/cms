import Link from 'next/link'

import BlogLayout from 'layouts/BlogLayout'

const Index = () => {
  return (
    <>
      <h1>Ini Halaman Home Blog</h1>
      <Link href="/admin">Ke halaman admin</Link>
    </>
  )
}

Index.Layout = BlogLayout

export default Index
