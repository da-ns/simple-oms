import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 pt-6 text-gray-900">You're logged in!</div>
                        <div className="px-6 pb-6 text-gray-900">
                            Go to <Link className={"text-blue-400 hover:underline"} href={route("admin.panel")}>Admin Panel</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
