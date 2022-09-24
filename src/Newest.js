import {Link} from "react-router-dom";
import {NavbarBottomAdd} from "./NavbarBottomAdd";
import {Song} from "./Song";
import React, {useState, useEffect} from 'react';


export const Newest = () => {
    const url = `http://49.12.207.165:4000/api/session/1/list`;

    const fetchData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        const arrayOfLists = data.map(
            record => <Song id={record.id} title={record.title} artist={record.artist}/>
        )
        return arrayOfLists
    }


    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetchData().then(result => setSongs(result));
    }, []);

    return (
        <div>
            <div className="header">
                <h2 className="queue-headline">Queue: </h2>
            </div>
            <div className="menu">
                {songs}
            </div>
            <NavbarBottomAdd/>
        </div>


    )
}