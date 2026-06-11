interface IconProps {
    size?: number;
    className?: string;
}

function baseProps(size: number, className?: string) {
    return {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
        className
    } as const;
}

export function ArrowUpRightIcon({ size = 14, className }: IconProps) {
    return (
        <svg {...baseProps(size, className)}>
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    );
}

export function ArrowUpIcon({ size = 14, className }: IconProps) {
    return (
        <svg {...baseProps(size, className)}>
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
        </svg>
    );
}

export function ArrowRightIcon({ size = 14, className }: IconProps) {
    return (
        <svg {...baseProps(size, className)}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

export function MapPinIcon({ size = 14, className }: IconProps) {
    return (
        <svg {...baseProps(size, className)}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
