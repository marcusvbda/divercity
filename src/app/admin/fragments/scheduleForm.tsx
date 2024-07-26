import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import Swal from 'sweetalert2';
export default function ScheduleForm({ item, onSave, onCancel, date }: any) {
	// console.log(date);
	const [form, setForm] = useState({
		...date,
		status: item.available ? 'available' : 'unavailable',
		description: item?.schedule?.data?.description || '',
		name: item?.schedule?.data?.name || '',
		cpf: item?.schedule?.data?.cpf || '',
		rg: item?.schedule?.data?.rg || '',
		street: item?.schedule?.data?.street || '',
		number: item?.schedule?.data?.number || '',
		complement: item?.schedule?.data?.complement || '',
		neighborhood: item?.schedule?.data?.neighborhood || '',
		city: item?.schedule?.data?.city || '',
		phone: item?.schedule?.data?.phone || '',
		secondaryPhone: item?.schedule?.data?.secondaryPhone || '',
		email: item?.schedule?.data?.email || '',
		time: item?.schedule?.data?.time || '',
		qtyChildren: item?.schedule?.data?.qtyChildren || 0,
		qty: item?.schedule?.data?.qty || 0,
		price: item?.schedule?.data?.price || 0,
		pricePaid: item?.schedule?.data?.pricePaid || false,
		enterPrice: item?.schedule?.data?.enterPrice || 0,
		enterPricePaid: item?.schedule?.data?.enterPricePaid || false,
		guests: item?.schedule?.data?.guests || '',
		drinks: item?.schedule?.data?.drinks || '',
	});

	const formatPhone = (e: any) => {
		try {
			const isInput = e?.target.value ? true : false;
			let value = (isInput ? e.target.value : e) || '';
			value = value.replace(/\D/g, '');
			if (value.length > 11) {
				value = value.substring(0, 11);
			}
			if (value.length > 2 && value.length < 7) {
				value = value.replace(/^(\d{2})(\d)/, '($1) $2');
			} else if (value.length >= 7 && value.length < 11) {
				value = value.replace(/(\d{2})(\d{4})(\d)/, '($1) $2-$3');
			} else if (value.length == 11) {
				value = value.replace(/(\d{2})(\d{5})(\d)/, '($1) $2-$3');
			}
			if (isInput) {
				e.target.value = value;
			}
			return value;
		} catch (error) {
			e.target.value = '';
		}
	};

	const formatCPF = (e: any) => {
		try {
			const isInput = e?.target.value ? true : false;
			let value = (isInput ? e.target.value : e) || '';

			if (value.length > 14) {
				value = value.substring(0, 14);
			}

			value = value.replace(/\D/g, '');
			if (value.length > 3) {
				value = value.replace(/^(\d{3})(\d)/, '$1.$2');
			}
			if (value.length > 6) {
				value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
			}
			if (value.length > 9) {
				value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
			}

			if (isInput) {
				e.target.value = value;
			}
			return value;
		} catch (error) {
			return '';
		}
	};

	const formatRG = (e: any) => {
		try {
			const isInput = e?.target.value ? true : false;
			let value = (isInput ? e.target.value : e) || '';

			if (value.length > 12) {
				value = value.substring(0, 12);
			}

			value = value.replace(/\D/g, '');
			if (value.length > 2) {
				value = value.replace(/^(\d{2})(\d)/, '$1.$2');
			}
			if (value.length > 6) {
				value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
			}
			if (value.length > 9) {
				value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
			}

			if (isInput) {
				e.target.value = value;
			}
			return value;
		} catch (error) {
			return '';
		}
	};

	const submit = () => {
		Swal.fire({
			title: 'Confirmação!',
			text: 'Deseja salvar alterações',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sim',
			cancelButtonText: 'Não',
		}).then(async (result) => {
			if (result.isConfirmed) {
				await fetch(`/api/admin/schedules`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(item),
				});
				if (form.status !== 'available') {
					await fetch(`/api/admin/schedules`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(form),
					});
				}
				onSave();
				Swal.fire('Salvo!', 'As alterações foram salvas', 'success');
			}
		});
	};

	return (
		<Box
			sx={{
				display: 'flex',
				gap: 2,
				flex: 1,
				flexDirection: 'column',
				paddingTop: {
					sm: 4,
					md: 0,
				},
			}}
		>
			<Box sx={{ display: 'flex', gap: 4, flex: 1 }}>
				<Box sx={{ flex: 1, flexDirection: 'column' }}>
					<FormControl fullWidth>
						<InputLabel id="status">Status da data</InputLabel>
						<Select
							labelId="status"
							value={form.status}
							label="Status"
							onChange={(e) => setForm({ ...form, status: e.target.value })}
						>
							<MenuItem value="available">Disponível</MenuItem>
							<MenuItem value="unavailable">Indisponível / Reservada</MenuItem>
						</Select>
					</FormControl>
					{form.status === 'unavailable' && (
						<>
							<Typography variant="h5" style={{ marginTop: 30 }}>
								Dados pessoais
							</Typography>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.name}
									onChange={(e) => setForm({ ...form, name: e.target.value })}
									label="Nome"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.cpf}
									onChange={(e) => setForm({ ...form, cpf: formatCPF(e) })}
									label="CPF"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.rg}
									onChange={(e) => setForm({ ...form, rg: formatRG(e) })}
									label="RG"
									variant="outlined"
								/>
							</FormControl>

							<Typography variant="h5" style={{ marginTop: 30 }}>
								Endereço
							</Typography>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.street}
									onChange={(e) => setForm({ ...form, street: e.target.value })}
									label="Logradouro"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.number}
									onChange={(e) => setForm({ ...form, number: e.target.value })}
									label="Número"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.neighborhood}
									onChange={(e) =>
										setForm({ ...form, neighborhood: e.target.value })
									}
									label="Bairro"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.complement}
									onChange={(e) =>
										setForm({ ...form, complement: e.target.value })
									}
									label="Complemento"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.city}
									onChange={(e) => setForm({ ...form, city: e.target.value })}
									label="Cidade"
									variant="outlined"
								/>
							</FormControl>

							<Typography variant="h5" style={{ marginTop: 30 }}>
								Contato
							</Typography>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.phone}
									onChange={(e) => setForm({ ...form, phone: formatPhone(e) })}
									label="Telefone principal"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.secondaryPhone}
									onChange={(e) =>
										setForm({ ...form, secondaryPhone: formatPhone(e) })
									}
									label="Telefone para recados"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.email}
									onChange={(e) => setForm({ ...form, email: e.target.value })}
									label="Email"
									variant="outlined"
								/>
							</FormControl>

							<Typography variant="h5" style={{ marginTop: 30 }}>
								Evento
							</Typography>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={date.date}
									label="Data"
									type="date"
									disabled
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.time}
									onChange={(e) => setForm({ ...form, time: e.target.value })}
									label="Horário"
									type="time"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.qty}
									onChange={(e) => setForm({ ...form, qty: e.target.value })}
									label="Quantidade total de pessoas"
									type="number"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									value={form.qtyChildren}
									onChange={(e) =>
										setForm({ ...form, qtyChildren: e.target.value })
									}
									label="Quantidade de crianças"
									type="number"
									variant="outlined"
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									label="Lista de convidados"
									multiline
									rows={6}
									variant="outlined"
									value={form.guests}
									onChange={(e) => setForm({ ...form, guests: e.target.value })}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									label="Lista de bebidas"
									multiline
									rows={6}
									variant="outlined"
									value={form.drinks}
									onChange={(e) => setForm({ ...form, drinks: e.target.value })}
								/>
							</FormControl>

							<Typography variant="h5" style={{ marginTop: 30 }}>
								Pagamento
							</Typography>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									gap: 10,
								}}
							>
								<FormControl fullWidth sx={{ marginTop: 2 }}>
									<TextField
										label="Valor do contrato"
										value={form.price}
										onChange={(e) =>
											setForm({ ...form, price: e.target.value })
										}
										variant="outlined"
										type="number"
									/>
								</FormControl>
								<FormControl fullWidth sx={{ marginTop: 2 }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={form.pricePaid}
												onChange={(e) =>
													setForm({ ...form, pricePaid: e.target.checked })
												}
											/>
										}
										label="Valor pago ?"
									/>
								</FormControl>
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									gap: 10,
								}}
							>
								<FormControl fullWidth sx={{ marginTop: 2 }}>
									<TextField
										label="Valor reserva"
										value={form.enterPrice}
										onChange={(e) =>
											setForm({ ...form, enterPrice: e.target.value })
										}
										variant="outlined"
										type="number"
									/>
								</FormControl>
								<FormControl fullWidth sx={{ marginTop: 2 }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={form.enterPricePaid}
												onChange={(e) =>
													setForm({ ...form, enterPricePaid: e.target.checked })
												}
											/>
										}
										label="Valor pago ?"
									/>
								</FormControl>
							</div>
							<Typography variant="h5" style={{ marginTop: 30 }}>
								Informações adicionais
							</Typography>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									label="Descrição"
									multiline
									rows={6}
									variant="outlined"
									value={form.description}
									onChange={(e) =>
										setForm({ ...form, description: e.target.value })
									}
								/>
							</FormControl>
						</>
					)}
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							paddingTop: 2,
							gap: 2,
						}}
					>
						<Button
							variant="outlined"
							color="error"
							type="button"
							onClick={onCancel}
						>
							Voltar
						</Button>
						<Button
							variant="contained"
							color="primary"
							type="button"
							onClick={submit}
						>
							Salvar alterações
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
