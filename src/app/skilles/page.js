import Skilles from "@/components/skilles";
export const metadata = {
    title: 'My Skilles | TechStylitix',
}

function page() {
    return (
        <main className="container text-white py-10 grid grid-col-1 justify-center md:justify-start">
            <h1 className="text-4xl font-bold">My Skilles 💻</h1>
            <Skilles />
        </main>
    )
}
export default page;