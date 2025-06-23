import { useAccountsContext } from "../../../context/hooks/useAccountsContext";

export const useWithdrawMoney = () => {
	const { accounts, setAccounts, setErrorByAccount } = useAccountsContext();

	const withdrawMoney = (accountId, amount) => {
		const account = accounts.find((account) => account.id === accountId);

		if (amount < 0) {
			setErrorByAccount("Can't withdraw negative amount");
			return;
		}

		if (account.isAccountLocked) {
			setErrorByAccount("Account is locked");
			return;
		}

		if (account.balance < amount) {
			setErrorByAccount("Not enough money");
			return;
		}

		const updatedAccounts = accounts.map((account) => {
			if (account.id === accountId) {
				return { ...account, balance: account.balance - amount };
			}
			return account;
		});

		setAccounts(updatedAccounts);
		setErrorByAccount(null);
	};

	return withdrawMoney;
};
