'use client';
import { ptBR } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import DashboardCard from '@/components/theme/dashboardCard';
import {
	Box,
	Button,
	CircularProgress,
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

	const handleDateChange = (date: any) => {
		setDate(date);
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

	const formatMoney = (value: number, params: any = {}): string => {
		const currency = params.currency || 'BRL';
		try {
			const currencyMap = {
				BRL: 'pt-BR',
				USD: 'en-US',
			};
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
				<a href="#" onClick={(e: any) => [e.preventDefault(), setDate(null)]}>
					<Typography
						variant="h5"
						style={{ cursor: 'pointer', marginBottom: 10 }}
					>
						← Voltar
					</Typography>
				</a>
			)}
			<DashboardCard>
				<>
					<Typography
						variant="h2"
						sx={{ textAlign: 'center', marginBottom: 3 }}
					>
						{!focusedSchedule
							? 'Agenda do salão de festas'
							: `${(focusedSchedule as any).dayOfWeek}, ${(focusedSchedule as any).formatedDate}`}
					</Typography>
					{!focusedSchedule ? (
						<Box
							sx={{
								flex: 1,
								display: 'flex',
								flexDirection: 'column',
								gap: 1,
							}}
						>
							<Box
								sx={{
									padding: 1,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									border: '1px solid #eaeaea',
									flex: 1,
									...(loading && {
										pointerEvents: 'none',
										opacity: 0.2,
									}),
								}}
							>
								<DatePicker
									inline
									selected={date}
									locale="pt-BR"
									onChange={handleDateChange}
									highlightDates={highlightDates as any}
									onMonthChange={handleMonthChange}
									disabled={loading}
								/>
							</Box>
							{loading && (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										padding: '30px 20px',
										flex: 1,
									}}
								>
									<CircularProgress />
								</Box>
							)}
							{!loading && (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										flex: 1,
									}}
								>
									<Box
										sx={{ padding: 1, border: '1px solid #eaeaea', flex: 1 }}
									>
										<Box sx={{ overflow: 'auto' }}>
											<Box
												sx={{
													width: '100%',
													display: 'table',
													tableLayout: 'fixed',
												}}
											>
												{dates.filter((x: any) => x.schedule).length ? (
													<Table size="small">
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
																			'&:last-child td, &:last-child th': {
																				border: 0,
																			},
																		}}
																	>
																		<TableCell
																			component="th"
																			scope="row"
																			sx={{ borderBottom: '1px solid #eaeaea' }}
																		>
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
																		<TableCell
																			align="left"
																			sx={{ borderBottom: '1px solid #eaeaea' }}
																		>
																			{row.schedule.data.name ||
																				'Sem indentificação'}
																		</TableCell>
																		<TableCell
																			align="right"
																			sx={{ borderBottom: '1px solid #eaeaea' }}
																		>
																			<div
																				style={{
																					display: 'flex',
																					flexDirection: 'column',
																					alignItems: 'flex-end',
																				}}
																			>
																				<strong>
																					{formatMoney(
																						row.schedule.data.enterPrice || 0,
																					)}
																				</strong>
																				<div>
																					{row.schedule.data.enterPricePaid
																						? 'Pago'
																						: 'Pendente'}
																				</div>
																			</div>
																		</TableCell>
																		<TableCell
																			align="right"
																			sx={{ borderBottom: '1px solid #eaeaea' }}
																		>
																			<div
																				style={{
																					display: 'flex',
																					flexDirection: 'column',
																					alignItems: 'flex-end',
																				}}
																			>
																				<strong>
																					{formatMoney(
																						row.schedule.data.price || 0,
																					)}
																				</strong>
																				<div>
																					{row.schedule.data.pricePaid
																						? 'Pago'
																						: 'Pendente'}
																				</div>
																			</div>
																		</TableCell>
																		<TableCell
																			align="right"
																			sx={{ borderBottom: '1px solid #eaeaea' }}
																		>
																			<Button
																				size="small"
																				variant="contained"
																				color="primary"
																				type="button"
																				onClick={() => setDate(row.date)}
																			>
																				→
																			</Button>
																		</TableCell>
																	</TableRow>
																))}
														</TableBody>
													</Table>
												) : (
													<>Nenhum agendamento para este mês</>
												)}
											</Box>
										</Box>
									</Box>
								</Box>
							)}
						</Box>
					) : (
						<ScheduleForm
							item={focusedSchedule}
							onSave={() => handleMonthChange(date)}
							onCancel={() => setDate(null)}
						/>
					)}
				</>
			</DashboardCard>
		</>
	);
}
