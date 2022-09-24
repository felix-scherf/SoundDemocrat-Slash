
import upvoteempty from "./img/arrow.svg";
import upvotefull from "./img/arrow-fill.svg";
import {useEffect, useState} from "react";

export const Song = (props) => {
	const url = `http://49.12.207.165:4000/api/session/1/song/{props.id}`;

	const voteHandler = () => {
		console.log("Upvote ", props.id)
	}

	return (
		<div className="song">
			<div className="song-info">
				<p className="song-name"><strong>{props.title}</strong>  </p> 
				<p className="song-artist">{props.artist}</p>
			</div>
			<div className="voting" onClick={voteHandler}>
				<img alt="vote"  className="upvote-button" src={upvoteempty} />
				<h1 className="voting-counter">0</h1>
			</div>
		</div>
	)
}

