'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
	const [data, setData] = useState({});
	const router = useRouter();

	const handleSet = () => {
		(async () => {
			const res = await fetch('http://localhost:3000/api/test-path');
			if (res.ok) {
				document.querySelector('html')?.setAttribute('data-theme', 'dark');
			}
		})();
		router.push('/about');
	};

	const handleAuth = () => {
		(async () => {
			const res = await fetch('http://localhost:3000/api/test', {
				headers: {
					Authorization: 'ABC-XYZ'
				}
			});
			const dt = await res.json();
			setData(dt);
		})();
	};
	return (
		<main className="min-h-screen">
			<div className="flex gap-10 w-2/3 mt-40 mx-auto items-center justify-center">
				<p className="border border-gray-200 rounded text-justify p-3">
					When we Click this button it will call a api which sets cookies and returns json data.
				</p>
				<button className="btn btn-primary" onClick={handleSet}>
					Set cookies
				</button>
				<p className="border border-gray-200 rounded text-justify p-3">
				When we Click this button it will attaches authorization & send an api which reads the
					header and do some action.
				</p>
				<button className="btn btn-primary" onClick={handleAuth}>
					Send Req Auth Header
				</button>
			</div>
			
		</main>
	);
}
