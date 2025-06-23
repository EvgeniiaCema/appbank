import { Form } from "./components/form/form";
import { Account } from "./components/UsersAccounts/components/Account/Account";
import { UsersAccounts } from "./components/usersAccounts/usersAccounts";
import { BankStatisticsPanel } from "./components/BankStatisticsPanel/BankStatisticsPanel";

import "./styles/global.scss";

export function App() {
	return (
		<>
			<Form />
			<UsersAccounts onRenderAccount={(account) => <Account key={account.id} account={account} />} />
			<BankStatisticsPanel />
		</>
	);
}
