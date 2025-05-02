# 🚗 Velocity Car Shop

A modern, responsive e-commerce car shop built with **React**, **TypeScript**, and **Redux Toolkit**. Velocity Car Shop offers a smooth experience for customers to browse, search, and purchase cars while providing a robust admin dashboard for managing products, users, and orders with role-based access.

---

## 🔗 Live Preview

- 🌐 [Client Live Site](https://velocity-car-shop.vercel.app/)  
- 👷 [Backend GitHub Repository](https://github.com/ifajul89/velocity-backend)

---

## 📌 Project Overview & Objective

**Objective:** Build a car shop platform with secure authentication, seamless product browsing, purchase capabilities, and full admin control. The platform aims to be intuitive, visually appealing, responsive, and error-free.

---

## 🧬 Key Functionalities

### 🔐 User Authentication & Role-Based Access

- **Registration**: Users can register with name, email, and password.
- **Login**: Secure login using JWT; token is stored in local storage.
- **Role-Based Access**: Registered users default to "user" role. Admin must be updated manually.
- **Logout**: Clears token and redirects to login page.
- **Password Security**: Passwords are hashed before storing.

---

### 🌐 Public Pages

#### 🏠 Home Page

- Logo, navigation, and CTA buttons (login/signup).
- Carousel banner with promotions.
- Featured Products (max 6) with "View All" link.
- Extra sections like testimonials/blogs.
- Footer with contact and social links.

#### 🚘 All Products Page

- **Search**: By brand, car name, or category.
- **Filters**: By price range, model, brand, category, and stock status.
- **Dynamic Results**: Real-time updates on filter/search.
- **Product Cards**: Name, brand, model, price, and category.
- **Details Link**: “View Details” button for each product.

#### 📄 Product Details Page

- Full product info with image.
- “Buy Now” button to redirect to checkout.

#### ℹ️ About Us

- Description of business, mission, and team.

---

### 🔒 Private Pages

#### 🛒 Checkout Page

- Only accessible by authenticated users.
- Validates stock availability.
- Order form with product info, user details, total price, and SurjoPay integration.
- “Order Now” button for confirmation.

#### 📊 Role-Based Dashboards

- **User Dashboard**
  - View orders with details.
  - Update profile and password (requires current password).
  - Track order status (Pending, Processing, Shipped, Delivered).

- **Admin Dashboard**
  - Manage users (deactivate accounts).
  - Full product management (CRUD).
  - Full order management (CRUD).
  - Update order statuses and set estimated delivery dates.

---

## 🎨 UI/UX Design

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Error Handling**:
  - Friendly messages for login, registration, and operations.
  - Clear feedback for out-of-stock or failed actions.
- **Loading States**: Spinners during API calls.
- **Toasts**: Success/failure notifications (e.g., "Login Successful", "Order Placed").

---

## 🌟 Optional Features

### 📦 Track Order (User)

- Visual progress bar for order stages.
- Dedicated "Track My Order" section with:
  - Order ID
  - Product details
  - Estimated delivery
  - Status updates

### 🔧 Order Management (Admin)

- Dropdown to update status.
- Field for estimated delivery date.
- Real-time reflection on user side.

---

## 🛠 Tech Stack

- **React 19 + TypeScript**
- **Redux Toolkit + RTK Query**
- **React Router DOM**
- **TailwindCSS**
- **Radix UI**
- **React Hook Form**
- **Recharts (Analytics)**

---




## 📁 Folder Structure

```
src/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── redux/
├── routes/
└── utils/
```
