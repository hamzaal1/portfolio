import Image from "next/image";
function CopyRight() {
    const date = new Date();
    return (
        <div className='text-center text-white pb-4'>
            <Image draggable='false' className='mx-auto' src={`/images/full-logo.svg`} alt="me" width="250" height="35" />
            <p>© Hamza Demnani { date.getFullYear() } </p>
        </div>
    )
}

export default CopyRight;