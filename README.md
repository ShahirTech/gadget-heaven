# Gadget Heaven - E-commerce Website

## Live Website Link

You can view the live version of the project here:  
**[Live WebApp](https://tech-gadget-heaven.netlify.app/)**

## Requirement Document Link

You can find the detailed requirements document for the project here:  
**[Document Link](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)**

---

## React Fundamental Concepts Used in the Project

This project utilizes several core React concepts. Here's a list of the key ones used:

1. **Functional Components**: The project is based on functional components with hooks, rather than class components.
2. **useState Hook**: Used for managing local component state like `isModalOpen`, `cart`, `wishlist`, and active button states.
3. **useEffect Hook**: Handles side effects like setting the document title, running scroll functions, and triggering actions after state updates.
4. **useContext Hook**: Used for consuming global data, including cart and wishlist data, from the `GadgetContext`.
5. **Conditional Rendering**: Utilized for showing the appropriate UI elements (e.g., when cart is empty, or displaying modals).
6. **React Router**: Used for navigation across different pages (e.g., product details, cart, wishlist, etc.).
7. **State Lifting**: Through context, state is lifted to a central place (`GadgetContext`), allowing multiple components to consume and update shared data.
8. **Dynamic Rendering**: Dynamically renders product data, updates cart details, and handles conditions based on whether items are in the cart or wishlist.

---

## Data Handling & Management

This project uses the following techniques for handling and managing data:

1. **Context API**:
   - The `GadgetContext` is used for managing global state across multiple components. It holds the cart, wishlist, and other shared data.
   - Context helps in passing data like `cart`, `wishlist`, and functions like `addToCart`, `removeFromCart`, `addToWishlist`, etc., throughout the application without having to pass props manually at every level.

2. **Local Storage (Optional)**:
   - If you're planning to implement local storage persistence, you can store cart and wishlist data in `localStorage` to retain the user's data across page reloads.
   - The app could be updated to retrieve data from `localStorage` upon initial load and sync the context state accordingly.

---

## Features of the Website

Here are five key features of the **Gadget Heaven** e-commerce website:

1. **Product Browsing & Filtering**:
   - Users can explore a wide variety of gadgets in different categories (e.g., laptops, phones, power banks, etc.). Filtering functionality allows users to view products by category.

2. **Add to Cart & Wishlist**:
   - Users can add products to the cart and wishlist, with real-time feedback via toast notifications. The website prevents adding the same item multiple times to the cart and wishlist.

3. **Dynamic Cart & Wishlist Management**:
   - The cart allows users to view, sort (in descending price order), and remove items. The wishlist enables easy removal of products and adding them directly to the cart.

4. **Purchase Flow with Success Modal**:
   - Upon completing a purchase, users are shown a success modal confirming the purchase. The cart is cleared, and the user is notified with a toast.

5. **Responsive Design**:
   - The website is fully responsive, adapting to mobile, tablet, and desktop views. It ensures that users have a seamless experience across devices.

---

## Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShahirTech/gadget-heaven.git
