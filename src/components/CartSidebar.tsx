import React from 'react';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="bg-white p-6 rounded shadow sticky top-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Your Cart ({cartItems.length} items)
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" />
                  <div className="flex flex-col">
                    <p className="font-medium text-sm text-gray-700 w-25 truncate">{item.title}</p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <p className="bg-gray-100 px-2 py-1 rounded text-sm font-bold">
                    x{item.quantity}
                  </p>

                  {/* THE REMOVE BUTTON */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-bold p-1 ml-2"
                    title="Remove Item"
                  > ✕ </button>
                </div>

              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className="w-full mt-4 bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition-colors"
              onClick={() => alert(`Checkout complete! Total: $${totalPrice.toFixed(2)}`)}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};