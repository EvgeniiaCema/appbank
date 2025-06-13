export const useTransferMoney = ({ accounts, setAccounts, setErrorByAccount }) => {
	const transferMoney = ({ fromId, toId, amount }) => {
		const updatedAccounts = [...accounts];
		const foundAccountForTransfer = updatedAccounts.find((account) => account.id === fromId);
		const foundAccountForDepositMoney = updatedAccounts.find((account) => account.id === toId);

		if (!toId) {
			setErrorByAccount({ id: fromId, message: "id is missing" });
			return;
		}

		if (!foundAccountForTransfer || !foundAccountForDepositMoney) {
			setErrorByAccount({ id: fromId, message: "These accounts do not exist" });
			return;
		}

		if (foundAccountForTransfer.isAccountLocked) {
			setErrorByAccount({ id: fromId, message: "Account For Transfer Account is locked" });
			return;
		}

		if (foundAccountForDepositMoney.isAccountLocked) {
			setErrorByAccount({ id: fromId, message: "Account For Deposit Money Account is locked" });
			return;
		}

		if (foundAccountForTransfer.balance >= amount) {
			foundAccountForTransfer.balance -= amount;
			foundAccountForDepositMoney.balance += amount;
			setAccounts(updatedAccounts);
			setErrorByAccount({ id: null, message: "" });
		} else if (foundAccountForTransfer.balance < amount) {
			setErrorByAccount({ id: fromId, message: `not enough money, you balance ${foundAccountForTransfer.balance}` });
		}
	};

	return transferMoney;
};
