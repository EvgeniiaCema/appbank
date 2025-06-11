import { useState } from "react";
import { useGetStats } from "./hooks/useGetStats.js";

import { Modal } from "../Modal/Modal.jsx";

export const BankStatisticsPanel = ({ accounts }) => {
	const { calculateStats, stats } = useGetStats(accounts);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const showStatistic = () => {
		calculateStats();
		setIsModalOpen(true);
	};

	return (
		<div>
			<button onClick={showStatistic}>bank statistics</button>
			{isModalOpen && <Modal stats={stats} onClose={() => setIsModalOpen(false)} />}
		</div>
	);
};
