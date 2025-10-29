import React from "react";

export default function Kontakt() {
return ( <main className="px-[5%] lg:px-[10%] py-10 bg-[#F7F7F7]"> <h1 className="text-3xl font-bold mb-6 text-[#93041C]">Kontakt</h1> <p> <strong>Adres:</strong> ul. Wiśniowa 56, 02-520 Warszawa </p> <p> <strong>Telefon:</strong> 22 646-44-99 lub 22 646-44-98 </p> <p> <strong>Email:</strong> [szkola@tm1.edu.pl](mailto:szkola@tm1.edu.pl), [sekretariat@tm1.edu.pl](mailto:sekretariat@tm1.edu.pl) </p> <iframe
     className="mt-8 w-full h-96 rounded-lg"
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9986010306873!2d21.011558!3d52.208469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccbc7bb32729%3A0x4bb39b9e012a55!2sTechnikum%20Mechatroniczne%20nr%201!5e0!3m2!1spl!2spl!4v1678963765123!5m2!1spl!2spl"
     allowFullScreen=""
     loading="lazy"
   ></iframe> </main>
);
}
