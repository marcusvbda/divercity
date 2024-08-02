'use client';
import { ptBR } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import DashboardCard from '@/components/theme/dashboardCard';
import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import ScheduleForm from './fragments/scheduleForm';

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
		const formatedValue =
			typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');

		return dates.find((x: any) => x.date === formatedValue);
	}, [date, dates]);

	if (loading) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					padding: '30px 20px',
					flex: 1,
				}}
			>
				<Typography variant="h5">Aguarde ...</Typography>
			</Box>
		);
	}

	const formatMoney = (value: number, params: any = {}): string => {
		const currency = params.currency || 'BRL';
		try {
			const currencyMap = {
				BRL: 'pt-BR',
				USD: 'en-US',
			};

			const symbol = currency === 'USD' ? '$ ' : 'R$ ';

			if (params?.short) {
				if (value >= 1000000000) {
					return (
						symbol + (value / 1000000000).toFixed(1).replace('.0', '') + 'B'
					);
				} else if (value >= 1000000) {
					return symbol + (value / 1000000).toFixed(1).replace('.0', '') + 'M';
				} else if (value >= 100000) {
					return symbol + Math.floor(value / 1000) + 'K';
				} else if (value >= 1000) {
					return symbol + (value / 1000).toFixed(1).replace('.0', '') + 'K';
				} else {
					return new Intl.NumberFormat((currencyMap as any)[currency], {
						style: 'currency',
						currency,
					}).format(value);
				}
			}
			return new Intl.NumberFormat((currencyMap as any)[currency], {
				style: 'currency',
				currency,
			}).format(value);
		} catch (error) {
			return ' - ';
		}
	};

	return (
		<>
			{focusedSchedule && (
				<a
					href="#"
					onClick={(e: any) => [e.preventDefault(), setDate(null)]}
					style={{ fontSize: 18 }}
				>
					← Voltar
				</a>
			)}
			<DashboardCard
				title={
					!focusedSchedule
						? 'Agenda do salão de festas'
						: `${(focusedSchedule as any).dayOfWeek}, ${(focusedSchedule as any).formatedDate}`
				}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { sm: 'column', md: 'row' },
					}}
				>
					{!focusedSchedule && (
						<DatePicker
							inline
							selected={date}
							locale="pt-BR"
							onChange={(date: any) => setDate(date)}
							highlightDates={highlightDates as any}
							onMonthChange={handleMonthChange}
							disabled={loading}
						/>
					)}
					{!focusedSchedule ? (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								padding: '0 20px 30px',
								flex: 1,
							}}
						>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }}>
									<TableHead>
										<TableRow>
											<TableCell>Data</TableCell>
											<TableCell align="left">Contratante</TableCell>
											<TableCell align="right">Reserva</TableCell>
											<TableCell align="right">Contato</TableCell>
											<TableCell align="right"></TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{dates
											.filter((x: any) => x.schedule)
											.map((row: any) => (
												<TableRow
													key={row.schedule.id}
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}
												>
													<TableCell component="th" scope="row">
														<div
															style={{
																display: 'flex',
																flexDirection: 'column',
																alignItems: 'flex-start',
															}}
														>
															<strong>{row.formatedDate}</strong>
															<div>{row.dayOfWeek}</div>
														</div>
													</TableCell>
													<TableCell align="left">
														{row.schedule.data.name || 'Sem indentificação'}
													</TableCell>
													<TableCell align="right">
														<div
															style={{
																display: 'flex',
																flexDirection: 'column',
																alignItems: 'flex-end',
															}}
														>
															<strong>
																{formatMoney(row.schedule.data.enterPrice || 0)}
															</strong>
															<div>
																{row.schedule.data.enterPricePaid
																	? 'Pago'
																	: 'Pendente'}
															</div>
														</div>
													</TableCell>
													<TableCell align="right">
														<div
															style={{
																display: 'flex',
																flexDirection: 'column',
																alignItems: 'flex-end',
															}}
														>
															<strong>
																{formatMoney(row.schedule.data.price || 0)}
															</strong>
															<div>
																{row.schedule.data.pricePaid
																	? 'Pago'
																	: 'Pendente'}
															</div>
														</div>
													</TableCell>
													<TableCell align="right">
														<Button
															variant="contained"
															color="primary"
															type="button"
															onClick={() => setDate(row.date)}
														>
															Visualizar
														</Button>
													</TableCell>
												</TableRow>
											))}
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
					) : (
						<ScheduleForm
							item={focusedSchedule}
							onSave={() => handleMonthChange(date)}
							onCancel={() => setDate(null)}
						/>
					)}
				</Box>
			</DashboardCard>
		</>
	);
}
