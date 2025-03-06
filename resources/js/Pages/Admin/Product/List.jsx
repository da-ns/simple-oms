import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {usePage} from '@inertiajs/react';
import Table from "@/Components/Table";
import AddLink from "@/Components/AddLink";

export default function List({ products }) {
    const props = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Администрирование</h2>}
        >

            <div className={"p-6"}>
                <div className={"flex justify-between"}>
                    <h3 className={"font-medium text-xl my-4"}>Список товаров</h3>

                    <div className={"flex text-sm font-mono"}>
                        <AddLink href={route('product.add')}/>
                    </div>
                </div>

                <Table list={products}
                       columns={[
                           { title: "Название", propertyName: "name" },
                           { title: "Цена", propertyName: "price" },
                           { title: "Категория", propertyName: "category" }
                       ]}
                       viewLinkTemplate={route('product.view', {productId: "###"})}
                       editLinkTemplate={route('product.edit', {productId: "###"})}
                       deleteLinkTemplate={route('product.delete', {productId: "###"})}/>
            </div>
        </AuthenticatedLayout>
    );
}
