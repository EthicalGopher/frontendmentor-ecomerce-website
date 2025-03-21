import { useEffect, useState } from "react";
import "./App.scss";

// Fixed array brackets in the 'about' constant
const about = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-waffle-mobile.BbIxZzX5.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-waffle-desktop.BeKU8TR7.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-waffle-desktop.JuW3S53O.webp",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-creme-brulee-mobile.cVgILTB5.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-creme-brulee-desktop.CkdK7Qhm.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-creme-brulee-desktop.CHRQUMjJ.webp",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-macaron-mobile.BnGJ0KGp.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-macaron-desktop.CBMaUKn9.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-macaron-desktop.DrF8-GAf.webp",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-tiramisu-mobile.B4TYxoF2.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-tiramisu-desktop.D9gOoe61.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-tiramisu-desktop.0hwqbJQ5.webp",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-baklava-mobile.BJML_ycI.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-baklava-desktop.DGHabshr.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-baklava-desktop.Hd1epszt.webp",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-meringue-mobile.C9o3TaeR.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-meringue-desktop.B2u33szW.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-meringue-desktop.MZLQuiMU.webp",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-cake-mobile.DgKQOJUr.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-meringue-desktop.B2u33szW.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-cake-desktop.Di5sDdnv.webp",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-cake-mobile.DgKQOJUr.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-cake-desktop.DdVWYd3N.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-brownie-desktop.DnL7SexB.webp",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-brownie-mobile.CPUVzfsw.webp",
      tablet:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-brownie-desktop.CBKy_HCM.webp",
      desktop:
        "https://product-list-with-cart-fm.netlify.app/_app/immutable/assets/image-panna-cotta-desktop.CueLJsno.webp",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

