import '../styles/AddPost.css'
import Headline from '../components/Headline';


const AddPost = () => {
    return(
        <div className='add-post-container'>
            <Headline title={'Creating blog in the Application'} description={"Empower your self through creating your own entry in the sea of thoughts."}/>
            <form className='add-form'>
                <h1>Add new blog in the application</h1>
                <div className='minor-form-det'>
                <input type='text' required className='input-title'placeholder='Enter title of the blog' />
                <input type='date' required className='input-date'placeholder='Enter date that the blog is created' />
                </div>
                <textarea required className='input-body'placeholder='Enter body of the blog' />
                <button type='submit' className='submit-button-blog'>
                    Create the Blog
                </button>
            </form>
        </div>
    )
}

export default AddPost;