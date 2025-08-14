# 🛒 E-Commerce Backend (Alibaba Clone Style)

This is the **backend** for an e-commerce application inspired by *Alibaba*, built with **Node.js**, **Express**, and **MongoDB**.  
It includes authentication with OTP email verification, a secure access & refresh token system, and robust API endpoints for managing buyers, suppliers, products, categories, and carts.

---

## 📦 Dependencies

| Package                  | Purpose |
|--------------------------|---------|
| bcrypt                   | Password hashing |
| cookie-parser            | Parse cookies in requests |
| cors                     | Enable CORS for API requests |
| cros                     | (Likely a typo, not commonly used) |
| dotenv                   | Load environment variables |
| express                  | Web framework for Node.js |
| express-validator        | Validate and sanitize request data |
| jsonwebtoken             | Access & refresh token authentication |
| mongoose                 | MongoDB ODM |
| multer                   | Handle file uploads |
| multer-storage-cloudinary| Store uploaded files on Cloudinary |
| nodemailer               | Send OTP emails for verification |

---

## 🚀 Features

### 🔐 Authentication
- User registration with **OTP email verification** (nodemailer)
- Login with secure password hashing (bcrypt)
- Access & refresh tokens for authentication (jsonwebtoken)
- Role-based authentication for **buyers** and **suppliers**

### 🛍 Product Management
- Add, update, delete products (with **Cloudinary** image uploads)
- Product categories with automatic slug generation
- Product recommendations & related products
- Product search & filtering

### 🛒 Cart System
- Add, remove, and view items in cart
- Buyer authentication for cart operations

### 👤 User Management
- Buyer profile retrieval
- Supplier profile update with form validation
- Secure logout functionality

### 📦 Other Features
- File uploads via **multer** and **multer-storage-cloudinary**
- Input validation with **express-validator**
- Secure cookies and CORS configuration

---

## ⚙ Installation & Setup

### 📥 Clone the repository
```bash
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend/backend 

## 📡 API Endpoints Overview

### 🔑 Authentication Routes (`/user`)
| Method | Endpoint        | Description |
|--------|-----------------|-------------|
| POST   | `/register`     | Register new user with OTP email verification |
| POST   | `/signin`       | Login with email & password |
| POST   | `/verify-email` | Verify OTP sent to email |
| POST   | `/resend-email` | Resend OTP to email |

### 🛍 Buyer Routes (`/buyer`)
| Method | Endpoint         | Description |
|--------|------------------|-------------|
| GET    | `/profile`       | Get buyer profile (protected) |
| POST   | `/refresh-token` | Refresh access token |
| POST   | `/logout`        | Logout buyer (protected) |

### 📦 Supplier Routes (`/supplier`)
| Method | Endpoint             | Description |
|--------|----------------------|-------------|
| GET    | `/profile`           | Get supplier profile (protected) |
| PUT    | `/update-profile`    | Update supplier profile (with file upload & validation) |
| POST   | `/add-product`       | Add a product (upload images, validation) |
| GET    | `/get-products`      | Get supplier's products |
| DELETE | `/delete/:productId` | Delete a product |
| POST   | `/logout`            | Logout supplier |

### 🛒 Cart Routes (`/cart`)
| Method | Endpoint   | Description |
|--------|------------|-------------|
| POST   | `/add`     | Add item to cart |
| DELETE | `/remove`  | Remove item from cart |
| GET    | `/items`   | Get cart items |

### 📂 Product Routes (`/product`)
| Method | Endpoint                | Description |
|--------|-------------------------|-------------|
| GET    | `/categories`           | Get all product categories |
| GET    | `/recommended`          | Get recommended new products |
| GET    | `/electronics-products` | Get electronics category products |
| GET    | `/detail/:productId`    | Get product details |
| GET    | `/related`              | Get related products |
| GET    | `/search`               | Search products |

---

## 📜 License

This project is licensed under the **MIT License**.

> **Note:** The dependency `"cros": "^1.1.0"` might be a typo for `"cors"`.  
> If not intentional, replace or remove it in `package.json`.