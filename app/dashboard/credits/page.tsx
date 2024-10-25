import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Customers',
};

export default function Page() {
    return <div className="flex items-center gap-4">
        <Image
            src="/fred.png"
            alt="Fred Trivett"
            width={30}
            height={30}
            className="rounded-full"
        />
        <p>Cet examen est l'oeuvre de Fred Trivett</p>
    </div>;
}