-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 31, 2026 at 08:09 AM
-- Server version: 10.11.16-MariaDB-cll-lve
-- PHP Version: 8.1.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elbooklets_tcf`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `initials` varchar(255) DEFAULT NULL,
  `accent_color` varchar(255) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `initials`, `accent_color`, `logo_url`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Sala Hub ', 'VH', '#00B4D8', NULL, 5, 1, '2026-03-18 22:19:13', '2026-03-30 16:54:36'),
(2, 'Carrefour', 'CR', '#004A97', NULL, 1, 1, '2026-03-18 22:19:13', '2026-03-30 12:05:59'),
(3, 'Hedeya', 'DB', '#E05C2A', NULL, 0, 1, '2026-03-18 22:19:13', '2026-03-30 16:43:27'),
(4, 'El Booklets', 'SL', '#00B4D8', NULL, 4, 1, '2026-03-18 22:19:13', '2026-03-30 16:36:47'),
(5, 'Abou Ghaly ', 'AG', '#db1e1e', NULL, 2, 1, '2026-03-30 12:06:31', '2026-03-30 16:33:15'),
(6, 'EL Obeikan', 'EO', '#39b5fa', NULL, 7, 1, '2026-03-30 12:11:16', '2026-03-30 16:29:58'),
(7, '1shield', '1S', NULL, NULL, 13, 1, '2026-03-30 12:12:10', '2026-03-30 12:22:18'),
(8, 'Conari', 'CI', '#a38181', NULL, 9, 1, '2026-03-30 12:15:17', '2026-03-30 16:28:19'),
(9, 'Lamar', 'LJ', NULL, NULL, 9, 1, '2026-03-30 12:18:25', '2026-03-30 16:47:19'),
(10, 'Griffin Worx', 'GW', NULL, NULL, 10, 1, '2026-03-30 12:19:28', '2026-03-30 12:19:28'),
(11, 'Etisalat', NULL, NULL, NULL, 11, 1, '2026-03-30 12:19:54', '2026-03-30 12:19:54'),
(12, 'Mamas Gift', 'MG', NULL, NULL, 12, 1, '2026-03-30 12:20:17', '2026-03-30 16:48:49'),
(13, 'Unicef ', 'Ug', NULL, NULL, 13, 1, '2026-03-30 12:20:59', '2026-03-30 12:20:59'),
(14, 'Wellthi', 'WA', NULL, NULL, 6, 1, '2026-03-30 12:22:02', '2026-03-30 17:02:20'),
(15, 'Zest ', 'ZC', NULL, NULL, 14, 1, '2026-03-30 12:23:17', '2026-03-30 12:23:17'),
(16, 'Mazaarena App', 'MA', NULL, NULL, 15, 1, '2026-03-30 12:26:34', '2026-03-30 16:51:25'),
(17, 'Sellah', NULL, NULL, NULL, 16, 1, '2026-03-30 12:27:48', '2026-03-30 12:29:00'),
(18, 'Women Refugee Commission ', 'WR', NULL, NULL, 17, 1, '2026-03-30 12:29:35', '2026-03-30 12:36:04');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-livewire-rate-limiter:412c1104aa5088c9c49164be88e0ee1948a69d05', 'i:1;', 1774954647),
('laravel-cache-livewire-rate-limiter:412c1104aa5088c9c49164be88e0ee1948a69d05:timer', 'i:1774954647;', 1774954647);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_settings`
--

CREATE TABLE `contact_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `sub_text` text DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `whatsapp_number` varchar(255) DEFAULT NULL,
  `whatsapp_url` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_settings`
--

INSERT INTO `contact_settings` (`id`, `label`, `heading`, `sub_text`, `email`, `address`, `whatsapp_number`, `whatsapp_url`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Contact Us', 'Let\'s build something that lasts.', 'Tell us about your project and we\'ll get back to you within 24 hours with a clear next step.', 'Info@TheCodeFactorry.co', 'Top 90 Mall, Unit 309, New Cairo, Cairo, Egypt', '+21003636003', 'https://wa.me/21003636003', 1, '2026-03-18 22:19:13', '2026-03-30 13:56:56');

-- --------------------------------------------------------

--
-- Table structure for table `contact_submissions`
--

CREATE TABLE `contact_submissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ecommerce_capabilities`
--

