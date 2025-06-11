import { useState } from "react";

import { MOCK_USERS_DATA } from "./Users.data";

import { Form } from "./components/form/form";
import { Account } from "./components/UsersAccounts/components/Account";
import { UsersAccounts } from "./components/usersAccounts/usersAccounts";
import { BankStatisticsPanel } from "./components/BankStatisticsPanel/BankStatisticsPanel";

import "./styles/global.scss";

export function App() {
	const [accounts, setAccounts] = useState(MOCK_USERS_DATA);

	return (
		<>
			<Form accounts={accounts} setAccounts={setAccounts} />
			<UsersAccounts
				accounts={accounts}
				onRenderAccount={(account) => <Account key={account.id} account={account} accounts={accounts} setAccounts={setAccounts} />}
			/>
			<BankStatisticsPanel accounts={accounts} />
		</>
	);
}
