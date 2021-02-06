import React from 'react'
import Link from 'next/link'

const AppFooter = () => (
	<header className="flex items-center justify-evenly w-full h-24">
		<nav>
			<Link href="/">
				<a>自分に関して</a>
			</Link>{' '}
			|{' '}
			<Link href="/about">
				<a>制作に関して</a>
			</Link>{' '}
			|{' '}
			<Link href="/users">
				<a>サイトマップ</a>
			</Link>{' '}
			| <a href="/api/users">お問い合わせ</a>
			<p className="flex items-center justify-evenly w-full">© 2021 by me, All Rights Resarved</p>
		</nav>
	</header>
)

export default AppFooter
