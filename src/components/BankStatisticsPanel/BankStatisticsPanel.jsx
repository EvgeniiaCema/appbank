import { useState } from "react";
import { useGetStats } from "./hooks/useGetStats.js";
import { useAccountsContext } from "../../context/AccountsContext";

import { Modal } from "../Modal/Modal.jsx";

export const BankStatisticsPanel = () => {
	const { accounts } = useAccountsContext();
	const { calculateStats, stats } = useGetStats(accounts);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const onCloseModal = () => {
		setIsModalOpen(false);
	};

	const showStatistic = () => {
		calculateStats();
		setIsModalOpen(true);
	};

	return (
		<div>
			<button onClick={showStatistic}>bank statistics</button>
			{isModalOpen && <Modal stats={stats} onClose={onCloseModal} />}
		</div>
	);
};
