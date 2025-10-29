import React from "react";

export default function Header() {
    return (
        <header class="px-[5%] lg:px-[10%] flex justify-center items-center py-6 bg-white text-center">
            <img src="img/logo.png" alt="Logo szkoły" class="w-40 lg:mr-6" />
                <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6 font-extrabold leading-none tracking-tight">Technikum Mechatroniczne nr 1<br />im. Piotra Drzewieckiego</h1>
        </header>
    );
}
