"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Nawigacja(){
    const router = useRouter()
    const [error, setError] = useState("");
    function user(){
        router.push("/konto-uzytkownika")
    }
    function glowna(){
        router.push("/")
    }
    function move_to_filter(dane){
      router.push(`/wyszukane-quizy/${dane.value.toLowerCase()}`)
    }
    // from-purple-200 via-pink-200 to-red-200
    return (
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 py-6 px-10 shadow-md z-50" >
        <div className="flex items-center mr-4">
          <div
            onClick={user}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            {/* {profilowe ? (
              <img
                src={profilowe}
                alt="Obrazek z localStorage"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm hover:border-yellow-300 transition-colors"
              />
            ) : (
              <p className="text-white italic">Brak zdjęcia</p>
            )} */}
          </div>
        </div>
    
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/logo.png"
            width="70"
            className="cursor-pointer transition-transform hover:scale-105  rounded-2xl"
            onClick={glowna}
          />
        </div>
    
        <Formik
          initialValues={{ value: "" }}
          validationSchema={Yup.object({
            value: Yup.string().required("Wymagane"),
          })}
          onSubmit={(values) => move_to_filter(values)}
        >
          {({ isSubmitting }) => (
            <Form className="flex items-center gap-2">
              <Field
                name="value"
                placeholder="Szukaj..."
                className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400 text-sm placeholder-gray-400 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 text-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-black-500 text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Szukaj
              </button>
            </Form>
          )}
        </Formik>
      </nav>
    );
    
    
}