export const useLogStats = ({ accounts }) => {
	const logStats = () => {
		const balance = accounts.reduce((accum, account) => {
			accum += account.balance;
			return accum;
		}, 0);

		const users = accounts.length;

		let lockedUsers = 0;
		for (const account of accounts) {
			if (account.isAccountLocked) {
				lockedUsers += 1;
			}
		}

		let usersWithPositiveBalance = 0;
		for (const account of accounts) {
			if (account.balance > 0) {
				usersWithPositiveBalance += 1;
			}
		}

		return {
			balance,
			users,
			lockedUsers,
			usersWithPositiveBalance,
		};
	};

	return logStats;
};
