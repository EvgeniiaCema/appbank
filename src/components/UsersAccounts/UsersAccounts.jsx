import { useAccountsContext } from "../../context/AccountsContext";

export const UsersAccounts = ({ onRenderAccount }) => {
	const { accounts } = useAccountsContext();
	return <div>{accounts.map(onRenderAccount)}</div>;
};
