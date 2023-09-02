"use client"
import axios from 'axios'
import useTranslation from 'next-translate/useTranslation'
import ImageItem from '../image_item'

export default function Overview({ data }: any) {
	return <div className="flex-[2] overflow-x-scroll">
	<div className="w-full table gap-2">
		<div className="flex flex-row items-start justify-start gap-2">
			{data.movies.map((item: any, i: number) => (
				<a key={`movie_${i}`} className="flex flex-col items-start justify-start gap-2">
					<div className="block w-[138px] h-[226px] mb-2">
						<ImageItem source={item.image} />
					</div>
					<div className="text-black dark:text-white font-300 text-sm">{item.title}</div>
					<div className="text-black/70 dark:text-white/70 text-xs">{item.release_date}</div>
				</a>
			))}
		</div>
	</div>
</div>
}