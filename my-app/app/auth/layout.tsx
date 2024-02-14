"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import "./style.css"
import {useState} from "react";

const navLink = [
    {name: "Register", href: "/auth/register"},
    {name: "Login", href: "/auth/login"},
    {name: "Forget Password", href: "/auth/forget-password"},
]
export default function AuthLayout({
                                       children,
                                   }: {
                                       children: React.ReactNode
                                   }
) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return (
        <div>
            <input className="p-6" value={input} onChange={e => setInput(e.target.value)}/>
            <h3 className="p-10">{input}</h3>

            {
                navLink.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (

                            <Link key={link.name} href={link.href}
                                  className={isActive ? "font-bold mr-4" : "font-blue-500 mr-4"}>
                                {link.name}
                            </Link>


                    )
                })
            }
            {children}
        </div>
    )
}