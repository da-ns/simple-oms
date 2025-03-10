import {useForm, usePage} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Textarea from "@/Components/Textarea";
import {useEffect, useState} from "react";
import Select from "react-tailwindcss-select";
import AdminTitle from "@/Components/AdminTitle";

export default function Add({ products }) {

    const props = usePage().props;
    const [product, setProduct] = useState(null);

    const {data, setData, post, processing, errors, reset} = useForm({
        customer_full_name: '',
        product_id: 0.0,
        product_count: '',
        customer_comment: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('order.create', {}), {});
    };

    const options = products.map((product) => {
        return {
            value: product.id,
            label: product.name
        }
    });

    useEffect(() => {
        if (product) {
            setData('product_id', product.value);
        }
    }, [product]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<AdminTitle/>}
        >

            <h3 className="font-semibold text-lg text-gray-800 leading-tight text-center mt-10">Новый заказ</h3>

            <form onSubmit={submit} className={"mx-auto max-w-md"}>
                <div>
                    <InputLabel htmlFor="customer_full_name" value="ФИО покупателя"/>

                    <TextInput
                        id="customer_full_name"
                        name="customer_full_name"
                        value={data.customer_full_name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('customer_full_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.customer_full_name} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="product" value="Товар"/>

                    <Select
                        id="product"
                        value={product}
                        onChange={setProduct}
                        options={options}
                        primaryColor={"blue"}
                        required
                    />

                    <InputError message={errors.product_id} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="product_count" value="Количество"/>

                    <TextInput
                        id="product_count"
                        type="number"
                        name="product_count"
                        value={data.product_count}
                        className="mt-1 block w-full"
                        min={"1"}
                        step="1"
                        isFocused={false}
                        onChange={(e) => setData('product_count', parseInt(e.target.value))}
                        required
                    />

                    <InputError message={errors.product_count} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="customer_comment" value="Комментарий покупателя"/>

                    <Textarea
                        id="customer_comment"
                        name="customer_comment"
                        value={data.customer_comment}
                        className="mt-1 block w-full"
                        isFocused={false}
                        onChange={(e) => setData('customer_comment', e.target.value)}
                    />

                    <InputError message={errors.customer_comment} className="mt-2"/>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Добавить
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
