'use client';
import { ptBR } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import DashboardCard from '@/components/theme/dashboardCard';
import { Box } from '@mui/material';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';

registerLocale('pt-BR', ptBR);

export default function AdminPage(): ReactNode {
	const [date, setDate] = useState(null);
	const [loading, setLoading] = useState(true);
	const [highlightDates, setHighlightDates] = useState(true);
	const [dates, setDates] = useState([]);

	const fetchDates = (year: any, month: any) => {
		setDate(null);
		setLoading(true);
		fetch(`/api/admin/schedules?year=${year}&month=${month}`)
			.then((res) => res.json())
			.then((data) => {
				const datesValue = data.days || [];
				setDates(datesValue);
				setHighlightDates(
					datesValue
						.filter((x: any) => !x.available)
						.map((x: any) => {
							const [year, month, day] = x.date.split('-').map(Number);
							return new Date(year, month - 1, day);
						}),
				);
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

	const focusedSchedule = useMemo(() => {
		if (!date) return null;
		return dates.find((x: any) => x.date === format(date, 'yyyy-MM-dd'));
	}, [date, dates]);

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
					highlightDates={highlightDates as any}
					onMonthChange={handleMonthChange}
					disabled={loading}
				/>
				<Box>{!focusedSchedule ? <></> : JSON.stringify(focusedSchedule)}</Box>
			</Box>
		</DashboardCard>
	);
}
