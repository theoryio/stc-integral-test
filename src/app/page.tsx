import { useEffect, } from 'react'

import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import TransText from 'next-translate/TransText'
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'

export default function Preload() {
	redirect(`/en/movie/1/overview`)
	return <div></div>
}