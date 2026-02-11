import { useState, useEffect } from 'react';
import { CartSidebar, type CartItem } from './components/CartSidebar';

// --- Interfaces ---
interface ShopProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function App() {
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // --- 1. Fetch Data ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json() as ShopProduct[];
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // --- 2. Add to Cart ---
  const addToCart = (product: ShopProduct) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        return [...prevCart, newItem];
      }
    });
  };

  /// --- 3. Remove from Cart ---
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-400 min-h-screen p-8">
      
      {/* --- PAGE LAYOUT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* --- LEFT SIDE: PRODUCTS --- */}
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold text-blue-600 mb-8">
            My E-Shop 🛒
          </h1>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow flex flex-col h-full">
                <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
                <h2 className="text-xl font-bold line-clamp-2">{product.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <p className="text-green-500 font-bold text-xl">${product.price}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: CART --- */}
        <div className="lg:col-span-1">
          <CartSidebar 
            cartItems={cart} 
            removeFromCart={removeFromCart}
          />
        </div>

      </div>
    </div>
  );
}

export default App;