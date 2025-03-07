import {Link} from "@inertiajs/react";

export default function AdminTitle({}) {
    return (
        <Link className={"font-semibold text-xl text-blue-500 hover:underline leading-tight"} href={route("admin.panel")}>
            Администрирование
        </Link>
    )
}
