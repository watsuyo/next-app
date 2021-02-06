import React from 'react'

type Props = {
	image: string
	width: string
}

const AppHeader = ({ image, width }: Props ) => (
	<img src={image} className={`${width} mx-auto`} />
)

export default AppHeader
