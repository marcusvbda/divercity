import {
	Box,
	Button,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { useState } from 'react';
import Swal from 'sweetalert2';
export default function ScheduleForm({ item, onSave, onCancel }: any) {
	const [form, setForm] = useState({
		status: item.available ? 'available' : 'unavailable',
		description: item?.schedule?.data?.description || '',
	});

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
				if (form.status === 'available') {
					await fetch(`/api/admin/schedules`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(item),
					});
				} else {
					await fetch(`/api/admin/schedules`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ ...item, ...form }),
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
						<InputLabel id="status">Status</InputLabel>
						<Select
							labelId="status"
							value={form.status}
							label="Status"
							onChange={(e) => setForm({ ...form, status: e.target.value })}
						>
							<MenuItem value="available">Disponível</MenuItem>
							<MenuItem value="unavailable">Indisponível</MenuItem>
						</Select>
					</FormControl>
					{form.status === 'unavailable' && (
						<FormControl fullWidth sx={{ marginTop: 2 }}>
							<Input
								aria-label="Descrição"
								multiline
								rows={6}
								value={form.description}
								onChange={(e) =>
									setForm({ ...form, description: e.target.value })
								}
							/>
						</FormControl>
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
