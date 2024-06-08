import './_styles.scss';
import Link from 'next/link';
import AspectRatio from '../aspectRatio';
export default function SocialNetworks({ title }: any) {
	const facebook = process.env.NEXT_PUBLIC_FACEBOOK || '#';
	const instagram = process.env.NEXT_PUBLIC_INSTAGRAM || '#';

	return (
		<div className="social-network">
			{title ? <h3>{title}</h3> : <></>}
			<div className="items">
				<Link href={instagram} className="item" target="_blank">
					<AspectRatio src="/instagram.png" size={{ width: 40 }} />
				</Link>
				<Link href={facebook} className="item" target="_blank">
					<AspectRatio src="/facebook.jpeg" size={{ width: 40 }} />
				</Link>
			</div>
		</div>
	);
}
