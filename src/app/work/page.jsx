import Content from "../../components/[work]content";
import { getPosts } from "../../services";

export default async function Work() {
  const posts = (await getPosts()) || [];
  return (
    <>
      <Content posts={posts}/>
    </>
  );
}