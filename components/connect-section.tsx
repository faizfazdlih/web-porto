'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Music, Instagram, ArrowUpRight } from 'lucide-react'
import { FadeInScroll } from '@/components/fade-in'

const XIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className}
        fill="currentColor"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const socialLinks = [
    {
        name: 'GitHub',
        icon: Github,
        href: 'https://github.com/faizfazdlih'
    },
    {
        name: 'Twitter',
        icon: XIcon,
        href: 'https://x.com/wazieo'
    },
    {
        name: 'Spotify',
        icon: Music,
        href: 'https://open.spotify.com/user/lv7fo3klmk6jq3jaq3y6v53fv?si=00abe4f1e6444fd4'
    },
    {
        name: 'Instagram',
        icon: Instagram,
        href: 'https://instagram.com/faizfazdlih'
    }
]

export default function ConnectSection() {
    return (
        <section id="connect" className="py-20 overflow-hidden">
            <div className="relative">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mb-8">
                        <FadeInScroll delay={0.1}>
                            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
                        </FadeInScroll>
                        <FadeInScroll delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                Feel free to contact me at{' '}
                                <Link 
                                    href="mailto:faizfazdlih8@gmail.com"
                                    className="group text-muted-foreground font-medium hover:text-primary underline underline-offset-4 decoration-2 transition-colors inline-flex items-center gap-1"
                                >
                                    faizfazdlih8@gmail.com
                                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </p>
                        </FadeInScroll>
                    </div>

                    <FadeInScroll delay={0.3}>
                        <div className="flex flex-wrap gap-5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <Link 
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 text-base font-medium hover:text-primary transition-colors"
                                    >
                                        <Icon className="h-4 w-4 flex-shrink-0" />
                                        <span className="hover:underline underline-offset-4 decoration-2">
                                            {social.name}
                                        </span>
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                )
                            })}
                        </div>
                    </FadeInScroll>
                </div>
            </div>
        </section>
    )
}