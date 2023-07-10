import Blog from "./blog"
import Moreblogs from "./moreblogs"

function Blogsection() {
    return (
        <div className="bg-[url('/cover.png')] bg-cover bg-opacity-80 py-10 min-w-full mt-16 md:mt-28">
            <div className="container md:pl-16">
                <h2 className="text-white text-3xl font-semibold">blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center py-6 gap-5">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />

                    <Moreblogs />
                </div>
            </div>
        </div>
    )
}


export default Blogsection