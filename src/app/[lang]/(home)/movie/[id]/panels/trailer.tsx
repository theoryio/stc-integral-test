"use client"
import ReactPlayer from 'react-player'

export default function Trailer({ data }: any) {
	return <div className="flex-[2]">
		<div className="w-full">
			<ReactPlayer url={data.trailer} />
		</div>
	</div>
}