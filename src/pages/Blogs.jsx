import BlogCardFeature from "../components/Blogcard";
import '../styles/Blog.css'

const Blogs = ({ posts }) => {
    return (
      <main className="blogs-container">
        <header className="blogs-header">
          <h1>Blogs Collection</h1>
          <p>Your daily dose of insightful articles and updates.</p>
          
        </header>
  
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
  
