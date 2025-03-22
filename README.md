# 🧁 Dessert Shop

A delightful e-commerce application for ordering delicious desserts online. This project provides a simple and intuitive interface for browsing desserts and managing a shopping cart.

![Dessert Shop Screenshot](https://images2.imgbox.com/39/3e/pngFh0O1_o.png)

## ✨ Features

- **Product Display**: Browse a variety of delicious desserts with images, categories, and prices
- **Shopping Cart**: Add items to cart, view cart contents, and remove items as needed
- **Persistent Cart**: Cart data is stored in localStorage, persisting between page reloads
- **Cross-Tab Synchronization**: Cart updates sync across multiple browser tabs
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing experiences
- **Checkout Process**: Simple checkout with order confirmation notification

## 🚀 Technologies Used

- React.js
- Local Storage API
- CSS with SCSS
- Responsive Design principles
- Tailwind CSS

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EthicalGopher/frontendmentor-ecomerce-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd frontendmentor-ecomerce-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## 🔧 Usage

- Browse the available desserts on the main page
- Click "Add to cart" to add a dessert to your shopping cart
- View your cart on the right side of the screen
- Remove items by clicking the "✕" button next to them
- Click "Checkout" to complete your order (currently shows a success message)
- Click "Clear Cart" to empty your cart

## 🧪 Code Structure

- `Home`: Main component rendering the product listing and cart
- `Card`: Component for displaying individual dessert items
- `Cart`: Component for managing the shopping cart functionality
- Local storage is used to persist cart data between sessions




## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgements

- Project by Frontend Mentor
