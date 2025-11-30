'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterSection from "@/components/footer";
import { ArrowUpRight } from 'lucide-react'
import { getAllProjects } from '@/lib/projects-data'
import { HeroHeader } from '@/components/header'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/fade-in'

export default function ProjectsPage() {
    const projects = getAllProjects()

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden min-h-screen">
                <div className="relative py-24 pt-32">
                    <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-12">
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl font-bold mb-4">All Projects</h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    Explore all of my projects and see what I've been working on.
                                </p>
                            </FadeIn>
                        </div>

                        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                            {projects.map((project) => (
                                <FadeInStaggerItem key={project.id}>
                                    <div className="group h-full">
                                        <Link href={`/projects/${project.slug}`}>
                                            <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4 bg-muted cursor-pointer">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-fill transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                        </Link>

                                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                                            <Link href={`/projects/${project.slug}`}>
                                                <h3 className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer">
                                                    {project.title}
                                                </h3>
                                            </Link>
                                        </div>

                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                            {project.description}
                                        </p>

                                        <div className="flex gap-4 text-sm font-medium">
                                            <Link 
                                                href={`/projects/${project.slug}`} 
                                                className="inline-flex items-center hover:underline underline-offset-4 decoration-2 transition-all"
                                            >
                                                View Details
                                                <ArrowUpRight className="ml-1 h-4 w-4" />
                                            </Link>
                                            {project.githubUrl && (
                                                <Link 
                                                    href={project.githubUrl || '#'} 
                                                    target="_blank"
                                                    className="inline-flex items-center hover:underline underline-offset-4 decoration-2 transition-all"
                                                >
                                                    Code
                                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </FadeInStaggerItem>
                            ))}
                        </FadeInStagger>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}