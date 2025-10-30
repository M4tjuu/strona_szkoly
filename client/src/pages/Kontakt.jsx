import React from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";  /* bootstrap rozwala navbar i footer na wszystkich stronach */

export default function Home() {
return (
    <main>
      <Header />

      <div className="w-auto mb-10 mx-[0%] lg:mb-16 lg:mx-[0%] py-8 bg-[#F7F7F7] clear-both">
        <div className="container">
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
            <h2 className="fw-bold text-danger mb-4 fs-2 fs-md-1 text-center">
              Kontakt
            </h2>

            <div className="row gy-3">
              <div className="col-md-6">
                <p className="fs-6 fs-md-5 mb-4">
                  <strong>Wszelką korespondencję prosimy kierować na adres:</strong>
                  <br />
                  <span className="fw-semibold">
                    Technikum Mechatroniczne nr 1 im. Piotra Drzewieckiego
                  </span>
                  <br />
                  ul. Wiśniowa 56
                  <br />
                  02-520 Warszawa
                </p>

                <p className="fs-6 fs-md-5 mb-4">
                  <strong>Telefon:</strong> 22 646-44-99 lub 22 646-44-98
                </p>

                <p className="fs-6 fs-md-5 mb-4">
                  <strong>Wszystkie sprawy związane z rekrutacją:</strong>
                  <br />
                  <a
                    href="mailto:rekrutacja@tm1.edu.pl"
                    className="text-decoration-none text-dark"
                  >
                    rekrutacja@tm1.edu.pl
                  </a>
                </p>

                <p className="fs-6 fs-md-5 mb-3">
                  <strong>Kontakt za pośrednictwem platformy ePUAP:</strong>
                  <br />
                  <a
                    href="https://epuap.gov.pl"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    https://epuap.gov.pl
                  </a>
                </p>

                <p className="fs-6 fs-md-5 mb-3">
                  <strong>Inspektor Ochrony Danych Osobowych:</strong>
                  <br />
                  Stanisław Rudowski
                  <br />
                  e-mail:{" "}
                  <a
                    href="mailto:srowski.iod@dbfomokotow.pl"
                    className="text-decoration-none text-dark"
                  >
                    srowski.iod@dbfomokotow.pl
                  </a>
                </p>

                <p className="fs-6 fs-md-5 mb-0">
                  <strong>Adres do e-doręczeń:</strong>
                  <br />
                  TI – AE:PL-46723-52871-URRSU-33
                </p>
              </div>

              <div className="col-md-6">
                <p className="fs-6 fs-md-5 mb-3">
                  <strong>Sekretariat dyrektora, pok. 105:</strong>
                  <br />
                  tel. wew. 113, e-mail:{" "}
                  <a
                    href="mailto:szkola@tm1.edu.pl"
                    className="text-decoration-none text-dark"
                  >
                    szkola@tm1.edu.pl
                  </a>
                </p>

                <p className="fs-6 fs-md-5 mb-3">
                  <strong>Sekretariat uczniowski, pok. 104:</strong>
                  <br />
                  tel. wew. 111, e-mail:{" "}
                  <a
                    href="mailto:sekretariat@tm1.edu.pl"
                    className="text-decoration-none text-dark"
                  >
                    sekretariat@tm1.edu.pl
                  </a>
                </p>

                <p className="fs-6 fs-md-5 mb-3">
                  <strong>Specjalista ds. archiwum:</strong>
                  <br />
                  e-mail:{" "}
                  <a
                    href="mailto:archiwum@tm1.edu.pl"
                    className="text-decoration-none text-dark"
                  >
                    archiwum@tm1.edu.pl
                  </a>
                </p>

                <p className="fs-6 fs-md-5 mb-3">
                  <strong>Kierownik gospodarczy, pok. 102:</strong>
                  <br />
                  tel. wew. 114, e-mail:{" "}
                  <a
                    href="mailto:boguslawa.gronczynska@tm1.edu.pl"
                    className="text-decoration-none text-dark"
                  >
                    boguslawa.gronczynska@tm1.edu.pl
                  </a>
                </p>

                <p className="fs-6 fs-md-5 mb-3">
                  <strong>Dział kadr, pok. 101:</strong>
                  <br />
                  tel. wew. 119, e-mail:{" "}
                  <a
                    href="mailto:joanna.w@tm1.edu.pl"
                    className="text-decoration-none text-dark"
                  >
                    joanna.w@tm1.edu.pl
                  </a>
                  <br />
                  tel. wew. 119, e-mail:{" "}
                  <a
                    href="mailto:justyna.k@tm1.edu.pl"
                    className="text-decoration-none text-dark"
                  >
                    justyna.k@tm1.edu.pl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto mb-10 mx-[5%] lg:mb-16 lg:mx-[10%] py-8 bg-white clear-both items-center">
        <iframe
          className="w-full h-96 rounded-lg border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9986010306873!2d21.011558!3d52.208469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccbc7bb32729%3A0x4bb39b9e012a55!2sTechnikum%20Mechatroniczne%20nr%201%20im.%20Piotra%20Drzewieckiego!5e0!3m2!1spl!2spl!4v1730235012345!5m2!1spl!2spl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </main>
  );
}
