import { createContext, useContext } from "react";

export const AccountsContext = createContext();

export const useAccountsContext = () => {
	const context = useContext(AccountsContext);
	if (!context) throw new Error("useAccountsContext must be used within AccountsProvider");
	return context;
};
