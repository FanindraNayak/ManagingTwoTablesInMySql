import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../GlobalState";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
const View = ({ match }) => {
	const [oneData, setOneData] = useState({});
	// Globel State
	const databaseUsing = useStore((state) => state.databaseUsing);

	// GetData
	const getSingleData = async () => {
		let Ids = match.params.id;
		const url = `http://localhost:3012/view/${databaseUsing}/${Ids}`;
		const response = await axios.get(url);
		console.log(response);
		setOneData(response.data[0]);
	};

	useEffect(() => {
		getSingleData();
	}, []);

	const history = useHistory();

	const databaseOne = () => {
		return (
			<Card
				bg={`secondary`}
				text={"light"}
				style={{
					width: "18rem",
					textAlign: "center",
					width: "max-content",
					marginLeft: "30%",
					marginTop: "6%",
				}}
				className="mb-2"
			>
				<Card.Header>
					<h1>Table : {databaseUsing}</h1>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						{" "}
						<h1>Movie : {oneData.Title}</h1>{" "}
					</Card.Title>
					<Card.Text>
						<h3>
							Actor: {oneData.Actor}
							<br />
							Actress: {oneData.Actress}
							<br />
							Awards: {oneData.Awards}
							<br />
							Director: {oneData.Director}
							<br />
							Length: {oneData.Length} Min
							<br />
							Popularity: {oneData.Popularity}
							<br />
							Subject: {oneData.Subject}
							<br />
							Image: {oneData.Image}
							<br />
							Year: {oneData.Year}
							<br />
						</h3>
					</Card.Text>
				</Card.Body>
			</Card>
		);
	};

	const databaseTwo = () => {
		return (
			<Card
				bg={`secondary`}
				text={"light"}
				style={{
					width: "18rem",
					width: "max-content",
					textAlign: "center",
					padding: 20,
					marginLeft: "30%",
					marginTop: "10%",
				}}
				className="mb-2"
			>
				<Card.Header>
					<h1>Table : {databaseUsing}</h1>
				</Card.Header>
				<Card.Body>
					<Card.Title>
						{" "}
						<h1>User : {oneData.User} </h1>{" "}
					</Card.Title>
					<Card.Text>
						<h3>
							<br />
							Name:{oneData.Name}
							<br />
							Date: {oneData.Date} <br />
						</h3>
					</Card.Text>
				</Card.Body>
			</Card>
		);
	};
	return (
		<div>
			{databaseUsing === "filminfo" ? databaseOne() : databaseTwo()}
			<br />
			<div
				style={{
					marginLeft: "35%",
					// textAlign: "center",
				}}
			>
				<Button
					variant="outline-primary"
					style={{
						paddingLeft: 50,
						paddingRight: 50,
						paddingTop: 20,
						paddingBottom: 20,
					}}
					onClick={() => history.goBack()}
				>
					Go Back
				</Button>
			</div>
		</div>
	);
};

export default View;
