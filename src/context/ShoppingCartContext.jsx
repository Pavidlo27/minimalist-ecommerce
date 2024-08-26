import React, { createContext } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { toast } from 'sonner'

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return React.useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('shopping-cart', [])
  const [isOpen, setIsOpen] = React.useState(false)

  const openCart = () => {
    setIsOpen(true)
    document.body.classList.add('no-scroll'); // Disable background scrolling
  }
  const closeCart = () => {
    setIsOpen(false)
    document.body.classList.remove('no-scroll'); // Re-enable background scrolling
  }

  const cartQuantity = cart.length

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      toast.success(`${item.name} added to cart`)
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If it exists, update the quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        // If it doesn't exist, add it to the cart
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };




  return (
    <ShoppingCartContext.Provider value={{ addToCart, removeFromCart, closeCart, openCart, cart, cartQuantity }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}