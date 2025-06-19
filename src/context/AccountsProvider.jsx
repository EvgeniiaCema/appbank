import { useState } from "react";
import { AccountsContext } from "./AccountsContext";
import { MOCK_USERS_DATA } from "../shared/constants/users.data";

export const AccountsProvider = ({ children }) => {
	const [accounts, setAccounts] = useState(MOCK_USERS_DATA);
	const [errorByAccount, setErrorByAccount] = useState("");

	return <AccountsContext.Provider value={{ accounts, setAccounts, errorByAccount, setErrorByAccount }}>{children}</AccountsContext.Provider>;
};