CREATE TABLE `ecommerce_capabilities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `num` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icon_svg` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ecommerce_settings`
--

CREATE TABLE `ecommerce_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `label` varchar(255) NOT NULL DEFAULT 'E-Commerce Expertise',
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `partner_name` varchar(255) NOT NULL DEFAULT 'Official Shopify Partner',
  `partner_sub` varchar(255) DEFAULT NULL,
  `stat1_n` varchar(255) DEFAULT NULL,
  `stat1_l` varchar(255) DEFAULT NULL,
  `stat2_n` varchar(255) DEFAULT NULL,
  `stat2_l` varchar(255) DEFAULT NULL,
  `stat3_n` varchar(255) DEFAULT NULL,
  `stat3_l` varchar(255) DEFAULT NULL,
  `verticals` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hero_settings`
--

CREATE TABLE `hero_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `cta_text` varchar(255) DEFAULT NULL,
  `cta_url` varchar(255) DEFAULT NULL,
  `secondary_cta_text` varchar(255) DEFAULT NULL,
  `secondary_cta_url` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hero_settings`
--

INSERT INTO `hero_settings` (`id`, `title`, `subtitle`, `cta_text`, `cta_url`, `secondary_cta_text`, `secondary_cta_url`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Building the next generation of <span class=\"accent\">digital excellence.</span>', 'The Code Factory (TCF) is an elite engineering hub based in Egypt, serving the Gulf\'s most ambitious enterprises. We build high-performance mobile apps, web platforms, and custom software that drive real business impact.', 'Start Your Project', '#contact', 'View Our Work', '#projects', 1, '2026-03-18 22:19:13', '2026-03-30 03:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `markets`
--

CREATE TABLE `markets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_name` varchar(255) NOT NULL,
  `flag_url` varchar(255) DEFAULT NULL,
  `flag_alt` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `badge_text` varchar(255) DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `markets`
--

INSERT INTO `markets` (`id`, `country_name`, `flag_url`, `flag_alt`, `description`, `badge_text`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Egypt', NULL, 'Egypt', 'Our back office and engineering hub. Egypt powers TCF\'s delivery engine — housing our full development, design, and operations teams.', 'Back Office', 0, 1, '2026-03-18 22:19:13', '2026-03-30 03:41:56'),
(2, 'United Arab Emirates', NULL, 'UAE', 'Our representative office in UAE bridges us directly to Gulf clients — providing on-ground presence and regional account management.', 'Representative Office', 1, 1, '2026-03-18 22:19:13', '2026-03-30 03:42:15'),
(3, 'Saudi Arabia', NULL, 'Saudi Arabia', 'Our main market. We deliver end-to-end digital products for Saudi enterprises, aligned with Vision 2030 digital transformation goals.', 'Main Market', 2, 1, '2026-03-18 22:19:13', '2026-03-30 03:42:35');

-- --------------------------------------------------------

--
-- Table structure for table `marquee_items`
--

CREATE TABLE `marquee_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(255) NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `marquee_items`
--

