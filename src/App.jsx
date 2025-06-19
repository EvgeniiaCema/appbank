import { AccountsProvider } from "./context/AccountsProvider";

import { Form } from "./components/form/form";
import { Account } from "./components/UsersAccounts/components/Account";
import { UsersAccounts } from "./components/usersAccounts/usersAccounts";
import { BankStatisticsPanel } from "./components/BankStatisticsPanel/BankStatisticsPanel";

import "./styles/global.scss";

export function App() {
	return (
		<AccountsProvider>
			<Form />
			<UsersAccounts onRenderAccount={(account) => <Account key={account.id} account={account} />} />
			<BankStatisticsPanel />
		</AccountsProvider>
	);
}
