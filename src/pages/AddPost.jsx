import '../styles/AddPost.css'
import Headline from '../components/Headline';
import { useContext, useState } from 'react';
import api from '../api/blogPosts';
import DataContext from '../context/DataContext';


const AddPost = () => {
    const { posts, setPosts, dataUrl } = useContext(DataContext);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('')

    const handleAddBlog = async (e) => {
        try{
            e.preventDefault();
            const newId = Number(posts.length + 1);
            console.log(title, body, date, newId, author);
            const createdBlog = {
                "id": String(newId),
                "title": title,
                "datetime": date,
                "author": author,
                "body": body
            }
            setPosts([...posts, createdBlog]);
            await api.post(dataUrl, createdBlog);

            setTitle('');
            setBody('');
            setDate('');
            setAuthor('');
        } catch (error){
            console.log(error);
        }
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

                <input type='text' 
                required className='input-author'
                placeholder='Enter author of the blog' 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}/>

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