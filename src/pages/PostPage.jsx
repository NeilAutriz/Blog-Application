import '../styles/PostPage.css'
import { useParams } from 'react-router-dom';

const PostPage = ({ posts }) => {
    const { id } = useParams();
    const postFound = posts.filter((post) => Number(id) === Number(post.id))
    
    return(
        <div className='individual-post-container'>
            {postFound[0].id}
            {postFound[0].body}
            {postFound[0].title}
            {console.log(postFound)}
        </div>
    )
}

export default PostPage;