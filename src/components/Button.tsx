import React from "react"

interface PropsButton {
    text: string
    onClick: () => void
    className?: string
}

export function Button(props: PropsButton) {
    return <button className={props.className} onClick={props.onClick}>{props.text}</button>
}