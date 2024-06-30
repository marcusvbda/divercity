'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function Login({ searchParams }: any) {
	const { callbackUrl } = searchParams;

	useEffect(() => {
		signIn('auth0', { callbackUrl: callbackUrl || '/admin' });
	}, [callbackUrl]);

	return <>Redirecionando ...</>;
}
