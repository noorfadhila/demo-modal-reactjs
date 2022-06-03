import { useState, useEffect } from 'react';
import './styles/modal.css';

export default function Modal (props){

    const datas = props.dataModal;

    const addBodyClass = className => document.body.classList.add(className);
    const removeBodyClass = className => document.body.classList.remove(className);

    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() => {
        setIsOpen(props.open);
        isOpen ? addBodyClass("modal-open") : removeBodyClass("modal-open");
    },[props.open, isOpen])

    const show = props.open ? "show" : "hide";
    const modalStyle = `modal ${show}`
    
    return(
        <div className={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{datas.title}</h5>
                        <button className="btn-close-modal" onClick={props.close}>X</button>
                    </div>
                    <div className="modal-body">
                    <div className="card-img-top" alt="headline-news" style={{backgroundImage: `url(${datas.urlToImage})`}}></div>
                    <p>Author: {datas.author}</p>
                    <p>Published At: {datas.publishedAt}</p>
                    <p>{datas.description}</p>
                    <p>source: <a href={datas.url}>{datas.url}</a></p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn red btn-close-modal" onClick={props.close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 