"use client"
import axios from 'axios'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import { toast } from 'react-toastify'
import { useQuery } from 'react-query'
import { useEffect, useRef, useState } from 'react'

export default function ImageItem({ source }: any) {
    const [loading, setLoading] = useState(true);
    return <div className="overflow-hidden rounded-lg relative">
        {loading && <div className="absolute w-full h-full z-10 inset-0 bg-skeleton-gradient bg-[200%] animate-shine" style={{ backgroundSize: "200% 200%", backgroundPositionX: "200%" }}></div>}
        <Image
            src={source}
            alt="Movie Image"
            width="138"
            height="226"
            style={{ visibility: loading ? "hidden" : "visible", width: 138, height: 226 }}
            onLoad={() => {
                setLoading(false);
            }}
        />
    </div>
}