import React from "react"

interface PropsSubtitle {
    text: string;
}

export function Subtitle(props: PropsSubtitle) {
    return <h2 className="subtitle">{props.text}</h2>
}

/*export const Subtitle: React.FC<PropsSubtitle> = ({ text }) => {
    return <h2 className="subtitle">{text}</h2>
}*/