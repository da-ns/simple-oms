import {Link} from "@inertiajs/react";
import React from "react";

export default function EditLink({ href }) {
    return (
        <Link className={"flex items-center p-2"} href={href}>
            <svg className="w-[32px] h-[32px] text-gray-800 mr-2" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                 viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>

            <span className={"hidden sm:inline"}>редактировать</span>
        </Link>
    )
}
