import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Link, usePage} from '@inertiajs/react';

export default function Panel({}) {
    const props = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Администрирование</h2>}
        >

            <div className={"flex flex-wrap justify-center"}>
                <Link href={route("product.list")} className={"text-blue-500 m-4 hover:underline"}>
                    <div className="flex items-center w-60 p-6 bg-white overflow-hidden shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="80px" height="80px" className={"mr-4"}
                             viewBox="0 0 52 52" data-name="Layer 1">
                            <g>
                                <path
                                    d="M31.9,39.5h6A1.42,1.42,0,0,0,39.4,38V14a1.42,1.42,0,0,0-1.5-1.5h-6A1.42,1.42,0,0,0,30.4,14V38A1.42,1.42,0,0,0,31.9,39.5Z"/>
                                <path
                                    d="M45.4,39.5h3A1.42,1.42,0,0,0,49.9,38V14a1.42,1.42,0,0,0-1.5-1.5h-3A1.42,1.42,0,0,0,43.9,14V38A1.42,1.42,0,0,0,45.4,39.5Z"/>
                                <path
                                    d="M25,39.5h0A1.37,1.37,0,0,0,26.5,38V14A1.42,1.42,0,0,0,25,12.5h0A1.42,1.42,0,0,0,23.5,14V38A1.37,1.37,0,0,0,25,39.5Z"/>
                                <path
                                    d="M16.6,39.5H18A1.42,1.42,0,0,0,19.5,38V14A1.42,1.42,0,0,0,18,12.5H16.5A1.42,1.42,0,0,0,15,14V38A1.45,1.45,0,0,0,16.6,39.5Z"/>
                                <path
                                    d="M3.6,39.5h6A1.42,1.42,0,0,0,11.1,38V14a1.42,1.42,0,0,0-1.5-1.5h-6A1.42,1.42,0,0,0,2.1,14V38A1.47,1.47,0,0,0,3.6,39.5Z"/>
                            </g>
                        </svg>
                        Товары
                    </div>
                </Link>

                <Link href={route("product.list")} className={"text-blue-500 m-4 hover:underline"}>
                    <div className="flex items-center w-60 p-6 bg-white overflow-hidden shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 1024 1024"
                             fill="#000000" className={"mr-4"} version="1.1">
                            <path d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z" fill=""/>
                            <path
                                d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                                fill=""/>
                            <path
                                d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                                fill=""/>
                        </svg>
                        Заказы
                    </div>
                </Link>
            </div>
        </AuthenticatedLayout>
    );
}