INSERT INTO `marquee_items` (`id`, `text`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Mobile Apps', 0, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(2, 'AI Integrations', 1, 1, '2026-03-18 22:19:13', '2026-03-30 12:43:16'),
(3, 'Custom Software', 2, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(4, 'API Integration', 3, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(5, 'UI/UX Design', 4, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(6, 'System Architecture', 5, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(7, 'Technical Audit ', 6, 1, '2026-03-18 22:19:13', '2026-03-30 12:43:42'),
(8, 'Tech Consulting', 7, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  `uuid` char(36) DEFAULT NULL,
  `collection_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `mime_type` varchar(255) DEFAULT NULL,
  `disk` varchar(255) NOT NULL,
  `conversions_disk` varchar(255) DEFAULT NULL,
  `size` bigint(20) UNSIGNED NOT NULL,
  `manipulations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`manipulations`)),
  `custom_properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`custom_properties`)),
  `generated_conversions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`generated_conversions`)),
  `responsive_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`responsive_images`)),
  `order_column` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `model_type`, `model_id`, `uuid`, `collection_name`, `name`, `file_name`, `mime_type`, `disk`, `conversions_disk`, `size`, `manipulations`, `custom_properties`, `generated_conversions`, `responsive_images`, `order_column`, `created_at`, `updated_at`) VALUES
(2, 'App\\Models\\Testimonial', 3, 'be37e449-6bab-4c6a-a570-2b08c0db0e3c', 'photo', 'nancy_color_hq', '01KMKFC0EGY6PSNDX6QJ3RFNTR.png', 'image/png', 'public', 'public', 737540, '[]', '[]', '[]', '[]', 1, '2026-03-26 01:45:49', '2026-03-26 01:45:49'),
(3, 'App\\Models\\Testimonial', 2, '70891050-6783-40f2-a92d-14c43ead37ed', 'photo', 'alotabi_color_hq', '01KMKFMH7345G5CNKMFY8D592E.png', 'image/png', 'public', 'public', 602722, '[]', '[]', '[]', '[]', 1, '2026-03-26 01:50:29', '2026-03-26 01:50:29'),
(4, 'App\\Models\\Testimonial', 1, 'afad479d-e9e3-45ac-a27b-24b07c1b6d64', 'photo', 'sean_color_hq', '01KMMJGB9N8TF4Y5KRPXH2CE6E.png', 'image/png', 'public', 'public', 653207, '[]', '[]', '[]', '[]', 1, '2026-03-26 11:59:52', '2026-03-26 11:59:52'),
(5, 'App\\Models\\Testimonial', 4, 'f174dd04-b445-4c0c-ad82-71e5868ee38d', 'photo', 'dalia_new_hq', '01KMMK73JAR6NNKA39ZCMJDDCA.png', 'image/png', 'public', 'public', 933957, '[]', '[]', '[]', '[]', 1, '2026-03-26 12:12:17', '2026-03-26 12:12:17'),
(6, 'App\\Models\\Testimonial', 5, 'bb062e06-6e16-49e4-9baf-14deed0ab511', 'photo', 'new_client2_hq', '01KMMKF6ZD04WDSZAABNB7X4ZK.png', 'image/png', 'public', 'public', 458587, '[]', '[]', '[]', '[]', 1, '2026-03-26 12:16:43', '2026-03-26 12:16:43'),
(7, 'App\\Models\\Testimonial', 6, '279270b5-1eb3-4ada-b0a9-c4345d9e068b', 'photo', 'Gemini_Generated_Image_fgezpgfgezpgfgez', '01KMMKMPSBPZ7TJWVYMM8985QH.png', 'image/png', 'public', 'public', 1518541, '[]', '[]', '[]', '[]', 1, '2026-03-26 12:19:43', '2026-03-26 12:19:43'),
(9, 'App\\Models\\Market', 1, '2b1c33c6-753f-4037-b605-512df17eb1e4', 'flag', 'eg', '01KMXZKG69RH3Y1MA50HMN209G.png', 'image/png', 'public', 'public', 291, '[]', '[]', '[]', '[]', 1, '2026-03-30 03:41:56', '2026-03-30 03:41:56'),
(10, 'App\\Models\\Market', 2, 'fd2060dd-43b3-4672-af89-c4709350aa9e', 'flag', 'ae', '01KMXZM2PS34QE9GW6GEDQ2AP6.png', 'image/png', 'public', 'public', 132, '[]', '[]', '[]', '[]', 1, '2026-03-30 03:42:15', '2026-03-30 03:42:15'),
(11, 'App\\Models\\Market', 3, 'd3f8c6cc-4c5d-449e-9117-a18eb6bc8378', 'flag', 'sa', '01KMXZMNYKFTFHET0JAMF7AWDP.png', 'image/png', 'public', 'public', 566, '[]', '[]', '[]', '[]', 1, '2026-03-30 03:42:35', '2026-03-30 03:42:35'),
(12, 'App\\Models\\Brand', 2, '912c5ccd-f30b-4ae1-808a-8c07b8c374d9', 'logo', 'carrefour', '01KMYWEE3M49CV5BQ8GMRQDQTD.png', 'image/png', 'public', 'public', 47126, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:05:59', '2026-03-30 12:05:59'),
(18, 'App\\Models\\Brand', 7, '150a0970-3c51-4f83-9848-2ed8f9d93435', 'logo', '1sheeld', '01KMYWSR2R7WRFMN02MR4TED6A.png', 'image/png', 'public', 'public', 24734, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:12:10', '2026-03-30 12:12:10'),
(22, 'App\\Models\\Brand', 10, '86c98d08-ccec-4ba6-ba0c-17ed7d2e03a7', 'logo', 'griffenworx', '01KMYX73S624Q83HKCTG9VE8NW.png', 'image/png', 'public', 'public', 55590, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:19:28', '2026-03-30 12:19:28'),
(23, 'App\\Models\\Brand', 11, '848113c1-3e32-4a34-94f0-cd083ec69ab7', 'logo', 'etisalat', '01KMYX7X2DXFDMN359A2AA4X3A.png', 'image/png', 'public', 'public', 46112, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:19:54', '2026-03-30 12:19:54'),
(25, 'App\\Models\\Brand', 13, '9aee44a9-8f8b-4314-8eb2-a78a6f839675', 'logo', 'unicef', '01KMYX9WT0JRZNRF3KA16P3ZHN.png', 'image/png', 'public', 'public', 9884, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:20:59', '2026-03-30 12:20:59'),
(27, 'App\\Models\\Brand', 15, 'da86b235-2b26-4622-b85f-b11a062ebdba', 'logo', 'zest', '01KMYXE3Z7CYRH03R5K259ND51.png', 'image/png', 'public', 'public', 11692, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:23:17', '2026-03-30 12:23:17'),
(29, 'App\\Models\\Brand', 17, 'c22b4ed8-657f-46ef-a5f2-041272f414aa', 'logo', 'Sellah_logo', '01KMYXPCGDKVY0Z8D8NA4Y3DF3.png', 'image/png', 'public', 'public', 6863, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:27:48', '2026-03-30 12:27:48'),
(31, 'App\\Models\\Brand', 18, '2598ba05-9509-4b0b-b7e6-ee0010eefd7e', 'logo', 'women-1', '01KMYY5GSPMDJTB6HY069MR09Q.png', 'image/png', 'public', 'public', 27774, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:36:04', '2026-03-30 12:36:04'),
(33, 'App\\Models\\PortfolioCta', 1, 'fb8fd284-cefb-43d0-bb2c-272b111b9697', 'portfolio_pdf', 'TCF_Product_Portfolio 2026', '01KMYYSPY0PFTFGSY8VYH61558.pdf', 'application/pdf', 'public', 'public', 2175785, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:47:06', '2026-03-30 12:47:06'),
(34, 'App\\Models\\Project', 1, '72e377df-bdd5-4f08-801f-18e9f963c8fc', 'project_image', 'carrefour_inspector_mockup', '01KMYZ2WT2SMP8QVS7T7G0W17Q.png', 'image/png', 'public', 'public', 662547, '[]', '[]', '[]', '[]', 1, '2026-03-30 12:52:07', '2026-03-30 12:52:07'),
(35, 'App\\Models\\Brand', 8, '475070a1-a4ed-4d4f-942b-7bfd738f62a8', 'logo', 'conari', '01KMZBESE1BTBVM0JBSGAXE3J2.png', 'image/png', 'public', 'public', 34394, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:28:19', '2026-03-30 16:28:19'),
(37, 'App\\Models\\Brand', 6, '558a78b1-018d-437f-bcc3-ffb6d3939904', 'logo', '271155951_109489164941885_4289049821296349098_n', '01KMZBHSWPCA1JAJXGP17T2KW9.jpg', 'image/jpeg', 'public', 'public', 342362, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:29:58', '2026-03-30 16:29:58'),
(38, 'App\\Models\\Brand', 5, 'f831ae35-731a-4360-93a2-508d40eae5c0', 'logo', 'images', '01KMZBQSWGN7ZPX263JC8YN8Y1.png', 'image/png', 'public', 'public', 8210, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:33:15', '2026-03-30 16:33:15'),
(39, 'App\\Models\\Brand', 4, 'd932dd7a-fc18-454f-9fd5-9a673cd5568b', 'logo', 'El-Booklets Vertical Stacked Logo', '01KMZBY8QXSHZ8TJ7G6GT96SKN.png', 'image/png', 'public', 'public', 2287827, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:36:46', '2026-03-30 16:36:46'),
(41, 'App\\Models\\Brand', 3, 'c1cc9887-aab5-46a2-a694-ab57df4620a8', 'logo', 'hedeya logo 3000 x 3000 with white stroke-4 (1)', '01KMZCAG5S1YY72THVDEHA2623.png', 'image/png', 'public', 'public', 458010, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:43:27', '2026-03-30 16:43:27'),
(43, 'App\\Models\\Brand', 9, '2c4ce629-9158-403f-bf44-06bc1e57553b', 'logo', '271155951_109489164941885_4289049821296349098_n', '01KMZCHJS8GYRKT5YQS408D0E6.png', 'image/png', 'public', 'public', 31023, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:47:19', '2026-03-30 16:47:19'),
(44, 'App\\Models\\Brand', 12, '5efba113-271b-4b4d-89f2-d5a6e6f3d400', 'logo', 'mamas gift logos (1)', '01KMZCMAN203M06F347MCJ2P2G.png', 'image/png', 'public', 'public', 101008, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:48:49', '2026-03-30 16:48:49'),
(45, 'App\\Models\\Brand', 16, 'a2a494b0-844b-4122-b24f-85d3192bda74', 'logo', 'Mazaareana-2', '01KMZCS2T7YA7YBT8HX58H1MFB.png', 'image/png', 'public', 'public', 19777, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:51:25', '2026-03-30 16:51:25'),
(46, 'App\\Models\\Brand', 1, '0692b9a5-3f11-486c-8f39-89491138ace5', 'logo', 'SALA HUB (1)', '01KMZCYXKXDKB7665GGHA77DG2.jpg', 'image/jpeg', 'public', 'public', 362972, '[]', '[]', '[]', '[]', 1, '2026-03-30 16:54:36', '2026-03-30 16:54:36'),
(48, 'App\\Models\\Brand', 14, '72e7e605-c563-4b11-8811-dcf156ad2f86', 'logo', 'wellthi', '01KMZDD1ZQR2QMY8V31EQGJ3AZ.png', 'image/png', 'public', 'public', 9986, '[]', '[]', '[]', '[]', 1, '2026-03-30 17:02:20', '2026-03-30 17:02:20');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_03_17_022500_create_projects_table', 1),
(5, '2026_03_17_022609_create_hero_settings_table', 1),
(6, '2026_03_17_022609_create_marquee_items_table', 1),
(7, '2026_03_17_022609_create_stats_table', 1),
(8, '2026_03_17_022610_create_process_steps_table', 1),
(9, '2026_03_17_022610_create_project_tags_table', 1),
(10, '2026_03_17_022610_create_services_table', 1),
(11, '2026_03_17_022611_create_brands_table', 1),
(12, '2026_03_17_022611_create_markets_table', 1),
(13, '2026_03_17_022611_create_testimonials_table', 1),
(14, '2026_03_17_022611_create_why_items_table', 1),
(15, '2026_03_17_022612_create_contact_settings_table', 1),
(16, '2026_03_17_022612_create_contact_submissions_table', 1),
(17, '2026_03_17_022612_create_portfolio_ctas_table', 1),
(18, '2026_03_17_022612_create_site_settings_table', 1),
(19, '2026_03_17_023423_create_personal_access_tokens_table', 1),
(20, '2026_03_17_025909_create_media_table', 1),
(21, '2026_03_17_201604_create_presence_locations_table', 1),
(22, '2026_03_17_201604_create_presence_settings_table', 1),
(23, '2026_03_31_075808_create_ecommerce_settings_table', 2),
(24, '2026_03_31_075813_create_ecommerce_capabilities_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_ctas`
--

CREATE TABLE `portfolio_ctas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `button_text` varchar(255) DEFAULT NULL,
  `pdf_path` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `portfolio_ctas`
--

INSERT INTO `portfolio_ctas` (`id`, `label`, `heading`, `description`, `button_text`, `pdf_path`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Company Portfolio', 'See the full scope of <span style=\"color:var(--cyan)\">our work.</span>', 'Download our company portfolio for a detailed overview of our services, past projects, technical capabilities, and client case studies.', '⬇ Download Portfolio', NULL, 1, '2026-03-18 22:19:13', '2026-03-30 12:47:06');

-- --------------------------------------------------------

--
-- Table structure for table `presence_locations`
--

CREATE TABLE `presence_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL COMMENT 'ISO country code, e.g. eg, sa, us',
  `num_id` varchar(255) DEFAULT NULL COMMENT 'Numerical country ID for D3 world map highlighting',
  `lng` decimal(10,7) NOT NULL,
  `lat` decimal(10,7) NOT NULL,
  `pos` varchar(255) NOT NULL DEFAULT 'center' COMMENT 'object-position for flag: center, left center, etc.',
  `role` varchar(255) DEFAULT NULL COMMENT 'e.g. Headquarters, Regional Office, Primary Market',
  `description` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `presence_locations`
--

INSERT INTO `presence_locations` (`id`, `name`, `code`, `num_id`, `lng`, `lat`, `pos`, `role`, `description`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Egypt', 'eg', '818', 28.0000000, 29.5000000, 'center', 'Headquarters', 'Our engineering hub and home base. Egypt powers TCF\'s full delivery engine — housing our development, design, and operations teams since 2015.', 0, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(2, 'Saudi Arabia', 'sa', '682', 43.0000000, 21.5000000, 'center', 'Primary Market', 'Our largest and most active market. We deliver end-to-end digital products for Saudi enterprises, fully aligned with Vision 2030 digital transformation goals.', 1, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(3, 'United Arab Emirates', 'ae', '784', 57.0000000, 24.5000000, 'left center', 'Regional Office', 'Our representative office in the UAE bridges us directly to Gulf clients — providing on-ground presence, regional account management, and faster response times.', 2, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(4, 'Kuwait', 'kw', '414', 50.0000000, 32.5000000, 'left center', 'Market Presence', 'Delivering custom software and digital transformation services to the Kuwaiti market.', 3, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(5, 'Turkey', 'tr', '792', 33.0000000, 41.0000000, 'center', 'Regional Market', 'Technical partnerships and development support for regional startups and enterprises.', 4, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(6, 'United States', 'us', '840', -98.0000000, 39.5000000, 'left center', 'Global Sales', 'Our presence in the US facilitates global technical partnerships and international software delivery.', 5, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(7, 'Germany', 'de', '276', 10.4515000, 51.1657000, 'center', 'Technical Partner', 'Expanding our technical infrastructure partnerships into Western Europe.', 6, 1, '2026-03-31 16:03:20', '2026-03-31 16:03:20');

-- --------------------------------------------------------

--
-- Table structure for table `presence_settings`
--

CREATE TABLE `presence_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `label` varchar(255) NOT NULL DEFAULT 'Our Presence',
  `heading_count` varchar(255) NOT NULL DEFAULT '6 Markets',
  `heading_standard` varchar(255) NOT NULL DEFAULT 'One standard.',
  `subtitle` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `presence_settings`
--

INSERT INTO `presence_settings` (`id`, `label`, `heading_count`, `heading_standard`, `subtitle`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Our Presence', '6 Markets', 'One standard.', 'From Cairo to San Francisco — delivering technology infrastructure across the Middle East, North Africa, Europe, and the Americas.', 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13');

-- --------------------------------------------------------

--
-- Table structure for table `process_steps`
--

CREATE TABLE `process_steps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon_svg` text DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `process_steps`
--

INSERT INTO `process_steps` (`id`, `icon_svg`, `title`, `description`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><line x1=\"16.5\" y1=\"16.5\" x2=\"22\" y2=\"22\"/><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"/><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"/></svg>', 'Discovery', 'We understand your business, users, and technical requirements before writing a single line of code.', 0, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(2, '<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"/><polyline points=\"2 17 12 22 22 17\"/><polyline points=\"2 12 12 17 22 12\"/></svg>', 'Architecture', 'We design the technical foundation — stack, data models, and system design — built to scale with your growth.', 1, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(3, '<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/><line x1=\"14\" y1=\"4\" x2=\"10\" y2=\"20\"/></svg>', 'Build & Iterate', 'Agile delivery with regular demos. You stay informed and in control throughout the development cycle.', 2, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(4, '<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z\"/><path d=\"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\"/><path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/></svg>', 'Launch & Support', 'Deployment, QA, and ongoing maintenance. We don\'t disappear after go-live — we stay as your tech partner.', 3, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `icon_svg` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `category`, `title`, `description`, `is_featured`, `icon_svg`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Featured · Booking Platform', 'Sala App', 'A full-featured booking and entertainment management platform for bowling alleys and karting tracks. Customers book online, operators manage capacity, and revenue flows seamlessly — all within one system built and maintained by TCF.', 1, NULL, 0, 1, '2026-03-18 22:19:13', '2026-03-31 16:04:05'),
(2, 'Retail · Inspection Tool', 'Carrefour Inspector', 'An internal mobile tool for store inspection workflows — digitizing checklists, tracking issues, and generating reports for Carrefour retail operations.', 0, NULL, 0, 1, '2026-03-18 22:19:13', '2026-03-31 16:04:05'),
(3, 'E-commerce · Consumer App', 'Dukkan El Baba', 'A consumer-facing shopping app with curated product discovery, seamless checkout, and vendor management tools built from the ground up.', 0, NULL, 0, 1, '2026-03-18 22:19:13', '2026-03-31 16:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `project_tags`
--

CREATE TABLE `project_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_tags`
--

INSERT INTO `project_tags` (`id`, `project_id`, `name`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 1, 'React Native', 1, '2026-03-18 22:19:13', '2026-03-30 12:52:07'),
(2, 1, 'Node.js', 2, '2026-03-18 22:19:13', '2026-03-30 12:52:07'),
(3, 1, 'PostgreSQL', 3, '2026-03-18 22:19:13', '2026-03-30 12:52:07'),
(4, 1, 'Payment Integration', 4, '2026-03-18 22:19:13', '2026-03-30 12:52:07'),
(5, 2, 'Mobile App', 0, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(6, 2, 'Offline Support', 0, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(7, 3, 'iOS & Android', 0, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(8, 3, 'Vendor Dashboard', 0, '2026-03-18 22:19:13', '2026-03-18 22:19:13');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon_svg` text DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `icon_svg`, `title`, `description`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\" opacity=\"0.4\"/></svg>', 'Custom Development', 'Tailor-made software built around your exact business workflows — mobile apps, web platforms, and internal systems designed from the ground up to fit how you operate.', 0, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(2, '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8\"/><path d=\"M12 17v4\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg>', 'UX Services', 'User experience that converts. From research and wireframes to polished UI — we design interfaces grounded in usability and refined through every interaction detail.', 1, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(3, '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>', 'Outsourcing Resources', 'Extend your team with senior engineers, designers, and PMs on demand. Flexible engagement models — dedicated resources or staff augmentation — that scale with your needs.', 2, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(4, '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11l3 3L22 4\"/><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"/></svg>', 'Technical Audit', 'A deep review of your existing codebase, architecture, and infrastructure. We identify risks, performance bottlenecks, and technical debt — and give you a clear remediation roadmap.', 3, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('E5jWTbyc5Ole271A7H8gMCPuIEIRcIKswVkpnPv7', 1, '41.64.34.63', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoicmpFU3dNMnd1SmZVWEx1VGVaQjF3SDRPdXI5SDhzTThDeEUza3NlYSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2NDoiMjZlMzk3MTEyZmMwNmMwZWY5YzBmMWMyZDc0ZDU3NTc2MTgyOTIzZjllYWJkNTFkY2MzODMxYjMyOGNlMGRhYiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjY6Imh0dHBzOi8vdGNmLmVsYm9va2xldHMuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjg6ImZpbGFtZW50IjthOjA6e319', 1774956827),
('G5jlA0AE5EkOvkD2vCsEcpcTbIvP77XOviYlbCGq', NULL, '156.195.197.83', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQURRbGJGZ2E0MUt0WnNtR1kzd3ZWMzFvblkyblNYbFUwZGRKV29uWCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjY6Imh0dHBzOi8vdGNmLmVsYm9va2xldHMuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1774946747),
('ihDDObacUV5QsRWiJ6MWE4nIuuCq4e25SBNiKxpK', NULL, '159.203.37.123', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTFR2aW40TXpmQmlzVlVKbm5rckRheUV4bUQ1ck52WXgySVhCSExPMiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzA6Imh0dHBzOi8vd3d3LnRjZi5lbGJvb2tsZXRzLmNvbSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1774958934),
('jNg7uvVcnxHCScRGEpyFMlAgnhMvhLMG5wUwUISO', NULL, '217.55.194.129', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUnMwZnR1QU13SGpPNExHVXNGVnZDdmVkalB1S2NFOW83MTJUYllyWSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjY6Imh0dHBzOi8vdGNmLmVsYm9va2xldHMuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1774950558),
('LrKJoqvonxfIqHUZw4FhIv2OPXocb1OhrXWs1D5Y', NULL, '217.55.194.129', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibDg2WTdXNjJ1V21GWXRqWHphc2FONHNmT1RRdUllejhTNDFNWldFdSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjY6Imh0dHBzOi8vdGNmLmVsYm9va2xldHMuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1774954212),
('Q1n2bykv1Xaa4lRR1SbFZM0PK1rBZJJKH8BggBTd', NULL, '217.55.194.129', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZEh6Q3RJQjc3d2tGZE9GVm1WOGNUTjZ3eGtLaGdFTUM0c2NDc1ViSyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjY6Imh0dHBzOi8vdGNmLmVsYm9va2xldHMuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1774946271),
('XufAepa996CvMKqTvVVrkl38zsWNW3uBVYJqYYct', 1, '156.195.197.83', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiekVZQVZDTG9YOVd1ekFaQ2xOdzU2M1FJbTQwM3NqVkFjVXp2VkdIQiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjY6Imh0dHBzOi8vdGNmLmVsYm9va2xldHMuY29tIjtzOjU6InJvdXRlIjtOO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM6InVybCI7YTowOnt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2NDoiMjZlMzk3MTEyZmMwNmMwZWY5YzBmMWMyZDc0ZDU3NTc2MTgyOTIzZjllYWJkNTFkY2MzODMxYjMyOGNlMGRhYiI7czo4OiJmaWxhbWVudCI7YTowOnt9fQ==', 1774958649);

-- --------------------------------------------------------

--
-- Table structure for table `site_settings`
--

CREATE TABLE `site_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `site_settings`
--

INSERT INTO `site_settings` (`id`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'footer_description', 'The Code Factory is a software engineering company headquartered in Egypt. Since 2015 we have been building and maintaining digital platforms across six markets for businesses that need more than a delivered product — they need a partner who stays.\nPills below: Egypt · Saudi Arabia · UAE · Kuwait · Turkey · USA · Germany ', '2026-03-30 03:57:54', '2026-03-30 17:03:28'),
(2, 'copyright', '© 2026 TCF. All Rights Reserved.', '2026-03-30 03:59:03', '2026-03-30 03:59:03'),
(3, 'facebook_url', 'https://web.facebook.com/TheCodeFactory.co?_rdc=1&_rdr#', '2026-03-30 03:59:19', '2026-03-30 13:09:39'),
(5, 'linkedin_url', 'https://eg.linkedin.com/company/thecodelab', '2026-03-30 03:59:45', '2026-03-30 13:14:06'),
(6, 'instagram_url', 'https://www.instagram.com/thecodefactorytcf/', '2026-03-30 03:59:57', '2026-03-31 12:05:34');

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `value` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stats`
--

INSERT INTO `stats` (`id`, `value`, `label`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '65+', 'COMPLETED PROJECTS', 0, 1, '2026-03-18 22:19:13', '2026-03-30 03:35:16'),
(2, '7', 'COUNTRIES SERVED', 2, 1, '2026-03-18 22:19:13', '2026-03-30 13:02:00'),
(3, '10+', 'YEARS EXPERIENCE', 1, 1, '2026-03-18 22:19:13', '2026-03-30 13:01:54');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `stars` tinyint(4) NOT NULL DEFAULT 5,
  `quote` text NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `author_role` varchar(255) DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `row_group` tinyint(4) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `photo_url`, `stars`, `quote`, `author_name`, `author_role`, `sort_order`, `row_group`, `is_active`, `created_at`, `updated_at`) VALUES
(1, NULL, 5, 'The high-performing The Code Factory team is always on top of it. Quick, quality responses linked to above and beyond support. We know our websites and systems are in good hands with The Code Factory.\n', 'Sean K. Griffin ', 'Griffen Worx CEO', 2, 1, 1, '2026-03-18 22:19:13', '2026-03-26 11:59:52'),
(2, NULL, 5, 'We\'ve worked with The Code Factory for over six years, and they\'ve become far more than a vendor — they\'re the technical backbone of Sala Hub. From building out our core booking infrastructure to delivering complex integrations and NFC-based access solutions, they\'ve handled every challenge with consistency and precision.. TCF has never given us a reason to worry\n', 'Mohammed Alotabi ', 'Sala Hub Technology Director ', 4, 2, 1, '2026-03-18 22:19:13', '2026-03-30 14:00:49'),
(3, NULL, 5, 'It was a pleasure working with The Code Factory team. They were able to launch our iOS and Android apps in a few months and it looks and works beautifully. The team worked on agile methodology which eases the process and eliminates the back-and-forth. The product management, communication and process are hands down the best I\'ve ever experienced. I would definitely recommend The Code Factory to my network.\n', 'Nancy Ali  ', 'Hedeya Stores CEO', 1, 1, 1, '2026-03-18 22:19:13', '2026-03-26 11:57:19'),
(4, NULL, 5, 'Working with you on Wellthi\'s government contracts feature has been a genuinely positive experience. The Code Factory is a reliable development partner that balances strong execution with a collaborative working style. We would not hesitate to work with you again or recommend your capable, caring and communicative team to others.\n', 'Dalia El Said', 'Wellthi - chief operating officer', 3, 1, 1, '2026-03-26 12:12:17', '2026-03-26 12:14:08'),
(5, NULL, 5, 'The Code Factory willingness to act as true partners in building ours is amazing. They helped us evaluate and select the right software vendor for our needs, provided hands-on resources to get the project off the ground, and then guided us through hiring and onboarding our own internal tech team. Very few firms will invest that deeply in a client\'s independence\n', 'Medhat El- Qadi', 'Abou Ghaly Motors Technology Director', 5, 2, 1, '2026-03-26 12:16:43', '2026-03-26 12:20:10'),
(6, NULL, 5, 'No documentation. No clear specs. A codebase five years out of date. TCF took on Shamel when the path forward was anything but obvious — and they made it work. That kind of problem-solving is exactly what we needed, and exactly what they delivered.\n', 'Muataz Saleh', 'Obeikan Head of business development  ', 6, 2, 1, '2026-03-26 12:19:43', '2026-03-26 12:20:04');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', '2026-03-18 22:19:13', '$2y$12$DxUHD6Z6xy0S0YoGqCuhx.i9x/qf8A97ePzC.km5RUHxAakYHl0ei', 'dE0geDfTSi', '2026-03-18 22:19:13', '2026-03-18 22:19:13');

-- --------------------------------------------------------

--
-- Table structure for table `why_items`
--

CREATE TABLE `why_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon_svg` text DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `why_items`
--

INSERT INTO `why_items` (`id`, `icon_svg`, `title`, `description`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/></svg>', 'We Act as Partners, Not Vendors', 'We take long-term ownership of your technology. Our relationship doesn\'t end at delivery — it deepens over time as your needs evolve.', 0, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(2, '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/><path d=\"M2 12h2M20 12h2M12 2v2M12 20v2\"/></svg>', 'Always Available', 'We\'re reachable when it matters. Whether it\'s a critical bug at midnight or an urgent client demo, TCF stays on-call and responsive throughout the lifetime of your product.', 1, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(3, '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"7\" y=\"7\" width=\"10\" height=\"10\" rx=\"1\"/><line x1=\"9\" y1=\"7\" x2=\"9\" y2=\"4\"/><line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"4\"/><line x1=\"15\" y1=\"7\" x2=\"15\" y2=\"4\"/><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"17\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"17\"/><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"17\"/><line x1=\"7\" y1=\"9\" x2=\"4\" y2=\"9\"/><line x1=\"7\" y1=\"12\" x2=\"4\" y2=\"12\"/><line x1=\"7\" y1=\"15\" x2=\"4\" y2=\"15\"/><line x1=\"20\" y1=\"9\" x2=\"17\" y2=\"9\"/><line x1=\"20\" y1=\"12\" x2=\"17\" y2=\"12\"/><line x1=\"20\" y1=\"15\" x2=\"17\" y2=\"15\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"#00B4D8\"/></svg>', 'AI-Powered Development', 'We integrate AI into the products we build — from intelligent automation and LLM-powered features to smart analytics — giving your business a genuine competitive edge.', 2, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(4, '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/><line x1=\"6\" y1=\"11\" x2=\"6\" y2=\"11.01\"/><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"11.01\"/><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"11.01\"/><line x1=\"18\" y1=\"11\" x2=\"18\" y2=\"11.01\"/><line x1=\"6\" y1=\"15\" x2=\"6\" y2=\"15.01\"/><line x1=\"18\" y1=\"15\" x2=\"18\" y2=\"15.01\"/></svg>', 'SME-Native Thinking', 'We understand the constraints and pace of growing businesses. Our solutions are right-sized — powerful where it matters, lean where it doesn\'t.', 3, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(5, '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg>', 'Gulf Market Experience', 'Proven delivery in Saudi Arabia and UAE. We understand local compliance, payment ecosystems, and user expectations in these markets.', 4, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13'),
(6, '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00B4D8\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11l3 3L22 4\"/><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"/></svg>', 'Transparent & Structured Process', 'No black boxes. You get clear timelines, consistent communication, and full visibility into progress at every stage of the project.', 5, 1, '2026-03-18 22:19:13', '2026-03-18 22:19:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `contact_settings`
--
ALTER TABLE `contact_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ecommerce_capabilities`
--
ALTER TABLE `ecommerce_capabilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ecommerce_settings`
--
ALTER TABLE `ecommerce_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `hero_settings`
--
ALTER TABLE `hero_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `markets`
--
ALTER TABLE `markets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `marquee_items`
--
ALTER TABLE `marquee_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `media_uuid_unique` (`uuid`),
  ADD KEY `media_model_type_model_id_index` (`model_type`,`model_id`),
  ADD KEY `media_order_column_index` (`order_column`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `portfolio_ctas`
--
ALTER TABLE `portfolio_ctas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `presence_locations`
--
ALTER TABLE `presence_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `presence_settings`
--
ALTER TABLE `presence_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `process_steps`
--
ALTER TABLE `process_steps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_tags`
--
ALTER TABLE `project_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_tags_project_id_foreign` (`project_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `site_settings_key_unique` (`key`);

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `why_items`
--
ALTER TABLE `why_items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `contact_settings`
--
ALTER TABLE `contact_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecommerce_capabilities`
--
ALTER TABLE `ecommerce_capabilities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ecommerce_settings`
--
ALTER TABLE `ecommerce_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hero_settings`
--
ALTER TABLE `hero_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `markets`
--
ALTER TABLE `markets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `marquee_items`
--
ALTER TABLE `marquee_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portfolio_ctas`
--
ALTER TABLE `portfolio_ctas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `presence_locations`
--
ALTER TABLE `presence_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `presence_settings`
--
ALTER TABLE `presence_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `process_steps`
--
ALTER TABLE `process_steps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project_tags`
--
ALTER TABLE `project_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `site_settings`
--
ALTER TABLE `site_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `why_items`
--
ALTER TABLE `why_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project_tags`
--
ALTER TABLE `project_tags`
  ADD CONSTRAINT `project_tags_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
