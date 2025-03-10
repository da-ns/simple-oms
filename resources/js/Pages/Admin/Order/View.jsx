import DeleteLink from "@/Components/DeleteLink";
import {Link, usePage} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminTitle from "@/Components/AdminTitle";
import React from "react";
import {Method} from "@inertiajs/inertia";

export default function View({ order }) {
    const props = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<AdminTitle/>}
        >
            <h3 className="font-semibold text-lg text-gray-800 leading-tight text-center mt-10 mb-4">Просмотр заказа</h3>

            <div className={"bg-white max-w-xl m-auto shadow"}>
                <div className={"m-auto max-w-xl p-6"}>
                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Номер заказа:</div>
                        <div className={"font-black"}>{order.id}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Покупатель:</div>
                        <div className={"font-black"}>{order.customer_full_name}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Дата создания:</div>
                        <div className={"font-black"}>{order.create_at}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Товар:</div>
                        <div className={"font-medium"}>{order.product.name}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Количество:</div>
                        <div className={"font-medium"}>{order.product_count}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Итого:</div>
                        <div className={"font-medium"}>{order.total_sum}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Описание:</div>
                        <div className={"font-medium"}>{order.customer_comment}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Статус:</div>
                        <div className={"font-medium"}>{order.status}</div>
                    </div>
                </div>

                <div className={"flex justify-center items-center bg-blue-50"}>
                    <div className={"flex text-sm font-mono"}>
                        <div>
                            {(order.status !== 'Выполнен') && (
                                <Link className={"flex items-center p-2 cursor-pointer"} href={route('order.complete', {
                                    orderId: order.id
                                })} method={Method.POST}>
                                    <svg className={"w-[32px] h-[32px] text-gray-800 mr-2"} xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                         width="32" height="32"
                                         viewBox="0 0 1920 1920">
                                        <path
                                            d="M854.344 1317.685 503.209 966.55l79.85-79.85 271.285 271.285 520.207-520.32 79.849 79.962-600.056 600.057ZM960.056 0c-529.355 0-960 430.645-960 960s430.645 960 960 960c529.243 0 960-430.645 960-960S1489.3 0 960.056 0Z"
                                            fillRule="evenodd"/>
                                    </svg>

                                    <span className={"hidden sm:inline"}>выполнить</span>
                                </Link>
                            )}
                        </div>

                        <div>
                            <DeleteLink href={route('order.delete', {
                                orderId: order.id
                            })}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
