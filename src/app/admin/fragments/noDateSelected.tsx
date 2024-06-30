import { Box, Typography } from '@mui/material';

export default function NoDateSelected() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				padding: '30px 20px',
				flex: 1,
			}}
		>
			<Typography variant="h5">
				Selecione a data que deseja visualizar
			</Typography>
		</Box>
	);
}
