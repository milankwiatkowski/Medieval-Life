"use client";
import { useRouter } from "next/navigation";
export default function Footer(){
    const router = useRouter()
    function FAQ(){
        router.push("/FAQ")
    }
    function PrivacyPolicy(){
        router.push("/PrivacyPolicy")
    }
    function myGitHub(){
        window.open("https://github.com/milankwiatkowski")
    }
    return (
        <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 p-1 shadow-md z-50">
          <button
            onClick={FAQ}
            className="text-indigo-600 font-bold py-2 px-4 rounded-lg shadow hover:bg-yellow-200 transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={PrivacyPolicy}
            className="text-indigo-600 font-bold py-1 px-2 rounded-lg shadow hover:bg-yellow-200 transition-colors"
          >
            Privacy Policy
          </button>
          <div
            onClick={myGitHub}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="w-12 h-12 rounded-full border-2 border-white shadow-sm hover:border-yellow-300 transition-colors"
            />
          </div>
        </footer>
      );
}