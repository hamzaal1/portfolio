import About from "@/components/about";

export const metadata = {
  title: 'About Me | Senior_Next_Js & React_Js | Front-End | Back-End |',
  description: 'My Name Is Hamza Demnani 😃 .I have over 3years Of Designing end-to-end experience for financial products on web platforms Senior_Next_Js Laravel | Front-End | Back-End | Make Web Application | Bug Solver',
}


function page() {
  return (
    <main className="container text-white py-8">
      <h1 className="text-4xl font-bold">About Me 😃</h1>
      <div className="w-full md:flex py-6">
        <About />
      </div>
    </main>
  )
}
export default page;