export default function Home() {
  // Initialize cart state from localStorage or empty array
  const [cart, setCart] = useState(() => {
    // Try to get the cart from localStorage during initialization
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("dessert-cart");
      if (savedCart) {
        try {
          return JSON.parse(savedCart);
        } catch (error) {
          console.error("Error parsing cart from localStorage:", error);
          return [];
        }
      }
    }
    return [];
  });

  function handleCart(item) {
    if (item) {
      console.log("Adding to cart:", item); // Debug: Check what's being added
      setCart((prevCart) => {
        const newCart = [...prevCart, item];
        console.log("Updated cart:", newCart); // Debug: Check the updated cart

        // Save to localStorage immediately after state update
        if (typeof window !== "undefined") {
          localStorage.setItem("dessert-cart", JSON.stringify(newCart));
          console.log("Saved to localStorage:", newCart); // Debug: Verify localStorage save
        }

        return newCart;
      });
    }
  }

  // We can still use this effect to log cart updates, but localStorage saving is now done in handleCart
  useEffect(() => {
    console.log("Cart state changed:", cart); // Debug: Verify cart updates
  }, [cart]);

  // Add event listener for storage changes to sync across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "dessert-cart") {
        try {
          const newCart = JSON.parse(e.newValue);
          setCart(newCart);
        } catch (error) {
          console.error("Error handling storage event:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <div className="p-10 sm:p-5 lg:container mx-auto mt-6 md:flex justify-between">
        <div className="flex flex-col gap-10 ">
          <h1 className="text-5xl text-black font-bold">Desserts</h1>
          <div className="flex flex-col lg:flex-row    ">
            <div className="flex flex-wrap gap-20 lg:px-10  ">
              {about.map((item, index) => (
                <Card key={index} about={item} handleCarts={handleCart} />
              ))}
            </div>
            <div className="flex justify-center">
              <Cart
                cartItems={cart}
                setCart={setCart}
                removeItem={(index) => {
                  const newCart = [...cart];
                  newCart.splice(index, 1);
                  setCart(newCart);
                  localStorage.setItem("dessert-cart", JSON.stringify(newCart));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Card({ about, handleCarts }) {
  return (
    <>
      <div className="">
        <div style={{ position: "relative" }} className="mb-10">
          <img
            src={about.image?.mobile || "default-mobile-image.jpg"}
            alt={about.name}
            className="md:hidden rounded-lg"
          />
          <img
            src={about.image?.tablet || "default-tablet-image.jpg"}
            alt={about.name}
            width={200}
            className="md:block lg:hidden hidden rounded-s-lg"
          />
          <img
            src={about.image?.desktop || "default-desktop-image.jpg"}
            alt={about.name}
            className="lg:block hidden rounded-s-lg"
          />
          <div
            style={{ position: "absolute", width: "100%", top: "90%" }}
            className="flex justify-center"
          >
            <button
              className="bg-white w-36 h-12 rounded-3xl text-black flex gap-3 items-center justify-center border rose"
              onClick={() => {
                handleCarts(about);
               
              }}
            >
              <span>
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='20'%20fill='none'%20viewBox='0%200%2021%2020'%3e%3cg%20fill='%23C73B0F'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.583%2018.75a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM15.334%2018.75a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM3.446%201.752a.625.625%200%200%200-.613-.502h-2.5V2.5h1.988l2.4%2011.998a.625.625%200%200%200%20.612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625%200%200%200%20.61-.49l1.417-6.385h-1.28L16.083%2010H5.096l-1.65-8.248Z'/%3e%3cpath%20d='M11.584%203.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M.333%200h20v20h-20z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="cart icon"
                />
              </span>
              <span className="rose">Add to cart</span>
            </button>
          </div>
        </div>
        <div className="text-black">
          <p className="text-sm" style={{ color: "hsl(12, 20%, 44%)" }}>
            {about.category}
          </p>
          <p className="font-bold text-xl " style={{ maxWidth: "200px" }}>
            {about.name}
          </p>
          <p className="text-md text-red-500">${about.price}</p>
        </div>
      </div>
    </>
  );
}

export function Links() {
  return [{ rel: "stylesheet", href: HomeStyle }];
}

export function Cart({ cartItems = [], removeItem, setCart }) {
  const [total, setTotal] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate total whenever cart changes
  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
    setTotal(calculatedTotal);
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setShowSuccess(true);
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        // Clear cart after successful checkout
        localStorage.removeItem("dessert-cart");
        setCart([]);
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex md:block w-sm justify-center mt-5 py-10 lg:py-0 lg:mt-0 items-center ">
        <div
          className="text-black bg-white p-4 rounded-lg shadow-md"
          style={{ Width: "327px", minWidth: "300px", minHeight: "236px" }}
        >
          <h2 className="font-bold text-2xl text-orange-600 mb-4 ">
            Your Cart ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (
            <div className="flex flex-col justify-center  text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                fill="none"
                viewBox="0 0 128 128"
                className=" w-full"
              >
                <path
                  fill="#260F08"
                  d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z"
                  opacity="0.15"
                ></path>
                <path
                  fill="#87635A"
                  d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"
                ></path>
                <path
                  fill="#AD8A85"
                  d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"
                ></path>
                <path
                  fill="#CAAFA7"
                  d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"
                ></path>
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.974"
                  d="m81.076 28.966 34.187-4.16"
                ></path>
                <path
                  fill="#87635A"
                  d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"
                ></path>
                <path
                  fill="#AD8A85"
                  d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"
                ></path>
                <path
                  fill="#CAAFA7"
                  d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"
                ></path>
                <path
                  fill="#87635A"
                  d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"
                ></path>
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.974"
                  d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"
                ></path>
              </svg>
              <p className="text-gray-500">Your added items will appear here</p>
            </div>
          ) : (
            <>
              <div className="max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item, index) => (
                  <div
                  key={index}
                    className="flex justify-between items-center mb-2 pb-2 "
                  >
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={item.image?.mobile || "default-thumbnail.jpg"}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded mx-2"
                      />
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-500 ml-2 p-1"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center font-bold py-2 ">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button 
                className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition-colors"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <button
                className="w-full border border-gray-300 text-gray-600 py-2 rounded-md mt-2 hover:bg-gray-100 transition-colors"
                onClick={() => {
                  if (confirm("Are you sure you want to clear your cart?")) {
                    // Clear localStorage
                    localStorage.removeItem("dessert-cart");
                    // Reset cart state to empty array
                    setCart([]);
                  }
                }}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>

      {/* Success notification */}
      {showSuccess && (
        <div 
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            backgroundColor: "white",
            color: "black",
            padding: "20px 40px",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
           scrollbarWidth:"0px",
            maxWidth: "90%",
            height:"auto",
            
          }}
          className="min-w-xl h-100"
        >
          <div className="text-3xl mb-2 text-green-200  p-10">✓</div>
          <div className="text-5xl font-bold text-black ">Order Confirmed</div>
          <div className="mt-2 text-sm">We hope you enjoy your food!</div>
          <div className="max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item, index) => (
                  <div
                  key={index}
                    className="flex justify-between items-center mb-2 pb-2 "
                  >
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={item.image?.mobile || "default-thumbnail.jpg"}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded mx-2"
                      />
                       </div>
                  </div>
                ))}
                </div>

                <button className="bg-orange-600 w-100 text-2xl text-white font-semibold h-16 flex items-center justify-center rounded-full">Thank You</button>
        </div>

      )}
    </>
  );
}