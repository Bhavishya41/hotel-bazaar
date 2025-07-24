'use client';

import { useCart } from '@/hooks/useCart';
import CartItem from '@/components/CartItem';
import Button from '@/components/Button';
import { useEffect } from 'react';

export default function CartPage() {
  const { items, getTotalPrice, clearCart } = useCart();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    console.log('CartPage localStorage:', savedCart);
  }, []);

  if (items.length === 0) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is empty</p>
        <Button href="/products">Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={`${item.product._id}-${item.selectedOptions}`} item={item} />
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>Rs. {getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>Rs. {getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full mb-4">Proceed to Checkout</Button>
          <Button variant="outline" onClick={clearCart} className="w-full">
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}