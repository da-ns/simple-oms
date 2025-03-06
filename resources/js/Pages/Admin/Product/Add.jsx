import {useForm, usePage} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Textarea from "@/Components/Textarea";
import {useEffect, useState} from "react";
import Select from "react-tailwindcss-select";

export default function Add({categories}) {

    const props = usePage().props;
    const [category, setCategory] = useState(null);

    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        price: 0.0,
        category: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('product.create', {}), {});
    };

    const options = categories.map((category) => {
        return {
            value: category.id,
            label: category.name
        }
    });

    useEffect(() => {
        if (category) {
            setData('category_id', category.value);
        }
    }, [category]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Администрирование</h2>}
        >

            <h3 className="font-semibold text-lg text-gray-800 leading-tight text-center mt-10">Новый товар</h3>

            <form onSubmit={submit} className={"mx-auto max-w-md"}>
                <div>
                    <InputLabel htmlFor="name" value="Название"/>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="price" value="Цена"/>

                    <TextInput
                        id="price"
                        type="number"
                        name="price"
                        value={data.price}
                        className="mt-1 block w-full"
                        min={"0.01"}
                        step=".01"
                        isFocused={false}
                        onChange={(e) => setData('price', e.target.value)}
                        required
                    />

                    <InputError message={errors.price} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="category" value="Категория"/>

                    <Select
                        id="category"
                        value={category}
                        onChange={setCategory}
                        options={options}
                        primaryColor={"blue"}
                        required
                    />

                    <InputError message={errors.category_id} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Описание"/>

                    <Textarea
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        isFocused={false}
                        onChange={(e) => setData('description', e.target.value)}
                    />

                    <InputError message={errors.description} className="mt-2"/>
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
