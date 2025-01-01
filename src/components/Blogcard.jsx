import '../styles/BlogCard.css'
import { Link } from 'react-router-dom';


const BlogCardFeature = ({title, details, timeAndDate, id}) => {
    return(
        <div className='individual-post-container'>
            <div className='indiv-post-card-design'>
                <div className='card-header'>
                    <h2 className='post-title'> {title}</h2>
                    <h5 className='post-timeDate'> {timeAndDate} </h5>
                    {id}
                </div>
                <div className='card-body'>
                <p className='post-detail'> {details} </p>
                    <Link to={`${id}`} className="link-post-label">
                        See Full Post 
                    </Link>
                </div>
            </div>
        </div>
    )
}   


export default BlogCardFeature;
