import {Link} from "react-router-dom";
import {NavbarBottomAdd} from "./NavbarBottomAdd";
import {Song} from "./Song";
import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

import config from "./config"


export const Newest = () => {
    const sessionId = useSelector((state) => state.session.id)
    const token = useSelector((state) => state.session.token)

    const url = config.api_url + "session/" + sessionId + "/list";

    var change = {};

    const fetchData = async () => {
        const res = await fetch(url, {
            headers: {
                'Authorization': token,
            }
        })
        const data = await res.json()
        const arrayOfLists = data.map(
            record => <Song
                key={record.id}
                id={record.id}
                title={record.title}
                artist={record.artist}
                votes={record.votes}
                active={record.haveVoted}
                change={change}
            />
        )
        return arrayOfLists
    }


    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetchData().then(result => setSongs(result));
    }, [ change ]); // TODO:

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