import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {usePage} from '@inertiajs/react';
import Table from "@/Components/Table";
import AddLink from "@/Components/AddLink";
import AdminTitle from "@/Components/AdminTitle";

export default function List({ orders }) {
    const props = usePage().props;

    console.log(orders);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<AdminTitle/>}
        >

            <div className={"p-6"}>
                <div className={"flex justify-between"}>
                    <h3 className={"font-medium text-xl my-4"}>Список заказов</h3>

                    <div className={"flex text-sm font-mono"}>
                        <AddLink href={route('order.add')}/>
                    </div>
                </div>

                <Table list={orders}
                       columns={[
                           { title: "Дата", propertyName: "created_at" },
                           { title: "ФИО", propertyName: "customer_full_name" },
                           { title: "Статус", propertyName: "status" },
                           { title: "Итого", propertyName: "total_sum" },
                       ]}
                       viewLinkTemplate={route('order.view', {orderId: "###"})}
                       deleteLinkTemplate={route('order.delete', {orderId: "###"})}/>
            </div>
        </AuthenticatedLayout>
    );
}
