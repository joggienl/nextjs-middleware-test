import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome on the homepage</h1>
      <p>Some general homepage text. Blabla and such.</p>
      <p>This project uses data from <a
        href="https://jsonplaceholder.typicode.com/guide/">https://jsonplaceholder.typicode.com.</a>
      </p>
      <br/>
      <Link href="/posts">Overview of posts</Link>
      <br/>
      <Link href="/does-not-exist" className="text-red-500">Link to page that does not exist</Link>
    </>
  )
}
