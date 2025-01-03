import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Headline from "../components/Headline";

const EditPost = ({ posts, setPosts }) => {
    const { id } = useParams();
    let postFound = posts.find((post) => Number(id) === Number(post.id))
    const navigate = useNavigate();
    
    const [editTitle, setEditTitle] = useState(postFound.title || "");
    const [editBody, setEditBody] = useState(postFound.body || "");
    const [editDate, setEditDate] = useState(postFound.Date || "");
    const [editAuthor, setEditAuthor] = useState(postFound.author || "")

    const handleAddBlog = (e) => {
        e.preventDefault();


        postFound.title = editTitle;
        postFound.body = editBody;
        postFound.date = editDate;
        postFound.author = editAuthor;

        setEditTitle('');
        setEditBody('');
        setEditDate('');
        setEditAuthor('');
        navigate('/blogs');
    }

    return(
        <div className='add-post-container'>
            <Headline title={'Editing the Blog'} description={"Empower your self through creating your own entry in the sea of thoughts."}/>
            <form className='add-form' onSubmit={(e) => e.preventDefault()}>
                <h1>Edit the current blog of the post</h1>
                <div className='minor-form-det'>
                <input type='text' 
                required className='input-title'
                placeholder='Enter title of the blog' 
                value={editTitle} 
                onChange={(e) => setEditTitle(e.target.value)}/>

                <input type='date' 
                required className='input-date'
                placeholder='Enter date that the blog is created' 
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}/>

                </div>

                <input type='text' 
                required className='input-author'
                placeholder='Enter author of the blog' 
                value={editAuthor} 
                onChange={(e) => setEditAuthor(e.target.value)}/>

                <textarea required 
                className='input-body'
                placeholder='Enter body of the blog' 
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}/>

                <button type='submit' className='submit-button-blog' onClick={(e) => handleAddBlog(e)}>
                    Create the Blog
                </button>
            </form>
        </div>
    )
}   


export default EditPost;