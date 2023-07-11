import Image from 'next/image'


export const metadata = {
    title: '404 Not Found | TechStylitix',
}


function NotFound() {
    return (
        <main className="container text-white py-10 grid grid-col-1 justify-center ">
            <Image draggable="false" src={'/404.svg'} width={350} height={100} alt='404' />
        </main>
    )
}

export default NotFound;