import * as React from "react";
import { SVGProps } from "react";

export const TailwindSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={30}
        fill="none"
        {...props}
    >
        <path
            fill="#44A8B3"
            d="M12.5 10C14.167 3.333 18.333 0 25 0c10 0 11.25 7.5 16.25 8.75C44.583 9.583 47.5 8.333 50 5c-1.667 6.667-5.833 10-12.5 10-10 0-11.25-7.5-16.25-8.75-3.333-.833-6.25.417-8.75 3.75ZM0 25c1.667-6.667 5.833-10 12.5-10 10 0 11.25 7.5 16.25 8.75 3.333.833 6.25-.417 8.75-3.75-1.667 6.667-5.833 10-12.5 10-10 0-11.25-7.5-16.25-8.75C5.417 20.417 2.5 21.667 0 25Z"
        />
    </svg>
);
