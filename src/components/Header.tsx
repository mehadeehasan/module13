'use client';


import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function Header() {
	const [theme, setTheme] = useState('light');

	const handleToggle = async (e: any) => {
		if (e.target.checked) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	// set theme state in localstorage on mount & also update localstorage on state change
	useEffect(() => {
		const localTheme = theme;
		// add custom data-theme attribute to html tag required to update theme using DaisyUI
		document.querySelector('html')?.setAttribute('data-theme', localTheme!);
	}, [theme]);
	return (
		<>
			<header className="relative">
				<nav
					className="flex-no-wrap relative flex w-full items-center justify-between light:bg-neutral-100  dark:text-white py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
					data-te-navbar-ref
				>
						<div className="flex w-full flex-wrap items-center justify-between px-3">
							<button
								className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
								type="button"
								data-te-collapse-init
								data-te-target="#navbarSupportedContent1"
								aria-controls="navbarSupportedContent1"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="[&>svg]:w-7">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-7 w-7"
									>
										<path
											fillRule="evenodd"
											d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
							</button>

							<div
								className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
								id="navbarSupportedContent1"
								data-te-collapse-item
							>
								<ul
									className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
									data-te-navbar-nav-ref
								>
									<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
										<Link
											className="text-xl text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
											href="/"
											data-te-nav-link-ref
										>
											Home
										</Link>
									</li>
									<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
										<Link
											className="text-xl text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
											href="/about"
											data-te-nav-link-ref
										>
											About us
										</Link>
									</li>
								</ul>
							</div>

							<div className="relative flex items-center">
								<div className="flex-none">
									{/* Toggle button here */}
									<button className="btn btn-square btn-ghost">
										<label className="swap swap-rotate w-12 h-12">
											<input
												type="checkbox"
												onChange={handleToggle}
												// show toggle image based on localstorage theme
												checked={theme === 'light' ? false : true}
											/>
											{/* light theme sun image */}
											<MdOutlineLightMode alt="light" className="w-5 h-5 swap-on" />
											{/* dark theme moon image */}
											<MdOutlineDarkMode alt="dark" className="w-5 h-5 swap-off" />
										</label>
									</button>
								</div>
								{/* <!-- Container with two dropdown menus --> */}
								<div className="relative" data-te-dropdown-ref>
									{/* <!-- First dropdown trigger --> */}
									<a
										className="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
										href="#"
										id="dropdownMenuButton1"
										role="button"
										data-te-dropdown-toggle-ref
										aria-expanded="false"
									>
										{/* <!-- Dropdown trigger icon --> */}
										<span className="[&>svg]:w-5">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
													clipRule="evenodd"
												/>
											</svg>
										</span>
										{/* <!-- Notification counter --> */}
										<span className="absolute -mt-2.5 ml-2 rounded-[0.37rem] bg-danger px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-white">
											1
										</span>
									</a>
									{/* <!-- First dropdown menu --> */}
									
								</div>

								
							</div>
					</div>
				</nav>
			</header>
			{/* <!--Main Navigation--> */}
		</>
	);
}
