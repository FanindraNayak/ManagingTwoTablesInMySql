import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

import { useStore, useData } from "../GlobalState";

const Mysql = () => {
	const nameOfDb = useStore((state) => state.nameOfDb);
	const setDbName = useStore((state) => state.setDbName);
	const setDatabaseUsing = useStore((state) => state.setDatabaseUsing);

	const setData = useData((state) => state.setData);

	const handelClick = async (names) => {
		const res = await axios.get(`http://localhost:3012/${names}`);
		setData(res.data);
		// console.log(res.data);
		setDatabaseUsing(names);
	};

	return (
		<div>
			<Dropdown className="ms-4">
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					{nameOfDb}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item
						href="#/action-1"
						onClick={() => {
							handelClick("filminfo");
							setDbName("Db1");
						}}
					>
						Db1
					</Dropdown.Item>
					<Dropdown.Item
						href="#/action-2"
						onClick={() => {
							handelClick("smallData");
							setDbName("Db2");
						}}
					>
						Db2
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default Mysql;
