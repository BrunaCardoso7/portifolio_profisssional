import { Instagram, Github, Linkedin, CloudDownload } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:!px-24 !py-4 gap-4 md:gap-0">
            <div className="flex gap-4">
                <div className="bg-rose-400 h-8 w-8 flex items-center justify-center p-6 rounded-full hover:bg-rose-500 transition-colors">
                    <Instagram className="w-5 h-5" />
                </div>
                <div className="bg-rose-400 h-8 w-8 flex items-center justify-center p-6 rounded-full hover:bg-rose-500 transition-colors">
                    <Github className="w-5 h-5" />
                </div>
                <div className="bg-rose-400 h-8 w-8 flex items-center justify-center p-6 rounded-full hover:bg-rose-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                </div>
            </div>
            {/* <div className="flex flex-row md:flex-row items-center gap-4"> */}
                <h2 className="text-xl md:!text-3xl md:!ml-14 outfit-font-100 text-center md:!text-center">
                    Desenvolvedora de Software
                </h2>
                <button className="bg-rose-400 !px-4 md:!px-8 !py-2 rounded-full hover:bg-rose-500 transition-colors flex items-center gap-2">
                    <span className="text-sm md:text-base">BAIXAR CSV</span>
                    <CloudDownload className="w-4 h-4 md:w-5 md:h-5" />
                </button>
            {/* </div> */}
        </div>
    );
}