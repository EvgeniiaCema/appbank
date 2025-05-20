import { useState } from "react";

import { Form } from "./components/form/form";
import { Modal } from "./components/modal/modal";
import { UsersAccounts } from "./components/usersAccounts/usersAccounts";

import { useLogStats } from "./components/modal/hooks/useLogStats";

import "./App.css";

export function App() {
	const [accounts, setAccounts] = useState([
		{ id: 1, name: "John", surname: "Doe", balance: 0, isAccountLocked: false },
		{ id: 2, name: "Jane", surname: "Smith", balance: 0, isAccountLocked: true },
		{ id: 3, name: "Alice", surname: "Johnson", balance: 1500, isAccountLocked: false },
		{ id: 4, name: "Alice", surname: "Johnson", balance: 1500, isAccountLocked: false },
	]);
	const logStats = useLogStats({ accounts });
	const [stats, setStats] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Form accounts={accounts} setAccounts={setAccounts} />
			<UsersAccounts accounts={accounts} setAccounts={setAccounts} />
			<div>
				<button
					onClick={() => {
						const result = logStats();
						setStats(result);
						setIsModalOpen(true);
					}}
				>
					bank statistics
				</button>

				<Modal stats={stats} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			</div>
		</>
	);
}
