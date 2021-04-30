-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2021 at 07:26 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testo`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `file`, `user_id`, `createdAt`, `updatedAt`) VALUES
(3, 'Book 3', NULL, 0, '2021-04-30 17:02:33', '2021-04-30 17:02:33'),
(4, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\kI3TVn1-BqwgiSuZlVfmp3Gm.jpg', 0, '2021-04-30 17:02:51', '2021-04-30 17:02:51'),
(5, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\TI7zY2Qe7GMSYQi7OJec0vbz.jpg', 0, '2021-04-30 17:02:57', '2021-04-30 17:02:57'),
(6, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\QthAZUtxzIkx0gRnithsZU2C.jpg', 0, '2021-04-30 17:03:18', '2021-04-30 17:03:18'),
(7, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\l2T1xyxkFZgcO4OcIHZCNR1M.jpg', 0, '2021-04-30 17:03:20', '2021-04-30 17:03:20'),
(8, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\eqeIBen5kaHya4zecasQsfFS.jpg', 0, '2021-04-30 17:06:40', '2021-04-30 17:06:40'),
(9, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\yptr1-kvF1jlSdbySyCE0OcC.jpg', 0, '2021-04-30 17:06:46', '2021-04-30 17:06:46'),
(10, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\ifeYUMREzBpheXqjjxvauZ_1.jpg', 1, '2021-04-30 17:09:05', '2021-04-30 17:09:05'),
(11, 'Book 3', 'E:\\Ahmed Hashem\\Own Projects\\typescript-mvc-expressjs\\uploads\\58iKj456IgfDsVmKEa28l-wD.jpg', 1, '2021-04-30 17:11:00', '2021-04-30 17:11:00');

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`id`, `user_id`, `book_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-04-30 17:21:14', '2021-04-30 17:21:14'),
(2, 1, 5, '2021-04-30 17:22:32', '2021-04-30 17:22:32'),
(3, 1, 5, '2021-04-30 17:23:27', '2021-04-30 17:23:27');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `user_id`, `token`, `createdAt`, `updatedAt`) VALUES
(1, 1, '$2a$10$PD/JCCnziJAiKLfzz/Qple72qdFkf1l58iEH0Rk6THD4HBO0J35Na', '2021-04-30 15:59:27', '2021-04-30 15:59:27'),
(2, 1, '$2a$10$b0bGpmxkYoXOk/GMcOM/ZO3E9cZrYCYsgMxgeGeN1eE8rIsJq95/W', '2021-04-30 16:04:20', '2021-04-30 16:04:20'),
(3, 1, '$2a$10$Bkg4DtYtegF/JcviTYsT9ezZ29W/NwCUVDNZLTMpIg.DzA6gGmXl2', '2021-04-30 16:05:00', '2021-04-30 16:05:00'),
(4, 1, '$2a$10$MUBBMHIQR8mhYXVTTLAQO.MV32UMeVrkTMaOL5oyEkV9D19ZoXNNa', '2021-04-30 16:05:21', '2021-04-30 16:05:21'),
(5, 1, '$2a$10$ebibgoEHL9Y7mM7qnOg.nuwRXL579szcC6NEkqwjg9CbUh78oxqVK', '2021-04-30 16:05:50', '2021-04-30 16:05:50'),
(6, 1, '$2a$10$M0l2w1zNZDg6IrCHwKMmYOn79T2LfhiDylPvyCXRXlCqg/QtQoL3a', '2021-04-30 16:06:00', '2021-04-30 16:06:00'),
(7, 1, '$2a$10$7yZ9DivpLp2WoHEi.m5W9OtOSSz7BJ.p/9l3moljm/1BsqUvnNuFO', '2021-04-30 16:10:32', '2021-04-30 16:10:32'),
(9, 1, '$2a$10$AshwPklh5IMHN2QorO2fqesQySex6S58rO0ICfE3UanBQhF5RHyq.', '2021-04-30 16:15:05', '2021-04-30 16:15:05'),
(11, 1, '$2a$10$G0cL7b3Ai1m7NSmCmMXrU.uf2N0nZmjmkVgVRM9v5X4Oq.gCguRhW', '2021-04-30 17:08:59', '2021-04-30 17:08:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_type_id` int(1) NOT NULL DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `user_type_id`, `createdAt`, `updatedAt`) VALUES
(1, 'ahmedhashem@qodeex.com', '$2a$10$M/3nI0.nS1DJZNv.4x21Q.esm.6XbaAug.GcHTnhzqEpM4ZC0wh/C', 0, '2021-04-30 15:45:54', '2021-04-30 15:45:54'),
(2, 'ahmedhashem1@qodeex.com', '$2a$10$/FXhmYIDxjcmLcrMYU7MMupPSR8.kt3bGpYSWFuTWPaZFB9.Y0fs2', 1, '2021-04-30 15:46:02', '2021-04-30 15:46:02'),
(3, 'ahmedhashem11@qodeex.com', '$2a$10$CyuLi715HiM0T3nHzADlWeRqNB0eVdlp0PrSAI7mHrNp6CayJjVyu', 1, '2021-04-30 15:48:53', '2021-04-30 15:48:53'),
(4, 'ahmedhashem11@qodeex.com', '$2a$10$SQ1cLinpNHZ5dOngjDWNnuyzd1/Ph4ZjnXEU9Bix4It2BAsMqBzdS', 1, '2021-04-30 15:51:10', '2021-04-30 15:51:10'),
(5, 'ahmedhashem11@qodeex.com', '$2a$10$SMAyaMDnVKI7S9ZceF3LWO/STDIIYO9gs/URI/MepPElk83BlgyhO', 1, '2021-04-30 15:51:22', '2021-04-30 15:51:22'),
(6, 'ahmedhashem11@qodeex.com', '$2a$10$9s7Azb06XL9Egfu8F.jQjuWcLB4eLKT8yjfpfDqRdrzaUhFW7O9Nu', 1, '2021-04-30 15:54:55', '2021-04-30 15:54:55'),
(7, 'ahmedhashem11@qodeex.com', '$2a$10$oYjuN02COER3JSXN6LN4xuFu7cMmNXaOyEss9g1YPuTr6OO221xQe', 1, '2021-04-30 17:24:13', '2021-04-30 17:24:13'),
(8, 'ahmedhashem11@qodeex.com', '$2a$10$W7.EZdu49UltTOAzucnxLuku4fFcTyV6GzmsMxSkEoSrPxDEZqbdC', 1, '2021-04-30 17:25:41', '2021-04-30 17:25:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
