import { AccountsProvider } from "../context/AccountsProvider";

export const Provider = ({ children }) => {
	return <AccountsProvider>{children}</AccountsProvider>;
};
