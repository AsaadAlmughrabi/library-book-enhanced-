import Footer from "../components/footer";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <div className="flex flex-col min-h-screen dark:bg-black">
                <Header />
                <div className="flex items-center flex-1 max-w-screen-xl p-10 mx-auto sm:flex-row">
                    <div className="flex justify-center sm:w-1/2">
                        <img
                            src="https://i.imgur.com/WbQnbas.png"
                            alt="About Us"
                            className="object-center"
                        />
                    </div>
                    <div className="p-5 sm:w-1/2">
                        <div className="text">
                            <span className="pr-5 overflow-hidden text-gray-500 uppercase border-r-4 animate-typing whitespace-nowrap border-r-indigo-600">
                                About us
                            </span>
                            <h2 className="my-4 text-3xl font-bold sm:text-4xl dark:text-white">
                                About <span className="text-indigo-600">Our website</span>
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Our library offers a curated selection of books across various genres, from thrilling mysteries to insightful non-fiction. Dive into our diverse collection and find your next great read.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
