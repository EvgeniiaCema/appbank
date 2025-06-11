import { useState } from "react";

export const useGetStats = (accounts) => {
	const [stats, setStats] = useState(null);

	const calculateStats = () => {
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

		setStats({
			balance,
			users,
			lockedUsers,
			usersWithPositiveBalance,
		});
	};

	return { calculateStats, stats };
};
