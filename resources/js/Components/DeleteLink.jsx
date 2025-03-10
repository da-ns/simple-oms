import {Link} from "@inertiajs/react";
import React from "react";
import {Method} from "@inertiajs/inertia";

export default function DeleteLink({ href }) {
    return (
        <Link className={"flex items-center p-2 cursor-pointer"} href={href} method={Method.POST}>
            <svg className="w-[32px] h-[32px] text-gray-800 mr-2" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                 viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>

            <span className={"hidden sm:inline"}>удалить</span>
        </Link>
    )
}
