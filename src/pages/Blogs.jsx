import BlogCardFeature from "../components/Blogcard";


const Blogs = ({posts}) => {
    return (
        <main>
            {console.log(posts)}
            <h1>Blogs Page</h1>
            <p>Welcome to the Blogs page.</p>
            {posts.map((post) => (
                <BlogCardFeature title={post.title} details={post.body} timeAndDate={post.datetime} id={post.id}/>
            ))}
        </main>
    );
};

export default Blogs;
