import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import TypingText from '@/components/ui/typing-text';
import DecryptedText from '@/components/ui/decrypted-text';


export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="flex flex-col gap-6 sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 max-w-1xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                                    Hi there, I'm Faiz Fazdlih
                                </TextEffect>
                                
                                <div className="max-w-2xl animate-fade-in-blur" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                                    <DecryptedText 
                                        text="Informatics Engineering Major | Currently enrolled in the 5th semester at the National Institute of Technology."
                                        speed={60}
                                        maxIterations={15}
                                        sequential={false}
                                        className="text-lg font-light leading-relaxed text-muted-foreground"
                                        encryptedClassName="text-lg font-light leading-relaxed text-muted-foreground"
                                        animateOn="hover"
                                    />
                                </div>

                                <div className="max-w-2xl animate-fade-in-blur" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                                    <TypingText 
                                        text={["Web Developer", "Mobile Developer", "I love Horror Movie, Gaming, and Tech"]}
                                        typingSpeed={75}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        className="text-4xl font-medium"
                                        cursorClassName="h-12"
                                        cursorCharacter="_"
                                        variableSpeed={{ min: 50, max: 120 }}
                                    />
                                </div>

                                <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] animate-fade-in-blur" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                                    <Image
                                        src="/soyoung.jpg"
                                        alt="Hero image"
                                        width={1200}
                                        height={600}
                                        className="rounded-lg shadow-lg"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}