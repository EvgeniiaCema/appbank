import { useAccountsContext } from "../../context/hooks/useAccountsContext";

export const UsersAccounts = ({ onRenderAccount }) => {
	const { accounts } = useAccountsContext();
	return <div>{accounts.map(onRenderAccount)}</div>;
};
