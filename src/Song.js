
import upvoteempty from "./img/arrow.svg";
import upvotefull from "./img/arrow-fill.svg";
import {useEffect, useState} from "react";
import config from "./config";
import {useSelector} from "react-redux";

export const Song = (props) => {
	const token = useSelector((state) => state.session.token)
	const sessionId = useSelector((state) => state.session.id)

	const url = config.api_url + "session/" + sessionId + "/song/" + props.id + "/vote";

	const voteHandler = async () => {
		let method = "";
		if (props.active) {
			method = "DELETE";
		} else {
			method = "PUT";
		}

		props.change['last'] = props.id;

		const res = await fetch(url, {
			method: method,
			headers: {
				'Authorization': token,
			}
		})
		console.log(res)

		const data = await res.json()
		console.log(data)
	}

	const icon = ( () => {
		if (props.active) {
			return upvotefull
		} else {
			return upvoteempty
		}
	}) ();

	return (
		<div className="song">
			<div className="song-info">
				<p className="song-name"><strong>{props.title}</strong>  </p> 
				<p className="song-artist">{props.artist}</p>
			</div>
			<div className="voting" onClick={voteHandler}>
				<img alt="vote"  className="upvote-button" src={icon} />
				<h1 className="voting-counter">{props.votes}</h1>
			</div>
		</div>
	)
}

