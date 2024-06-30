'use client';
import { ptBR } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import DashboardCard from '@/components/theme/dashboardCard';
import { Box } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
registerLocale('pt-BR', ptBR);

export default function AdminPage(): ReactNode {
	const [date, setDate] = useState(null);
	const [loading, setLoading] = useState(true);

	const highlightDates = [
		new Date('2024-06-30'),
		new Date('2024-07-05'),
		new Date('2024-07-10'),
	];

	const fetchDates = (year: any, month: any) => {
		setDate(null);
		setLoading(true);
		fetch(`/api/admin/schedules?year=${year}&month=${month}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setLoading(false);
			});
	};

	const handleMonthChange = (date: any) => {
		fetchDates(date.getFullYear(), date.getMonth() + 1);
	};

	useEffect(() => {
		const currentDate = new Date();
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1;
		fetchDates(year, month);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<DashboardCard title="Agenda do salão de festas">
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
				}}
			>
				<DatePicker
					inline
					selected={date}
					locale="pt-BR"
					onChange={(date: any) => setDate(date)}
					highlightDates={highlightDates}
					onMonthChange={handleMonthChange}
					readOnly
					disabled={loading}
				/>
				<Box>{date ? (date as Date)?.toLocaleDateString('pt-BR') : ''}</Box>
			</Box>
		</DashboardCard>
	);
}
