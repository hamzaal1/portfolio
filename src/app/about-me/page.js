import Image from "next/image";

function page() {
  return (
    <main className="container text-white py-8">
      <h1 className="text-4xl font-bold">About Me 😃</h1>
      <div className="w-full md:flex py-6">
        <div className="w-[65%] md:w-[55%] mx-auto">
          <Image draggable="false" className="rounded-md" src={"/images/me.jpg"} width={270} height={150} alt="me" />
        </div>
        <div className="ps-6 md:ps-4 text-xl">
          <div className="w-fit md:3/4 leading-9 mt-8 md:mt-4">
            <p>Hi , I’m <span className="text-secondary">Hamza Demnani .</span> </p>
            i have over 3years Of Designing end-to-end experience for financial products on web platforms. Working closely with managers, marketing specialists and developers. 🌟
          </div>

          <ul className="w-fit grid grid-cols-2 leading-9 mt-3">
            <li className="font-bold text-secondary">Name :</li>
            <li>Hamza Demnani .</li>
            <li className="font-bold text-secondary">Age :</li>
            <li>20 Years Old .</li>
            <li className="font-bold text-secondary">From :</li>
            <li>Morocco Tanger .</li>
          </ul>
        </div>

      </div>
    </main>
  )
}
export default page;