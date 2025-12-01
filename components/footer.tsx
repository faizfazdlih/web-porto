'use client'

import { FadeInScroll } from '@/components/fade-in'

export default function FooterSection() {
    return (
        <footer className="border-b bg-white dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <FadeInScroll delay={0.1}>
                        <span className="text-muted-foreground order-last block text-center font-normal text-sm md:order-first">© {new Date().getFullYear()} Faiz Fazdlih</span>
                    </FadeInScroll>
                </div>
            </div>
        </footer>
    )
}