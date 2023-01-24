import Link from 'next/link';

export default function PostsPage({posts}) {
  return (
    <>
      <h1>Posts overview</h1>
      <ul>
        {posts?.length > 0 && posts.map(post => (
          <li key={`post_overview_${post?.id}`}><Link
            href={`/posts/${post?.id}`}>{post?.title}</Link></li>
        ))}
        <li><Link href="/posts/fakepost" className="text-red-500">Fake post</Link></li>
      </ul>
      <br/>
      <Link href="/">Link back home</Link>
    </>
  );
}

export async function getStaticProps() {
  try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response was not OK');
    });
    return {
      props: {
        posts,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
