import Image from "next/image";

function CopyRight() {
    return (
        <div className='text-center text-white'>
            <Image className='mx-auto' src={`/images/full-logo.svg`} alt="me" width="250" height="35" />
            <p>© Hamza Demnani 2023 </p>
        </div>
    )
}

export default CopyRight;