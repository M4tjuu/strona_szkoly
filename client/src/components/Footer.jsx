import React from "react";

export default function Footer() {
return ( <footer className="px-[5%] lg:px-[10%] py-6 bg-[#F7F7F7] flex flex-col md:flex-row justify-between items-start gap-8"> <div> <h3 className="text-lg mb-4">
Technikum Mechatroniczne nr 1 <br />
im. Piotra Drzewieckiego </h3> <div className="flex"> <a
         target="_blank" rel="noreferrer"
         href="https://www.facebook.com/Technikum.Mechatroniczne.nr.1"
         className="text-[#93041C] mr-4 text-xl hover:opacity-60 transition"
       > <i className="fa-brands fa-facebook"></i> </a> <a
         target="_blank" rel="noreferrer"
         href="https://www.youtube.com/@wisniowa56official17"
         className="text-[#93041C] mr-4 text-xl hover:opacity-60 transition"
       > <i className="fa-brands fa-youtube"></i> </a> <a
         target="_blank" rel="noreferrer"
         href="https://www.instagram.com/wisniowa56/"
         className="text-[#93041C] mr-4 text-xl hover:opacity-60 transition"
       > <i className="fa-brands fa-instagram"></i> </a> </div> </div>

  <div className="max-w-[300px]">
    <p className="font-bold">Kontakt</p>
    <p>szkola@tm1.edu.pl, sekretariat@tm1.edu.pl</p>
    <p>fax. 22 646-45-00</p>
    <p>ul. Wiśniowa 56, 02-520 Warszawa</p>
    <p>tel. 22 646-44-99 lub 22 646-44-98</p>
  </div>
</footer>

);
}
