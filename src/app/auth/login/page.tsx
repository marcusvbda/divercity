'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') || '/admin';

	useEffect(() => {
		signIn('auth0', { callbackUrl });
	}, [callbackUrl]);

	return <>Redirecionando ...</>;
}
