import { useEffect, useState } from "react";
import { CardList } from "../containers/CardList/cardlist";

export default function Home(){
    const [ datas, setDatas ] = useState([]);
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e4acc365862542e3b3b6e2d0d9655f08&pageSize=6";

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setDatas(data.articles)})
    }, []);

    return (
        <>
            <h1>Headline News!</h1>
            <CardList data={datas} />
        </>
    )
}