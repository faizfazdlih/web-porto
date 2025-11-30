'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getFeaturedProjects } from '@/lib/projects-data'
import { FadeInScroll, FadeInStaggerScroll, FadeInStaggerItem } from '@/components/fade-in'

export default function ProjectSection() {
    const projects = getFeaturedProjects(4)
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

    useEffect(() => {
        const initialIndices: { [key: number]: number } = {}
        projects.forEach(project => {
            initialIndices[project.id] = 0
        })
        setCurrentImageIndex(initialIndices)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => {
                const newIndices = { ...prev }
                projects.forEach(project => {
                    if (project.images && project.images.length > 1) {
                        const currentIdx = prev[project.id] || 0
                        newIndices[project.id] = (currentIdx + 1) % project.images.length
                    }
                })
                return newIndices
            })
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section id="projects" className="py-20 overflow-hidden">
            <div className="relative">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mb-12">
                        <FadeInScroll delay={0.1}>
                            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                        </FadeInScroll>
                        <FadeInScroll delay={0.2}>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                Here are some of my recent projects that showcase my experience
                            </p>
                        </FadeInScroll>
                    </div>

                    <FadeInStaggerScroll 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8" 
                        staggerDelay={0.1}
                        threshold={0.1}
                    >
                        {projects.map((project) => {
                            const currentIndex = currentImageIndex[project.id] || 0
                            const currentImage = project.images && project.images.length > 0 
                                ? project.images[currentIndex] 
                                : project.image

                            return (
                                <FadeInStaggerItem key={project.id}>
                                    <div className="group h-full">
                                        <Link href={`/projects/${project.slug}`}>
                                            <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4 bg-muted cursor-pointer">
                                                <Image
                                                    key={currentIndex}
                                                    src={currentImage}
                                                    alt={`${project.title} - Image ${currentIndex + 1}`}
                                                    fill
                                                    className="object-fill transition-all duration-500 group-hover:scale-105"
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

                                        <p className="text-base text-muted-foreground line-clamp-2 mb-3">
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
                            )
                        })}
                    </FadeInStaggerScroll>

                    <FadeInScroll delay={0.3} className="mt-12 text-center">
                        <Link 
                            href="/projects"
                            className="inline-flex items-center px-6 py-2 text-sm rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            View All Projects
                            <ArrowUpRight className="ml-1.5 h-4 w-4" />
                        </Link>
                    </FadeInScroll>
                </div>
            </div>
        </section>
    )
}