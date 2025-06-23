import { useContext } from "react";
import { AccountsContext } from "../AccountsContext";

export const useAccountsContext = () => {
	const context = useContext(AccountsContext);
	if (!context) throw new Error("useAccountsContext must be used within AccountsProvider");
	return context;
};
