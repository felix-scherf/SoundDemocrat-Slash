
import upvoteempty from "./img/arrow.svg";
import upvotefull from "./img/arrow-fill.svg";

export const Song = (props) => {

	return (




		<div className="song">


			<p className="song-name"><strong>{props.song}</strong>  </p>
			<div className="right">


				<img alt="vote"  className="upvote-button" src={upvoteempty} />


				
					<h1 className="voting-counter">0</h1>
				

			</div>
		</div>



	)



}

