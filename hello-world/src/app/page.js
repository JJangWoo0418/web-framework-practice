import Link from 'next/link'

export default function Home() {
  return(
    <div>
      <h1>Home Page</h1>

      <Link href='/blog'>
        Blog
      </Link>
      <br/>
      <Link href='/product'>
        product
      </Link>
      <br/>
      <Link href='www.google.com'>
        google
      </Link>
      <br/>
      <Link href='/articles/breaking-news-123?lang=en'> Read in English </Link>
      <br/>
      <Link href='/articles/breaking-news-123?lang=kr'> Read in Korea </Link>
    </div>
  )
}