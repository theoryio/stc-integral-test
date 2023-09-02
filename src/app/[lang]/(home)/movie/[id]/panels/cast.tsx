"use client"
import axios from 'axios'
import useTranslation from 'next-translate/useTranslation'
import ImageItem from '../image_item'

export default function Cast({ data }: any) {
	return <div className="flex-[2]">
		<div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-8 md:gap-x-2 md:gap-y-4 animate__animated animate__fadeInUp">
			{data.cast.map((item: any, i: number) => (
				<a key={`cast_${i}`} className="flex flex-col items-center justify-start gap-2">
					<div className="bg-gray-300 w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}}>
					</div>
					<div className="text-black dark:text-white font-300 text-sm text-center">{item.name}</div>
					<div className="text-black/70 dark:text-white/70 text-xs text-center">{item.character}</div>
				</a>
			))}
		</div>
	</div>
}