import {Link} from "@inertiajs/react";
import React from "react";

export default function AddLink({ href }) {
    return (
        <Link className={"flex items-center p-2"} href={href}>
            <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>

            <span className={"hidden sm:inline"}>добавить</span>
        </Link>
    )
}
