import {Method} from "@inertiajs/inertia";
import {Link} from "@inertiajs/react";

export default function Table({ list, columns, viewLinkTemplate, editLinkTemplate, deleteLinkTemplate }) {

    return (
        <div>
            <table className="border-collapse table-auto w-full text-sm border-b-2 border-blue-200">
                <thead>
                <tr>
                    <th className="p-2 bg-blue-200 font-normal text-black text-left">#</th>
                    {columns.map((column, j) => {
                        return (
                            <th key={j} className="p-2 bg-blue-200 font-normal text-black text-left">{column.title}</th>
                        )
                    })}
                    <th className="p-2 bg-blue-200 font-normal text-black text-left"></th>
                </tr>
                </thead>

                <tbody>
                {list.map((item, i) => {
                    return (
                        <tr key={i} className="bg-white">
                            <td className="border-b border-slate-100 p-2 text-slate-500 text-left">{item.id}</td>

                            {columns.map((column, j) => {
                                return (
                                    <td key={j} className="border-b border-slate-100 p-2 text-slate-500 text-left">
                                        <Link className={"text-black hover:underline"}
                                              href={viewLinkTemplate.replace("###", item.id.toString())}>
                                            {item[column.propertyName]}
                                        </Link>
                                    </td>
                                )
                            })}

                            <td className={"border-b border-slate-100 p-2 text-slate-500 flex justify-end"}>
                                <Link className={"text-black hover:underline m-1"}
                                      href={editLinkTemplate.replace("###", item.id.toString())}>
                                <svg className="w-[24px] h-[24px]" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="1.5"
                                              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                    </svg>
                                </Link>

                                <Link className={"text-black hover:underline m-1 cursor-pointer"}
                                              href={deleteLinkTemplate.replace("###", item.id.toString())}
                                              method={Method.POST}>
                                    <svg className="w-[24px] h-[24px]" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="1.5"
                                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                    </svg>

                                </Link>
                            </td>
                        </tr>)
                })}

                </tbody>
            </table>

            {list.length === 0
                ? (<div className={"text-center m-2 text-sm text-gray-400 font-thin"}>
                    В списке нет элементов для вывода.
                </div>)
                : ""}
        </div>
    )
}
