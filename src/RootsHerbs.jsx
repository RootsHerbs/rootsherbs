import React from "react";
import Button from './Button';
import { Card, CardContent } from "./components/ui/card";
import { Leaf, ShoppingCart, Phone } from "lucide-react";

export default function RootsHerbs() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 p-4 md:p-10 font-sans">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Leaf className="text-green-700" /> RootsHerbs
        </h1>
        <Button className="bg-green-700 hover:bg-green-800">
          <a href="https://wa.me/c/2348064023068" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Phone size={18} /> Order on WhatsApp
          </a>
        </Button>
      </header>

      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Nature’s Cure, Delivered to Your Door</h2>
        <p className="text-lg max-w-xl mx-auto">
          Discover potent herbal remedies tailored for both men and women. Boost your health the natural way — even while you sleep.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="hover:shadow-lg transition">
              <CardContent className="p-4">
                <div className="h-40 bg-green-100 mb-4 rounded"></div>
                <h4 className="text-lg font-semibold mb-2">Herbal Product {id}</h4>
                <p className="text-sm mb-3">Powerful blend of natural ingredients for wellness and vitality.</p>
                <Button className="bg-green-700 w-full">
                  <a href="https://wa.me/c/2348064023068" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ShoppingCart size={16} /> Order Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-green-800">
        &copy; {new Date().getFullYear()} RootsHerbs. All rights reserved.
      </footer>
    </div>
  );
}
