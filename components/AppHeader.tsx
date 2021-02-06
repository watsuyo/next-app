import React from 'react'
import Link from 'next/link'

const AppHeader = () => (
	<header className="flex items-center justify-evenly w-full h-24">
		<nav>
			<Link href="/">
				<a>Home</a>
			</Link>{' '}
			|{' '}
			<Link href="">
				<a>note</a>
			</Link>{' '}
		</nav>
	</header>
)

export default AppHeader
