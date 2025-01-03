import '../styles/PostPage.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostPage = ({ posts }) => {
    const { id } = useParams();
    const postFound = posts.filter((post) => Number(id) === Number(post.id))
    
    return(
        <div className='indiv-post-page'>
            <div className='container-heading'>
                <img src='https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='header-image' className='header-image' />
                <div className="overlay"> 
                    <h1 className="hero-title">{postFound[0].title} </h1>
                    <p className="hero-subtitle">{postFound[0].datetime}</p>
                    <p className="hero-subtitle">{postFound[0].author}</p>
                    <div className='post-details'>
                        {postFound[0].body}
                    </div>
                    <div className='button-option-container'>
                    <Link to={`/blogs`} className="return-post-button">
                        Return To Feed
                    </Link>
                    <Link to={`/blogs`} className="delete-post-button">
                        Delete Post
                    </Link>
                    <Link to={`/blogs`} className="edit-post-button">
                        Edit Post
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage;