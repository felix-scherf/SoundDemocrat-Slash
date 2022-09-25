import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "./css/index.css";

import { Newest } from "./Newest";

import { MostPopular } from "./MostPopular";

import { Add } from "./Add";

import { Session } from "./Session";

import { Info } from "./Info";

import {Provider} from "react-redux";

import store from './store'

const app = document.getElementById("app");
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Newest />} />
				<Route path="/most-popular" element={<MostPopular />} />
				<Route path="/add" element={<Add />} />
				<Route path="/session" element={<Session />} />
				<Route path="/info" element={<Info />} />
			</Routes>
		</Provider>
	</BrowserRouter>,
	app);