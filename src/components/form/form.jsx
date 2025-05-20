import { useCreateAccount } from "../usersAccounts/hooks/useCreateAccount";
import { useState } from "react";

export const Form = ({ accounts, setAccounts }) => {
	const createAnAccount = useCreateAccount({ accounts, setAccounts });
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const handleSubmit = (e) => {
		const success = createAnAccount(e, name, surname);

		if (success) {
			setName("");
			setSurname("");
		}
	};

	return (
		<>
			<form>
				<label>
					Username:
					<input type="text" name="username" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Usersurname:
					<input type="text" name="surname" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
				</label>
				<button type="submit" onClick={handleSubmit}>
					Create account
				</button>
			</form>
		</>
	);
};
