export const useDeleteAccount = ({ accounts, setAccounts, setErrorByAccount }) => {
	const deleteAccount = (accountId) => {
		const updatedAccounts = [...accounts];

		const index = updatedAccounts.findIndex((account) => account.id === accountId);

		if (index === -1) {
			setErrorByAccount({ id: accountId, message: "index isn`t find" });
			return;
		}

		if (updatedAccounts[index].balance > 0) {
			setErrorByAccount({ id: accountId, message: `Account cannot be deleted. Balance: ${updatedAccounts[index].balance}` });
			return;
		}

		if (updatedAccounts[index].isAccountLocked) {
			setErrorByAccount({ id: accountId, message: "Account cannot be deleted, it`s locked" });
			return;
		}

		updatedAccounts.splice(index, 1);
		setAccounts(updatedAccounts);
		setErrorByAccount({ id: null, message: "" });
	};

	return deleteAccount;
};
