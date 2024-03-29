import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Module 13 Assignment',
	description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="w-10/12 mx-auto">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
