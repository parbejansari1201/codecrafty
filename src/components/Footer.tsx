import { Blocks } from "lucide-react";
import Navigate from "./Navigate";

function Footer() {
    return (
        <footer className="relative border-t border-gray-800/50 mt-auto">
            <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-gray-900 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-around gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Blocks className="size-5" />
                        <span>Built for developers, by developers</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Navigate href="/support" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Support
                        </Navigate>
                        <Navigate href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Privacy
                        </Navigate>
                        <Navigate href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Terms
                        </Navigate>
                        <Navigate href="/contact" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Contact Us
                        </Navigate>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;