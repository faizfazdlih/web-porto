'use client'

import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterSection from '@/components/footer'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ExternalLink, Github, Check, ArrowLeft } from 'lucide-react'
import { getProjectBySlug, getAllProjects } from '@/lib/projects-data'
import { HeroHeader } from '@/components/header'
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/fade-in'

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string
    }>
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { slug } = use(params)
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden min-h-screen">
                <div className="relative py-24 pt-32">
                    <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                    <div className="mx-auto max-w-5xl px-6">
                        <FadeIn delay={0.05}>
                            <Breadcrumb className="mb-8">
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/">Home</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/projects">Projects</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{project.title}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </FadeIn>

                        <div className="mb-12">
                            <FadeIn delay={0.1}>
                                <div className="flex items-start justify-between mb-4">
                                    <h1 className="text-5xl font-bold">{project.title}</h1>
                                    <span className="text-lg text-muted-foreground">{project.year}</span>
                                </div>
                            </FadeIn>
                            
                            <FadeIn delay={0.2}>
                                <p className="text-l text-muted-foreground mb-6">
                                    {project.description}
                                </p>
                            </FadeIn>

                            {(project.liveUrl || project.githubUrl) && (
                                <FadeIn delay={0.3}>
                                    <div className="flex gap-4 mb-8">
                                        {project.liveUrl && (
                                            <Button asChild>
                                                <Link href={project.liveUrl} target="_blank">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Live Demo
                                                </Link>
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button variant="outline" asChild>
                                                <Link href={project.githubUrl} target="_blank">
                                                    <Github className="mr-2 h-4 w-4" />
                                                    View Code
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </FadeIn>
                            )}

                            <FadeIn delay={0.4}>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <Badge key={index} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.5}>
                            <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-12 bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                            <div className="lg:col-span-2 space-y-8">
                                <FadeIn delay={0.6}>
                                    <div>
                                        <h2 className="text-3xl font-bold mb-4">Overview</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.fullDescription}
                                        </p>
                                    </div>
                                </FadeIn>

                                {project.images && project.images.length > 1 && (
                                    <FadeIn delay={0.8}>
                                        <div>
                                            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                                            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
                                                {project.images.slice(1).map((image, index) => (
                                                    <FadeInStaggerItem key={index}>
                                                        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-muted">
                                                            <Image
                                                                src={image}
                                                                alt={`${project.title} screenshot ${index + 2}`}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </FadeInStaggerItem>
                                                ))}
                                            </FadeInStagger>
                                        </div>
                                    </FadeIn>
                                )}
                            </div>

                            <div className="lg:col-span-1">
                                <FadeIn delay={0.6}>
                                    <div className="sticky top-24">
                                        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                                        <FadeInStagger staggerDelay={0.05}>
                                            <div className="space-y-3">
                                                {project.technologies.map((tech, index) => (
                                                    <FadeInStaggerItem key={index}>
                                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                                                            <span className="text-sm">{tech}</span>
                                                        </div>
                                                    </FadeInStaggerItem>
                                                ))}
                                            </div>
                                        </FadeInStagger>

                                        {(project.liveUrl || project.githubUrl) && (
                                            <div className="mt-8 p-4 rounded-lg border">
                                                <h3 className="font-semibold mb-3">Project Links</h3>
                                                <div className="space-y-2">
                                                    {project.liveUrl && (
                                                        <Button variant="outline" className="w-full justify-start" asChild>
                                                            <Link href={project.liveUrl} target="_blank">
                                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                                Live Demo
                                                            </Link>
                                                        </Button>
                                                    )}
                                                    {project.githubUrl && (
                                                        <Button variant="outline" className="w-full justify-start" asChild>
                                                            <Link href={project.githubUrl} target="_blank">
                                                                <Github className="mr-2 h-4 w-4" />
                                                                Source Code
                                                            </Link>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        <FadeIn delay={0.9}>
                            <div className="border-t pt-7">
                                <h2 className="text-2xl font-bold mb-6">More Projects</h2>
                                <div className="flex gap-4">
                                    <Button variant="outline" asChild>
                                        <Link href="/projects">
                                            <ArrowLeft className="mr-1 h-4 w-4" />
                                            View All Projects
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    )
}