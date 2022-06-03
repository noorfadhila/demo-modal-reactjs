import './styles/card.css';

export default function Card (props){
    const datas = props.data; 
    const title = datas.title.substr(0, 79);
    
    const seeModalHandler = () => {
        return props.btnModal
    }

    return(
            <div className="card">
                <div className="card-img-top" alt="headline-news" style={{backgroundImage: `url(${datas.urlToImage})`}}></div>
                <div className="card-body">
                    <h5 className="card-title">{title + "..."}</h5>
                    <p>{datas.source.name}</p>
                    <button onClick={seeModalHandler()} className="btn blue btn-modal">Details</button>
                </div>
            </div>
    )
}