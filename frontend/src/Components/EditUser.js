import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../GlobalState";
import axios from "axios";
const EditUser = ({ match }) => {
	const databaseUsing = useStore((state) => state.databaseUsing);
	let Ids = match.params.id;

	const [dataToSend, setDataToSend] = useState({
		Image: "",
	});
	// console.log(Ids);

	// const getOneSingleData = async () => {
	// 	const url = `http://localhost:3012/view/${databaseUsing}/${Ids}`;
	// 	const response = await axios.get(url);
	// 	// console.log(response);
	// };
	// getOneSingleData();

	const updateSingleData = async () => {
		const url = `http://localhost:3012/api/update/${databaseUsing}/${Ids}`;
		await axios.put(url, dataToSend);
	};

	const handelChange = (e) => {
		setDataToSend({ Image: e.target.value });
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		updateSingleData();
		setDataToSend({ Image: "" });
	};
	return (
		<div>
			<h1>I am edit</h1>
			<form>
				<input
					type="text"
					name="name"
					value={dataToSend.Image}
					onChange={handelChange}
				/>
				<button onClick={handelSubmit}>SubmitChanges</button>
			</form>
		</div>
	);
};

export default EditUser;
