
import { NavbarBottomQueue } from "./NavbarBottomQueue";
import {useSelector} from "react-redux";
import config from "./config";
import {useState} from "react";
import {Song} from "./Song";

export const Add = () => {
	const sessionId = useSelector((state) => state.session.id)

	const url = config.api_url + "session/" + sessionId + "/search?q="

	const [query, setQuery] = useState("")

	const [entries, setEntries] = useState([])

	const [data, setData] = useState({})

	const voteHandler = (id) => {
		console.log(data)
		console.log(id)
		const elem = data.find((element) => element.id === id)
		elem.votes += 1

		rebuild()
	}

	const rebuild = () => {
		const arrayOfLists = data.map(
			record => <Song
				key={record.id}
				id={record.id}
				title={record.title}
				artist={record.artist}
				votes={record.votes}
				active={record.haveVoted}
				change={{}}
				onVote={voteHandler}
			/>
		)

		setEntries(arrayOfLists)
	}

	const submitHandler = async() => {
		const res = await fetch(url + query)
		const data = await res.json()

		setData(data)

		rebuild()
	}

	const onChangeQuery = (e) => {
		console.log(e.target.value)
		setQuery(e.target.value)
	}

	return (
		<div>
			<div className="search-header">
				<br /> <h2 className="add-a-song">Add a song (Session: {sessionId})</h2>
				<div className="search-div" >
					<input className=" search " type="search" placeholder=" Search a song" onChange={onChangeQuery}/>
					<button onClick={submitHandler}>Search</button>
				</div>
				<br />
			</div>
			<div className="menu">
				{entries}
			</div>
			<NavbarBottomQueue />
		</div>
	)





}
