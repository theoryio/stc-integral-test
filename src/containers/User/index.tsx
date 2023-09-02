"use client"
import React, { createContext, useState, useEffect, } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import localForage from 'localforage';

type ThemeMode = "dark" | "light"

interface UserContextInterface {
    toggleThemeMode: () => void;
    themeMode:ThemeMode
}

export const UserContext = createContext<UserContextInterface>({themeMode: "dark", toggleThemeMode: ()=>{}});

export function UserProvider(props: any) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    const [themeMode, setThemeMode] = useState<ThemeMode>("dark");

    useEffect(() => {
        (async () => {
            let themeMode: any = await localForage.getItem('stctv-theme-mode');
            //check system them if theme is not saved
            if(!themeMode) {
                let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setThemeMode(systemTheme ? "dark" : "light");
            } else {
                setThemeMode(themeMode)
            }
            setLoading(false);
        })();
    }, []);

    const toggleThemeMode = () => {
        let newTheme:ThemeMode = themeMode == "dark" ? "light" : "dark";
        setThemeMode(newTheme);
        localForage.setItem('stctv-theme-mode', newTheme);
    };

    return <UserContext.Provider
        value={{ toggleThemeMode, themeMode }}
    >
        {(!loading) ? <div className={`${themeMode}`}>
            {props.children}
        </div> : <div className="fixed bg-background flex items-center justify-center inset-0">
            <svg className="animate-spin h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>}
    </UserContext.Provider>

}
