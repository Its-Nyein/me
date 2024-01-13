interface IProps {
    title: string;
    description: string;
}

export function Heading({ title, description}: IProps) {
    return <>
        {""}
        <p className="font-title tracking-wider text-4xl uppercase text-center items-center mb-4">{title}</p>
        <p className="text-zinc-400 text-center mb-[60px]">{description}</p>
    </>
}