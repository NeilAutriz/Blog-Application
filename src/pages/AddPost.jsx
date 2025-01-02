import '../styles/AddPost.css'
import Headline from '../components/Headline';
import { useState } from 'react';


const AddPost = ({ posts, setPosts }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');

    const handleAddBlog = (e) => {
        e.preventDefault();
        const newId = Number(posts.length + 1);
        console.log(title, body, date, newId);
        const createdBlog = {
            "id": newId,
            "title": title,
            "datetime": date,
            "body": body
        }
        console.log(createdBlog);
        setPosts([...posts, createdBlog]);
        console.log(posts);

        setTitle('');
        setBody('');
        setDate('');
    }


    return(
        <div className='add-post-container'>
            <Headline title={'Creating blog in the Application'} description={"Empower your self through creating your own entry in the sea of thoughts."}/>
            <form className='add-form' onSubmit={(e) => e.preventDefault()}>
                <h1>Add new blog in the application</h1>
                <div className='minor-form-det'>
                <input type='text' 
                required className='input-title'
                placeholder='Enter title of the blog' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>

                <input type='date' 
                required className='input-date'
                placeholder='Enter date that the blog is created' 
                value={date}
                onChange={(e) => setDate(e.target.value)}/>

                </div>
                <textarea required 
                className='input-body'
                placeholder='Enter body of the blog' 
                value={body}
                onChange={(e) => setBody(e.target.value)}/>

                <button type='submit' className='submit-button-blog' onClick={(e) => handleAddBlog(e)}>
                    Create the Blog
                </button>
            </form>
        </div>
    )
}

export default AddPost;