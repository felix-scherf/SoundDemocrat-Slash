import {Link} from "react-router-dom";
import {NavbarBottomAdd} from "./NavbarBottomAdd";
import {Song} from "./Song";
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ScriptTag from 'react-script-tag';

import config from "./config"
import {init} from "./features/session/sessionSlice";


export const Newest = () => {
    const sessionId = useSelector((state) => state.session.id)
    const token = useSelector((state) => state.session.token)
    const creator = useSelector((state) => state.session.creator)

    const url = config.api_url + "session/" + sessionId + "/list";
    const nextUrl = config.api_url + "session/" + sessionId + "/next";

    var change = {};

    const fetchData = async () => {
        if (creator) {
            if (DZ.app_id == null) {
                DZ.init({
                    appId: '560562',
                    channelUrl: 'http://sound.democrat/channel.html',
                    player : {
                        container: 'player',
                        width : 300,
                        height : 300,
                        format : 'square',
                        onload : function(){
                            return {
                                muted: false,
                                repeat: 0,
                                shuffle: false,
                                volume: 50,
                            }
                        }
                    }
                })
            }

            if (!DZ.player.isPlaying()) {
                const res = await fetch(nextUrl, {
                    headers: {
                        'Authorization': token,
                    }
                })

                if (res.status === 200) {
                    const data = await res.json();

                    var s = data.split("--")
                    if (s[0] === "deezer") {
                        DZ.player.playTracks([s[1]])
                        DZ.player.play()
                    } else {
                        alert("Unsupported platform " + s[0])
                    }
                }
            }
        }

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
            <h2 className="">(Session-Id: {sessionId})</h2>
                <h2 className="queue-headline">Queue: </h2>
            </div>
            <div className="menu">
                {songs}
            </div>
            <div id="player"></div>
            <NavbarBottomAdd/>
        </div>


    )
}