import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-2xl font-semibold">Project Not Found</h2>
                <p className="text-muted-foreground max-w-md">
                    The project you're looking for doesn't exist or has been removed.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <Button asChild>
                        <Link href="/projects">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/">
                            Go Home
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}