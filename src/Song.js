
import upvoteempty from "./img/arrow.svg";
import upvotefull from "./img/arrow-fill.svg";

export const Song = () => {

	return (




		<div className="song">


			<p className="song-name"><strong>Song</strong>  </p>
			<div className="right">


				<img   className="upvote-button" src={upvoteempty} />


				
					<h1 className="voting-counter">0</h1>
				

			</div>
		</div>



	)



}

