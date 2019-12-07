-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 07, 2019 at 09:48 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `team` varchar(50) NOT NULL,
  `discipline` varchar(100) NOT NULL,
  `stack` varchar(200) NOT NULL,
  `libraries` varchar(300) NOT NULL,
  `software` varchar(200) NOT NULL,
  `task` varchar(2000) NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `title`, `team`, `discipline`, `stack`, `libraries`, `software`, `task`, `img`) VALUES
(1, 'SPOTIFY INTERACTIVE INFOGRAPHIC', 'PERSONAL', 'UX/UI DESIGN / WEB DEVELOPMENT', 'Node.js, MySQL, Express', 'animate.css, vivus.js, waypoints.js, Foundation 6', 'Adobe Illustrator, Visual Studio Code', 'Collect data on a topic of choice, and input it into a database. Design an infographic to display this data, but consider how users will interact with the infographic and how this data\r\ncan displayed and/or manipulated on a web page. Build a responsive web app to display this infographic, adding functionality and animation through CSS and Javascript.', 'interactive-infographic.png'),
(2, 'ORGAN DONOR CAMPAIGN', 'Liam Keery, Noah Fainer, and Natalie Soberano', 'GRAPHICS DESIGN / DIGITAL MARKETING', 'Not Applicable', 'Not Applicable', 'Adobe Photoshop, Sketch', 'The task of this assignment was to create a digital marketing campaign for a new medical procedure known as organ regeneration. The goal was to create a campaign that could breakdown an otherwise complex procedure and bring awareness to this process in a way that is easy to understand. Our deliverables included a website design, billboard ad, subway and bus stop ad, print brochure, and campaign video. My role in this project was the UX/UI Designer and Graphics Designer, and my task was to create the web design and billboard/bus ads.', 'organ-design.jpg'),
(3, 'PEAK', 'PERSONAL', 'UI DESIGN', 'Not Applicable', 'Not Applicable', 'Sketch', 'The Peak app is an original design concept that allows Western University gym members to check the peak times at the recreation center. The app interface includes capacity information for both the main weightroom floor and the upstairs cardio mezzanine, while also showing both hourly and daily capacity forecasts.', 'peak-screens.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
