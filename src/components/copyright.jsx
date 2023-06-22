import Image from "next/image";

function CopyRight() {
    const date = new Date();
    return (
        <div className='text-center text-white'>
            <Image draggable='false' className='mx-auto' src={`/images/full-logo.svg`} alt="me" width="250" height="35" />
            <p>© Hamza Demnani { date.getFullYear() } </p>
        </div>
    )
}

export default CopyRight;