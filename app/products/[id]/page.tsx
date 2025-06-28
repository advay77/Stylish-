import { notFound } from "next/navigation";
import { products, Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((p: Product) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl object-cover shadow-lg border-4 border-pink-200"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-violet-900 mb-2 gradient-text">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-semibold">
                Fabric: {product.fabric}
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">
                Color: {product.color}
              </span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-violet-800 hover:bg-violet-900 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow transition-colors">
              Add to Cart
            </button>
            <Link href="/products" className="flex-1 bg-gray-100 hover:bg-gray-200 text-violet-800 py-3 px-6 rounded-lg font-semibold text-lg shadow text-center transition-colors">
              Back to Products
            </Link>
          </div>
        </div>
        {/* Cool background effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      </div>
    </div>
  );
}
