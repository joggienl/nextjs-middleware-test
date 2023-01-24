import Link from 'next/link';

export default function PostPage({post}) {
  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <br/>
      <Link href="/blogs">Back to all posts</Link>
      <br/>
      <br/>
      <Link href="/">Link back home</Link>
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({params: {postId = null}}) {
  if (!postId) {
    return {
      notFound: true,
    }
  }

  try {
    const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response was not OK');
    })
    return {
      props: {
        post,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
