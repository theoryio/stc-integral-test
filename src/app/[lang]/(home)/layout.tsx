import React from 'react'
import Logo from '../(common)/logo'
import Navbar from './navbar';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col items-stretch justify-start gap-4 w-full min-h-screen py-4 px-6 bg-white dark:bg-background">
			<nav className="w-full flex flex-row items-center justify-between rounded-lg py-3 px-0 text-black md:text-white">
				<Logo className={"w-24 h-8 text-stc-color dark:text-white"} />
				<Navbar />
			</nav>
			<div className="flex flex-col items-stretch justify-start w-full">
				{children}
			</div>
			<div className="mt-24 text-center text-gray-500 text-xs tracking-wide">
			© {new Date().getFullYear()} Anas
			</div>
		</main>
	)
}

/*
			<nav className="w-full flex flex-row items-center justify-between rounded-lg py-3 px-6 bg-background/5 dark:bg-white/10 text-black md:text-white">

*/