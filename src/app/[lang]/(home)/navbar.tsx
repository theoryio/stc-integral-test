"use client"
import { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { UserContext } from '@/containers/User'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();
    const { t, lang } = useTranslation('common');
    const user = useContext(UserContext);

    return <>
        <div className="flex flex-row items-center justify-start gap-2">
        <Link href={(""+pathname).replace(`/${lang}`, `/${lang == "en" ? `ar` : "en"}`)} className="bg-background/10 dark:bg-white/10 p-2 py-1 h-8 rounded-full text-sm text-background cursor-pointer dark:text-white">
            {t('other_language')}
        </Link>
        <a onClick={()=>{user.toggleThemeMode()}} className="bg-background/10 dark:bg-white/10 p-2 h-8 rounded-full text-background cursor-pointer dark:text-white">
            {user.themeMode == "dark" ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
        </a>
        </div>
    </>
}