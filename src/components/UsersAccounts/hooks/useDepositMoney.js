import { useAccountsContext } from "../../../context/hooks/useAccountsContext";

export const useDepositMoney = () => {
	const { accounts, setAccounts, setErrorByAccount } = useAccountsContext();

	const depositMoney = (accountId, amount) => {
		if (amount < 0) {
			setErrorByAccount("Can't deposit negative amount");
			return;
		}

		const account = accounts.find((account) => account.id === accountId);

		if (account.isAccountLocked) {
			setErrorByAccount("Account is locked");
			return;
		}

		const updatedAccounts = accounts.map((account) =>
			account.id === accountId ? { ...account, balance: account.balance + Number(amount) } : account
		);

		setAccounts(updatedAccounts);
		setErrorByAccount(null);
	};

	return depositMoney;
};
