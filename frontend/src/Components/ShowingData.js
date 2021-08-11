import Table from "react-bootstrap/Table";
import { useStore, useData } from "../GlobalState";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowingData = () => {
	const databaseUsing = useStore((state) => state.databaseUsing);
	// data
	const data = useData((state) => state.data);
	const setData = useData((state) => state.setData);

	// database

	const getData = async (names) => {
		const res = await axios.get(`http://localhost:3012/${names}`);
		setData(res.data);
		// console.log(res.data);
	};

	const onClickDelete = async (id) => {
		// getData(databaseUsing);
		const url = `http://localhost:3012/api/delete/${id}`;
		await axios.delete(url, { data: { names: databaseUsing } });
		getData(databaseUsing);
	};

	const mapedData = () => {
		return data.map((datainfo, i) => {
			return (
				<tr key={datainfo.Id} id={datainfo.Id}>
					<td>{i + 1}</td>
					<td>{datainfo.Id}</td>
					<td>{datainfo.Title}</td>
					<td>{datainfo.Actor}</td>
					<td>{datainfo.Actress}</td>
					<td>{datainfo.Awards}</td>
					<td>{datainfo.Subject}</td>
					<td>
						<Link to={`/view/${datainfo.Id}`}>
							<Button variant="outline-primary">View</Button>
						</Link>
					</td>
					<td>
						<Link to={`/edit/${datainfo.Id}`}>
							<Button variant="outline-warning">Edit</Button>
						</Link>
					</td>
					<td>
						<Button
							variant="outline-danger"
							onClick={() => onClickDelete(datainfo.Id)}
						>
							Delete
						</Button>
					</td>
				</tr>
			);
		});
	};

	const databseSecond = () => {
		return data.map((dataWeHaveGot, i) => {
			return (
				<tr key={dataWeHaveGot.Id} id={dataWeHaveGot.Id}>
					<td>{i + 1}</td>
					<td>{dataWeHaveGot.Id}</td>
					<td>{dataWeHaveGot.Name}</td>
					<td>{dataWeHaveGot.User}</td>
					<td>{dataWeHaveGot.Date}</td>
					<td>
						<Link to={`/view/${dataWeHaveGot.Id}`}>
							<Button variant="outline-primary">View</Button>
						</Link>
					</td>
					<td>
						<Button variant="outline-warning">Edit</Button>
					</td>
					<td>
						<Button
							variant="outline-danger"
							onClick={() => onClickDelete(dataWeHaveGot.Id)}
						>
							Delete
						</Button>
					</td>
				</tr>
			);
		});
	};
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>{databaseUsing}</h1>
			<div>
				{databaseUsing === "filminfo" ? (
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>Id</th>
								<th>Id</th>
								<th>Title</th>
								<th>Actor</th>
								<th>Actress</th>
								<th>Awards</th>
								<th>Subject</th>
								<th>View</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>{mapedData()}</tbody>
					</Table>
				) : (
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>Id</th>
								<th>Id</th>
								<th>Name</th>
								<th>User</th>
								<th>Date</th>
								<th>View</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>{databseSecond()}</tbody>
					</Table>
				)}
			</div>
		</div>
	);
};

export default ShowingData;
