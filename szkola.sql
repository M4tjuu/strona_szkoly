-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 16 Paź 2025, 11:52
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `szkola`
--
CREATE DATABASE IF NOT EXISTS `szkola` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `szkola`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klasy`
--

CREATE TABLE `klasy` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Zrzut danych tabeli `klasy`
--

INSERT INTO `klasy` (`id`, `nazwa`) VALUES
(1, '5TB'),
(2, '1TA'),
(3, '2TC');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `nauczyciele`
--

CREATE TABLE `nauczyciele` (
  `id` int(11) NOT NULL,
  `imie` varchar(50) NOT NULL,
  `nazwisko` varchar(50) NOT NULL,
  `inicjaly` varchar(10) GENERATED ALWAYS AS (concat(left(`imie`,1),left(`nazwisko`,1))) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Zrzut danych tabeli `nauczyciele`
--

INSERT INTO `nauczyciele` (`id`, `imie`, `nazwisko`) VALUES
(1, 'Anna', 'Nowak'),
(2, 'Piotr', 'Kowalski'),
(3, 'Magdalena', 'Wisniewska'),
(4, 'Tomasz', 'Lewandowski'),
(5, 'Ewa', 'Zielinska'),
(6, 'Robert', 'Jankowski'),
(7, 'Karolina', 'Majewska'),
(8, 'Pawel', 'Adamski'),
(9, 'Joanna', 'Kaczmarek');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `plan_lekcji`
--

CREATE TABLE `plan_lekcji` (
  `id` int(11) NOT NULL,
  `id_klasy` int(11) NOT NULL,
  `id_nauczyciela` int(11) NOT NULL,
  `id_przedmiotu` int(11) NOT NULL,
  `id_sali` int(11) NOT NULL,
  `dzien_tygodnia` enum('Poniedzialek','Wtorek','Sroda','Czwartek','Piatek') NOT NULL,
  `godzina_lekcyjna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Zrzut danych tabeli `plan_lekcji`
--

INSERT INTO `plan_lekcji` (`id`, `id_klasy`, `id_nauczyciela`, `id_przedmiotu`, `id_sali`, `dzien_tygodnia`, `godzina_lekcyjna`) VALUES
(1, 2, 1, 1, 1, 'Poniedzialek', 1),
(2, 2, 2, 2, 2, 'Poniedzialek', 2),
(3, 2, 3, 3, 3, 'Poniedzialek', 3),
(4, 2, 4, 4, 4, 'Wtorek', 1),
(5, 2, 5, 5, 5, 'Wtorek', 2),
(6, 2, 6, 6, 6, 'Sroda', 3),
(7, 2, 7, 7, 7, 'Czwartek', 2),
(8, 3, 3, 3, 3, 'Poniedzialek', 1),
(9, 3, 4, 4, 4, 'Poniedzialek', 2),
(10, 3, 1, 1, 1, 'Wtorek', 1),
(11, 3, 2, 2, 2, 'Wtorek', 2),
(12, 3, 8, 5, 5, 'Sroda', 3),
(13, 3, 9, 7, 7, 'Czwartek', 2),
(14, 1, 1, 1, 1, 'Poniedzialek', 1),
(15, 1, 3, 3, 3, 'Poniedzialek', 2),
(16, 1, 5, 5, 5, 'Wtorek', 1),
(17, 1, 6, 6, 6, 'Wtorek', 2),
(18, 1, 4, 4, 4, 'Sroda', 1),
(19, 1, 2, 2, 2, 'Czwartek', 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `przedmioty`
--

CREATE TABLE `przedmioty` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Zrzut danych tabeli `przedmioty`
--

INSERT INTO `przedmioty` (`id`, `nazwa`) VALUES
(1, 'Matematyka'),
(2, 'Jezyk polski'),
(3, 'Jezyk angielski'),
(4, 'Fizyka'),
(5, 'Historia'),
(6, 'WOS'),
(7, 'Jezyk niemiecki');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `sale`
--

CREATE TABLE `sale` (
  `id` int(11) NOT NULL,
  `numer` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Zrzut danych tabeli `sale`
--

INSERT INTO `sale` (`id`, `numer`) VALUES
(1, '309'),
(2, '200'),
(3, '316'),
(4, '407'),
(5, '306'),
(6, '307'),
(7, '126');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `haslo_hash` varchar(255) NOT NULL,
  `rola` enum('admin') DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zastepstwa`
--

CREATE TABLE `zastepstwa` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `id_klasy` int(11) NOT NULL,
  `godzina_lekcyjna` int(11) NOT NULL,
  `id_nauczyciela_starego` int(11) DEFAULT NULL,
  `id_nauczyciela_nowego` int(11) DEFAULT NULL,
  `uwagi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klasy`
--
ALTER TABLE `klasy`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `nauczyciele`
--
ALTER TABLE `nauczyciele`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `plan_lekcji`
--
ALTER TABLE `plan_lekcji`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_klasy` (`id_klasy`),
  ADD KEY `id_nauczyciela` (`id_nauczyciela`),
  ADD KEY `id_przedmiotu` (`id_przedmiotu`),
  ADD KEY `id_sali` (`id_sali`);

--
-- Indeksy dla tabeli `przedmioty`
--
ALTER TABLE `przedmioty`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Indeksy dla tabeli `zastepstwa`
--
ALTER TABLE `zastepstwa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_klasy` (`id_klasy`),
  ADD KEY `id_nauczyciela_starego` (`id_nauczyciela_starego`),
  ADD KEY `id_nauczyciela_nowego` (`id_nauczyciela_nowego`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `klasy`
--
ALTER TABLE `klasy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `nauczyciele`
--
ALTER TABLE `nauczyciele`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `plan_lekcji`
--
ALTER TABLE `plan_lekcji`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT dla tabeli `przedmioty`
--
ALTER TABLE `przedmioty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `zastepstwa`
--
ALTER TABLE `zastepstwa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `plan_lekcji`
--
ALTER TABLE `plan_lekcji`
  ADD CONSTRAINT `plan_lekcji_ibfk_1` FOREIGN KEY (`id_klasy`) REFERENCES `klasy` (`id`),
  ADD CONSTRAINT `plan_lekcji_ibfk_2` FOREIGN KEY (`id_nauczyciela`) REFERENCES `nauczyciele` (`id`),
  ADD CONSTRAINT `plan_lekcji_ibfk_3` FOREIGN KEY (`id_przedmiotu`) REFERENCES `przedmioty` (`id`),
  ADD CONSTRAINT `plan_lekcji_ibfk_4` FOREIGN KEY (`id_sali`) REFERENCES `sale` (`id`);

--
-- Ograniczenia dla tabeli `zastepstwa`
--
ALTER TABLE `zastepstwa`
  ADD CONSTRAINT `zastepstwa_ibfk_1` FOREIGN KEY (`id_klasy`) REFERENCES `klasy` (`id`),
  ADD CONSTRAINT `zastepstwa_ibfk_2` FOREIGN KEY (`id_nauczyciela_starego`) REFERENCES `nauczyciele` (`id`),
  ADD CONSTRAINT `zastepstwa_ibfk_3` FOREIGN KEY (`id_nauczyciela_nowego`) REFERENCES `nauczyciele` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
