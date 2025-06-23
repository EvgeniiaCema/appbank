import { useAccountsContext } from "../../../context/hooks/useAccountsContext";

export const useTransferMoney = () => {
	const { accounts, setAccounts, setErrorByAccount } = useAccountsContext();

	const transferMoney = ({ fromId, toId, amount }) => {
		const foundAccountForTransfer = accounts.find((account) => account.id === fromId);
		const foundAccountForDepositMoney = accounts.find((account) => account.id === toId);

		if (!toId) {
			setErrorByAccount("recipient id is missing");
			return;
		}

		if (!foundAccountForTransfer || !foundAccountForDepositMoney) {
			setErrorByAccount("These accounts do not exist");
			return;
		}

		if (foundAccountForTransfer.isAccountLocked) {
			setErrorByAccount("Account For Transfer Account is locked");
			return;
		}

		if (foundAccountForDepositMoney.isAccountLocked) {
			setErrorByAccount("Account For Deposit Money Account is locked");
			return;
		}

		if (foundAccountForTransfer.balance < amount) {
			setErrorByAccount(`not enough money, you balance ${foundAccountForTransfer.balance}`);
		}

		const updatedAccounts = accounts.map((account) => {
			if (account.id === fromId) {
				return { ...account, balance: account.balance - amount };
			}

			if (account.id === toId) {
				return { ...account, balance: account.balance + amount };
			}

			return account;
		});
		setAccounts(updatedAccounts);
		setErrorByAccount(null);
	};

	return transferMoney;
};
