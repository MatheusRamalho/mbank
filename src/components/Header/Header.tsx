interface HeaderProps {
    caption: string
    title: string
    description?: string
}

export function Header({ caption, title, description }: HeaderProps) {
    return (
        <>
            <h5 className="my-4 font-bold uppercase bg-primary-gradient bg-clip-text text-gradient">
                {caption}
            </h5>

            <h2 className="mb-2 font-bold text-5xl leading-[110%] text-gray-950">
                {title}
            </h2>

            {description && (
                <p className="my-4 text-gray-800 text-base leading-7">
                    {description}
                </p>
            )}
        </>
    )
}
