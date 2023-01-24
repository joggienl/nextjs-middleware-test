import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome on the homepage</h1>
      <p>Some general homepage text. Blabla and such.</p>
      <br/>
      <Link href="/blogs">Overview of blogs</Link>
      <br/>
      <Link href="/does-not-exist" className="text-red-500">Link to page that does not exist</Link>
    </>
  )
}
