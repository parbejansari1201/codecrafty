import Navigate from "@/components/Navigate";
import NavigationHeader from "@/components/NavigationHeader";

export default function NotFound() {
    return (
        <>
            <NavigationHeader />

            <div className="h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-gray-400 mb-6">Page not found</p>

                <Navigate
                    href="/"
                    className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Go Home
                </Navigate>
            </div>
        </>
    );
}