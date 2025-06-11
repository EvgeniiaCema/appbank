import { useState } from "react";

import { useCreateAccount } from "./hooks/useCreateAccount";

import styles from "./Form.module.scss";

export const Form = ({ accounts, setAccounts }) => {
	const [messageError, setMessageError] = useState("");

	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const createAnAccount = useCreateAccount({ accounts, setAccounts, setMessageError });

	const handleSubmit = (e) => {
		const success = createAnAccount(e, name, surname);

		if (success) {
			setName("");
			setSurname("");
		}
	};

	const handelSetName = (e) => {
		setName(e.target.value);
	};

	const handelSetSurname = (e) => {
		setSurname(e.target.value);
	};

	return (
		<>
			<form>
				<label>
					User name:
					<input type="text" name="username" placeholder="name" value={name} onChange={handelSetName} />
				</label>
				<label>
					User surname:
					<input type="text" name="surname" placeholder="surname" value={surname} onChange={handelSetSurname} />
				</label>
				<button type="submit" onClick={handleSubmit}>
					Create account
				</button>
			</form>
			<div className={styles.error}>{setMessageError ? `${messageError}` : ""}</div>
		</>
	);
};
