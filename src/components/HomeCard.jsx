import '../styles/CardFeature.css'

const HomeCard = ({title, details, timeAndDate}) => {
    return(
        <div className='home-card-container'>
            <div className='home-post-card-design'>
                    <h2 className='home-card-title'> {title}</h2>
                <p className='home-card-detail'>{details}</p>
            </div>
        </div>
    )
}   


export default HomeCard;
