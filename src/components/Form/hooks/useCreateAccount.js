import { useAccountsContext } from "../../../context/hooks/useAccountsContext";

export const useCreateAccount = () => {
	const { accounts, setAccounts } = useAccountsContext();
	const createAnAccount = (name, surname) => {
		const newAccount = {
			id: Math.random(),
			name: name,
			surname: surname,
			balance: 0,
			isAccountLocked: false,
		};

		const isAccountExists = accounts.some((account) => account.id === newAccount.id);

		if (!isAccountExists) {
			setAccounts((prev) => [newAccount, ...prev]);
		}
	};

	return createAnAccount;
};
