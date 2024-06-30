'use client';
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Signout() {
	const router = useRouter();
	useEffect(() => {
		const logout = async () => {
			await signOut({
				redirect: false,
			});

			router.push('/admin');
		};

		logout();
	}, []);

	return <>Redirecionando ...</>;
}
