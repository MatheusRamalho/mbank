import { ReactNode } from 'react'

interface SectionProps {
    id: string
    legend: string
    children?: ReactNode
    customClass?: string
    customClassContainer?: string
}

export function Section({
    id,
    legend,
    children,
    customClass,
    customClassContainer,
}: SectionProps) {
    return (
        <section id={id} className={`w-full min-h-screen ${customClass}`}>
            <h6 hidden> {legend} </h6>

            <div
                className={`container mx-auto overflow-hidden py-24 px-6 flex items-center justify-center flex-row ${customClassContainer}`}
            >
                {children}
            </div>
        </section>
    )
}
