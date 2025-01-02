import '../styles/Headline.css'

const Headline = ({ title, description }) => {
    return(
        <header className="blogs-header">
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}


export default Headline;