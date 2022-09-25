import { Link } from "react-router-dom";
import { NavbarBottomQueue } from "./NavbarBottomQueue";
import {useDispatch} from "react-redux";
import {set} from "./features/session/sessionSlice";
import {useState} from "react";
import config from "./config";


export const Session = () => {
	const createUrl = config.api_url + "/create"

	const joinUrl = (id) => {
		return config.api_url + "session/" + id + "/join"
	}

	const [nickname, setNickname] = useState("")
	const [sessionId, setSessionId] = useState(0)

	const dispatch = useDispatch()

	const createHandler = async () => {
		const res = await fetch(createUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ nickname: nickname.toString()})
		})
		const data = await res.json()
		console.log(data)

		dispatch(set({ id: data['sessionId'], token: data['token'], creator: true, playerinit: false}))
	}

	const joinHandler = async () => {
		const res = await fetch(joinUrl(sessionId), {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ nickname: nickname.toString() })
		})
		const data = await res.json()
		console.log(data)
		dispatch(set({ id: sessionId, token: data['token'], creator: false, playerinit: false}))
	}

	const onChangeNickname = (e) => {
		setNickname(e.target.value)
	}

	const onChangeSessionId = (e) => {
		setSessionId(e.target.value)
	}



	return (
		<div>
			<div className="people-navbar">
				<h2 className="session-headline">Session </h2>
			</div>

			<div className="session-div">
				<label className="nickname" for="nickname"> <strong>Nickname:    </strong></label>
				<input className="session-input" type="text" onChange={onChangeNickname}/>
				<button className="session-button btn-dark" onClick={createHandler}>Create session</button> <br /> <br />
				<label className="nickname" for="nickname"> <strong>Session-Id:    </strong></label>
				<input  className="session-input" type="text" onChange={onChangeSessionId}/>
				<button className="session-button btn-dark" onClick={joinHandler}>Join session</button>
			</div>
			<NavbarBottomQueue />
		</div>


	)
}