import BlogCardFeature from "../components/Blogcard";
import '../styles/Blog.css'
import Headline from "../components/Headline";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Blogs = () => {
  const { posts } = useContext(DataContext);

    return (
      <main className="blogs-container">
        <Headline title={'Blogs Collection'} description={'Your daily dose of insightful articles and updates.'}/>
  
        <section className="blogs-grid">
          {posts.map((post) => (
            <BlogCardFeature
              key={post.id}
              title={post.title}
              details={post.body}
              timeAndDate={post.datetime}
              id={post.id}
            />
          ))}
        </section>
      </main>
    );
  };
  
  export default Blogs;
  
