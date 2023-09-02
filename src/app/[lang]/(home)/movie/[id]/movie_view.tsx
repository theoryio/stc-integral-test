"use client"
import axios from 'axios'
import useTranslation from 'next-translate/useTranslation'

import { toast } from 'react-toastify'
import { useQuery } from 'react-query'
import { useEffect, useRef, useState } from 'react'
import ImageItem from './image_item'
import Overview from './panels/overview'
import Cast from './panels/cast'
import Link from 'next/link'
import Trailer from './panels/trailer'
import Skeleton from '@/app/[lang]/(common)/skeleton'

export default function MovieView({ params }: any) {
	const { t, lang } = useTranslation('common');

	const getMovie = async () => {
		let res = await axios.post(`/api/movie`, { id: params.id, lang: lang });
		if (!!res.data && res.data.success)
			return {
				...res.data.movie
			}
	};

	const { isLoading, data, error }: any = useQuery(`movie_${params.id}`, getMovie);

	if (isLoading || !data) {

		return <Skeleton lang={lang} />
	}

	const tabs: any = {
		'overview': {
			title: t('overview'),
			view: <Overview data={data} />
		},
		"cast": {
			title: t('cast'),
			view: <Cast data={data} />
		},
		"trailer": {
			title: t('trailer'),
			view: <Trailer data={data} />
		},
	};

	const activeTabKey = !!params.tab && tabs[params.tab] ? params.tab : "overview";
	const activeTab = tabs[activeTabKey]

	return <>
		<div className="w-full flex flex-col items-start justify-start gap-6">
			<div className="flex flex-row items-start justify-start gap-7 w-full mb-4">
				<div className="bg-gray-300 w-16 h-20 rounded-lg bg-cover bg-center border border-gray-400/20" style={{ backgroundImage: `url(${data.image})` }}>
				</div>
				<div className="flex flex-col items-start justify-start gap-2">
					<div className="text-stc-color dark:text-white text-2xl tracking-wider w-full font-[600]">{data.title}</div>
					<div className="text-black dark:text-white text tracking-wider w-full font-[500]">{data.genre}</div>
					<div className="flex flex-row items-start justify-start gap-2 md:hidden">
						{
							Object.keys(tabs).map((tab: any, i: number) => (
								<Link href={`/${lang}/movie/${params.id}/${tab}`} key={`tab_${i}`} className={`py-2 px-3 text-xs rounded-full bg-background/10 text-background dark:bg-white/10 dark:text-white tracking-wider font-[500] ${tab == activeTabKey ? "border border-background/30 dark:border-white/30" : "opacity-70"}`}>{tabs[tab].title}</Link>
							))
						}
					</div>
				</div>
				<div className="hidden md:flex flex-row items-start justify-start gap-2">
					{
						Object.keys(tabs).map((tab: any, i: number) => (
							<Link href={`/${lang}/movie/${params.id}/${tab}`} key={`tab_${i}`} className={`py-2 px-3 text-sm rounded-full bg-background/10 text-background dark:bg-white/10 dark:text-white tracking-wider font-[500] ${tab == activeTabKey ? "border border-background/30 dark:border-white/30" : "opacity-70"}`}>{tabs[tab].title}</Link>
						))
					}
				</div>
			</div>
			<div className="w-full flex flex-col md:flex-row items-stretch justify-start gap-20 md:gap-0">
				{activeTab.view}
				<div className={`flex-1 flex flex-col items-start justify-start gap-2 md:border-gray-600/5 ${lang == "ar" ? "md:border-r md:mr-4 md:pr-4" : "md:border-l md:ml-4 md:pl-4"}`}>
					<div className="tracking-wide text-black dark:text-white font-[600] mb-2">{t('about')}</div>
					<div className="text-background font-body tracking-wider text-sm leading-loose dark:text-white/70">{data.about}</div>
					<div className="text-background text-sm leading-loose tracking-wider dark:text-white/70">
						<span className="font-[600] text-black dark:text-white">{t('directors')}:</span>
						{data.directors}
					</div>
					<div className="text-background text-sm leading-loose tracking-wider dark:text-white/70">
						<span className="font-[600] text-black dark:text-white">{t('production_companies')}:</span>
						{data.production}
					</div>
					<div className="text-background text-sm leading-loose tracking-wider dark:text-white/70">
						<span className="font-[600] text-black dark:text-white">{t('based_on')}:</span>
						{data.based_on}
					</div>
					<div className="text-background text-sm leading-loose tracking-wider dark:text-white/70">
						<span className="font-[600] text-black dark:text-white">{t('release_date')}:</span>
						{data.release_date}
					</div>
				</div>
			</div>
		</div>
	</>
}