import { useState } from "react";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import '../../components/modal/styles/modal.css'

export function CardList(params) {

    const [ show, setShow ] = useState(false);
    const [ data, setData ] = useState([]);

    const openModalHandler = (datas) => {
        setShow(true);
        setData(datas);
    }

    const closeModalHandler = () => {
        setShow(false)
    }

    let content = <p>Loading...</p>;
    if(params.data.length !== 0){
        content = params.data.map((datas, i) => {
            return(
                <div key={i} className="flex-col">
                    <Card data={datas} btnModal={() => openModalHandler(datas)} />
                </div>
            )
        });
    }

    return(
        <>
        <div id="list-articles">
            <div className="flex-container">
            {content}
            </div>
        </div>
        <Modal dataModal={data} open={show} close={closeModalHandler} />
        </>
    )
}