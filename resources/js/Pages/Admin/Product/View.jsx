import AddLink from "@/Components/AddLink";
import DeleteLink from "@/Components/DeleteLink";
import EditLink from "@/Components/EditLink";
import {usePage} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminTitle from "@/Components/AdminTitle";

export default function View({ product }) {
    const props = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<AdminTitle/>}
        >
            <h3 className="font-semibold text-lg text-gray-800 leading-tight text-center mt-10 mb-4">Просмотр товара</h3>

            <div className={"bg-white max-w-xl m-auto shadow"}>
                <div className={"m-auto max-w-xl p-6"}>
                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Название:</div>
                        <div className={"font-black"}>{product.name}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Цена:</div>
                        <div className={"font-black"}>{product.price}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Категория:</div>
                        <div className={"font-medium"}>{product.category.name}</div>
                    </div>

                    <div className={"flex p-1"}>
                        <div className={"min-w-32"}>Описание:</div>
                        <div className={"font-medium"}>{product.description}</div>
                    </div>
                </div>

                <div className={"flex justify-center items-center bg-blue-50"}>
                    <div className={"flex text-sm font-mono"}>
                        <div>
                            <EditLink href={route('product.edit', {
                                productId: product.id
                            })}/>
                        </div>

                        <div>
                            <DeleteLink href={route('product.delete', {
                                productId: product.id
                            })}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
