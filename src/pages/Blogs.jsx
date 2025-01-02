import BlogCardFeature from "../components/Blogcard";
import '../styles/Blog.css'
import Headline from "../components/Headline";


const Blogs = ({ posts }) => {
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
  
