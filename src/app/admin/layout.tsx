'use client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { baselightTheme } from './utils/theme/DefaultColors';
import { useState } from 'react';
import Sidebar from '@/components/theme/sidebar';
import Header from '@/components/theme/header';
import { Box, Container } from '@mui/material';
import './_styles.scss';

const MainWrapper = styled('div')(() => ({
	display: 'flex',
	minHeight: '100vh',
	width: '100%',
}));

const PageWrapper = styled('div')(() => ({
	display: 'flex',
	flexGrow: 1,
	paddingBottom: '60px',
	flexDirection: 'column',
	zIndex: 1,
	backgroundColor: 'transparent',
}));

export default function AdminLayout({ children }: any) {
	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	return (
		<SessionProvider>
			<ThemeProvider theme={baselightTheme}>
				<CssBaseline />
				<MainWrapper className="mainwrapper">
					<Sidebar
						isSidebarOpen={true}
						isMobileSidebarOpen={isMobileSidebarOpen}
						onSidebarClose={() => setMobileSidebarOpen(false)}
					/>
					<PageWrapper className="page-wrapper">
						<Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
						<Container sx={{ paddingTop: '20px', maxWidth: '1200px' }}>
							<Box
								sx={{ minHeight: 'calc(100vh - 170px)' }}
								className="admin-template"
							>
								{children}
							</Box>
						</Container>
					</PageWrapper>
				</MainWrapper>
			</ThemeProvider>
		</SessionProvider>
	);
}
