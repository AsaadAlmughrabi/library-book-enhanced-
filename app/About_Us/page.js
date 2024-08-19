import Footer from "../components/footer";
import Header from "../components/Header";

export default function About() {
    return (
        <>
        <Header/>
        <div className="items-center max-w-screen-xl mt-10 sm:flex">
            <div className="p-10 sm:w-1/2">
                <div className="object-center text-center image">
                    <img src="https://i.imgur.com/WbQnbas.png" alt="About Us"/>
                </div>
            </div>
            <div className="p-5 sm:w-1/2">
                <div className="text ">
                    <span className="pr-5 overflow-hidden text-gray-500 uppercase border-r-4 animate-typing whitespace-nowrap border-r-indigo-600">
                        About us
                    </span>
                    <h2 className="my-4 text-3xl font-bold sm:text-4xl">
                        About <span className="text-indigo-600">Our website</span>
                    </h2>
                    <p className="text-gray-700">
                    Our library offers a curated selection of books across various genres, from thrilling mysteries to insightful non-fiction. Dive into our diverse collection and find your next great read.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
