'use client';
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';

export default function Signout() {
	useEffect(() => {
		signOut({
			callbackUrl: '/admin',
		});
	}, []);

	return <>Redirecionando ...</>;
}
