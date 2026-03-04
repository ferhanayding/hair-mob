
type Props = {
    title: string;
    subtitle?: string;
    description?: string;
    color?: string;
}

const SectionHeader = (Props: Props) => {
    const { title, subtitle, description, color } = Props
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            {subtitle && <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                {subtitle}
            </div>}

            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 ${color ? `text-white/90` : 'text-gray-900'}`}>
                {title}
            </h2>
            {description && <p className={`text-lg md:text-xl  ${color ? `text-white/60` : 'text-gray-600'}`}>
                {description}
            </p>}
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </div>
    )
}

export default SectionHeader