# 🛒 Modern React E-Commerce Cart

A fully functional shopping cart application built to demonstrate modern web development practices. This project fetches real product data from an external API and allows users to browse products, manage their cart, and see dynamic pricing updates in real-time.

## 🚀 Tech Stack
* **Framework:** React (Vite)
* **Language:** TypeScript (for type safety)
* **Styling:** Tailwind CSS (Responsive Grid & Flexbox)
* **API:** FakeStoreAPI
* **Icons:** Lucide-React

## ✨ Key Features
* **Dynamic Product Feed:** Asynchronously fetches product data using `useEffect` and `fetch`.
* **Smart Cart Logic:** * Add items (prevents duplicates, increments quantity).
    * Remove items (filters state array).
    * Real-time total price calculation using `.reduce()`.
* **Responsive Layout:** * **Desktop:** 3-column product grid with a sticky sidebar cart.
    * **Mobile:** Stacked layout for easy scrolling.
* **Type Safety:** Custom Interfaces for `Product` and `CartItem` to prevent runtime errors.

## 🛠️ How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/my-eshop.git](https://github.com/YOUR_USERNAME/my-eshop.git)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## 📸 Screenshots
<img width="1111" height="964" alt="Capture" src="https://github.com/user-attachments/assets/0b2cf942-d230-4eed-9a64-165732a31221" />

## 💡 What I Learned
Building this project helped me master:
* React Hooks (`useState`, `useEffect`).
* Passing functions as props between Parent and Child components.
* The importance of Immutability when updating state arrays.
* Structuring a scalable React project with separate components.
