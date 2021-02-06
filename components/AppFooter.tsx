import React from 'react'

const AppFooter = () => (
	<header className="flex items-center justify-evenly w-full h-24">
		<nav>
			<div className="mb-4">
				<div className="flex items-center justify-evenly w-full">
					<p>お問い合わせ</p>
				</div>
				<div className="flex items-center justify-evenly w-full">
					<a className="text-sm" href="mailto:hoge@hoge.com">hoge@hoge.com</a>
				</div>
			</div>
			<p className="flex items-center justify-evenly w-full text-sm">© 2021 by me, All Rights Resarved</p>
		</nav>
	</header>
)

export default AppFooter
