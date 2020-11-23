-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2020 at 11:15 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tourism`
--

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE `tours` (
  `id` int(50) NOT NULL,
  `tname` varchar(500) NOT NULL,
  `place` varchar(500) NOT NULL,
  `tprice` varchar(500) NOT NULL,
  `seller` varchar(500) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `duration` varchar(500) NOT NULL,
  `map` varchar(500) NOT NULL,
  `picone` varchar(500) NOT NULL,
  `pictwo` varchar(500) NOT NULL,
  `picthree` varchar(500) NOT NULL,
  `picfour` varchar(500) NOT NULL,
  `rating` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `tname`, `place`, `tprice`, `seller`, `description`, `duration`, `map`, `picone`, `pictwo`, `picthree`, `picfour`, `rating`) VALUES
(1, 'Hill View Tour', 'Sylhet', '4200', 'Travel Sense BD', 'Sylhet is the tourism spot of BD n early 2005, Laskar Muqsudur Rahman, Deputy Conservator of Forests, Sylhet Forest Division, observed that Jaflong that he heard in his boyhood as the \'lungs\' of Greater Sylhet was at stake due to on going encroachments and establishment of unauthorized stone crushing mills. He took initiatives to recover the land and establish a recreation-cum-botanical park named as \'Jaflong Green Park\'.', '3 days 2 nights', '\\public\\assets\\imgs\\hillmap.jpg', '\\public\\assets\\imgs\\ratar.jpg', '\\public\\assets\\imgs\\hill1.jpg', '\\public\\assets\\imgs\\hill2.jpg', '\\public\\assets\\imgs\\hill3.jpg', 5.4),
(2, 'Coxs Beach View', 'Coxs Bazar', '3800', 'BD tour Planner', 'Coxs bazar is the tourism spot of BD n early 2005, Laskar Muqsudur Rahman, Deputy Conservator of Forests, Sylhet Forest Division, observed that Jaflong that he heard in his boyhood as the \'lungs\' of Greater Sylhet was at stake due to on going encroachments and establishment of unauthorized stone crushing mills. He took initiatives to recover the land and establish a recreation-cum-botanical park named as \'Jaflong Green Park\'.', '4 days 3 nights', '\\public\\assets\\imgs\\coxmap.jpg', '\\public\\assets\\imgs\\blog1.jpg', '\\public\\assets\\imgs\\bch1.jpg', '\\public\\assets\\imgs\\bch2.jpg', '\\public\\assets\\imgs\\bch3.jpg', 2.8),
(3, 'Inani View tour', 'Coxs Bazar', '2800', 'Travellers Hunt BD', 'Inani Beach is an 18-kilometre-long sea beach in Ukhia Upazila of Cox\'s Bazar District, Bangladesh. It has a lot of coral stones, which are very sharp. These coral stones look black and green, and they are found in summer or rainy seasons. Pathorkhani is located in Jaliapalong, Inani Beach.', '2 days 3 nights ', '\\public\\assets\\imgs\\inanimap.jpg', '\\public\\assets\\imgs\\inanicover.jpg', '\\public\\assets\\imgs\\inani1.jpg', '\\public\\assets\\imgs\\inani2.jpg', '\\public\\assets\\imgs\\inani3.jpg', 3.4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `Cname` varchar(500) NOT NULL,
  `Cemail` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `tour` varchar(500) NOT NULL,
  `status` varchar(500) NOT NULL,
  `payable` varchar(500) NOT NULL,
  `picture` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `Cname`, `Cemail`, `password`, `tour`, `status`, `payable`, `picture`) VALUES
(1, 'Rownak', 'Rownakabin@gmail.com', '6484184', 'Coxs Beach View', 'Pending', '7600', '/public/assets/imgs/18893126-doctor-woman.jpg'),
(2, 'Abin', 'Abin@gmail.com', '123', 'Coxs Beach View', 'Pending', '7600', '/public/assets/imgs/gettyimages-1139665862-612x612.jpg'),
(3, 'siam', 'siam@gmail.com', '5465', 'Hill View Tour', 'Pending', '8400', '/public/assets/imgs/500_F_132944601_TzKWWNgwnBBsShz9UwWiUjTpoydpB5cV.jpg'),
(4, 'koushik', 'k2@gmail.com', '147', 'Hill View Tour', 'Pending', '4200', '/public/assetsdepositphotos_57859381-stock-photo-smiling-male-doctor-in-white.jpg'),
(5, 'rahul', 'r@gmail.com', '789', 'Hill View Tour', 'Confirmed', '8400', '/public/assets/imgs/depositphotos_57859381-stock-photo-smiling-male-doctor-in-white.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
