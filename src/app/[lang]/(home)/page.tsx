import {  } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { redirect, useRouter } from 'next/navigation'

export default function Home() {
    const { t, lang } = useTranslation('common');
	redirect(`/en/movie/1/overview`)
	return <div className="text-primary">{t('page_title')}</div>
}