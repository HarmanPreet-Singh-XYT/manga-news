'use client'
import { useState, useEffect } from 'react';
import { Search, Star, Flame as Fire, ChevronRight, ShoppingCart, Tag, Heart, 
         BookOpen, Shirt as TShirt, Activity, Eye, X, Menu, ArrowRight,
         ChevronDown, ChevronUp, Clock, Trophy, AlertTriangle, 
         ChevronLeft} from 'lucide-react';

// Enhanced sample data
const mangaProducts = [
  {
    id: 1,
    title: "Chainsaw Man Vol. 12",
    author: "Tatsuki Fujimoto",
    price: 12.99,
    originalPrice: 14.99,
    image: "/api/placeholder/280/400",
    isHot: true,
    isNew: false,
    rating: 4.8,
    stock: 12,
    releaseDate: "2023-08-15",
  },
  {
    id: 2,
    title: "One Piece Vol. 104",
    author: "Eiichiro Oda",
    price: 11.99,
    originalPrice: null,
    image: "/api/placeholder/280/400",
    isHot: true,
    isNew: true,
    rating: 4.9,
    stock: 5,
    releaseDate: "2023-10-05",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen Vol. 19",
    author: "Gege Akutami",
    price: 10.99,
    originalPrice: 12.99,
    image: "/api/placeholder/280/400",
    isHot: false,
    isNew: true,
    rating: 4.7,
    stock: 0,
    releaseDate: "2023-09-20",
    comingSoon: "2023-11-15",
  },
  {
    id: 4,
    title: "Demon Slayer: Kimetsu no Yaiba Vol. 23",
    author: "Koyoharu Gotouge",
    price: 10.99,
    originalPrice: null,
    image: "/api/placeholder/280/400",
    isHot: true,
    isNew: false,
    rating: 4.9,
    stock: 8,
    releaseDate: "2022-12-10",
  },
];

const figureProducts = [
  {
    id: 5,
    title: "Jujutsu Kaisen - Gojo Satoru Figure",
    manufacturer: "Good Smile Company",
    price: 149.99,
    originalPrice: 179.99,
    image: "/api/placeholder/280/320",
    isHot: true,
    isNew: true,
    preorder: false,
    height: "24cm",
    stock: 2,
    material: "PVC & ABS",
    limitedEdition: true,
  },
  {
    id: 6,
    title: "My Hero Academia - Deku Nendoroid",
    manufacturer: "Good Smile Company",
    price: 59.99,
    originalPrice: null,
    image: "/api/placeholder/280/320",
    isHot: false,
    isNew: true,
    preorder: false,
    height: "10cm",
    stock: 15,
    material: "PVC",
    limitedEdition: false,
  },
  {
    id: 7,
    title: "Demon Slayer - Nezuko Figure",
    manufacturer: "Aniplex",
    price: 189.99,
    originalPrice: null,
    image: "/api/placeholder/280/320",
    isHot: true,
    isNew: false,
    preorder: true,
    height: "30cm",
    releaseDate: "2023-12-20",
    material: "PVC & ABS",
    limitedEdition: true,
  },
];

const merchandiseProducts = [
  {
    id: 8,
    title: "Attack on Titan Survey Corps T-Shirt",
    type: "Apparel",
    price: 24.99,
    originalPrice: 29.99,
    image: "/api/placeholder/280/280",
    isHot: false,
    isNew: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    material: "100% Cotton",
  },
  {
    id: 9,
    title: "My Hero Academia Class 1-A Poster",
    type: "Wall Art",
    price: 18.99,
    originalPrice: null,
    image: "/api/placeholder/280/280",
    isHot: false,
    isNew: false,
    dimensions: "24\" x 36\"",
    finish: "Matte",
  },
  {
    id: 10,
    title: "One Piece Straw Hat Pirates Hoodie",
    type: "Apparel",
    price: 49.99,
    originalPrice: 59.99,
    image: "/api/placeholder/280/280",
    isHot: true,
    isNew: false,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Red"],
    material: "80% Cotton, 20% Polyester",
  },
  {
    id: 11,
    title: "Chainsaw Man Pochita Plush",
    type: "Plush Toy",
    price: 29.99,
    originalPrice: null,
    image: "/api/placeholder/280/280",
    isHot: true,
    isNew: true,
    dimensions: "25cm",
    material: "Polyester Fiber",
    features: "Soft & Huggable",
  },
];

// Enhanced collections data
const featuredCollections = [
  {
    id: 1,
    title: "Shonen Jump",
    image: "/api/placeholder/400/200",
    count: 124,
    featured: true,
    description: "The best from Weekly Shonen Jump magazine"
  },
  {
    id: 2,
    title: "Studio Ghibli",
    image: "/api/placeholder/400/200",
    count: 86,
    featured: true,
    description: "Magical worlds from Miyazaki & beyond"
  },
  {
    id: 3,
    title: "MAPPA Works",
    image: "/api/placeholder/400/200",
    count: 53,
    featured: false,
    description: "Jujutsu Kaisen, Chainsaw Man & more"
  },
  {
    id: 4,
    title: "Isekai Series",
    image: "/api/placeholder/400/200",
    count: 97,
    featured: true,
    description: "Transported to another world adventures"
  },
];

// Enhanced trending tags
const trendingTags = [
  { name: 'Chainsaw Man', count: 158 },
  { name: 'Jujutsu Kaisen', count: 211 },
  { name: 'Demon Slayer', count: 189 },
  { name: 'One Piece', count: 346 },
  { name: 'My Hero Academia', count: 203 },
  { name: "Haikyu!!", count: 97 },
  { name: 'Attack on Titan', count: 142 },
  { name: 'Spy x Family', count: 86 },
  { name: 'Tokyo Revengers', count: 78 },
  { name: 'Dragon Ball', count: 192 },
];

// Enhanced Section Title Component with animation
const SectionTitle = ({ icon, title, viewAllLink }) => {
  return (
    <div className="flex justify-between items-center mb-6 mt-16 group">
      <h2 className="text-3xl uppercase font-black transform -rotate-1 tracking-tight flex items-center">
        <span className="mr-2 text-pink-500 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <span className="border-b-4 border-pink-500 pb-1">
          {title}
        </span>
      </h2>
      <a 
        href={viewAllLink} 
        className="text-pink-500 uppercase font-bold hover:text-pink-600 flex items-center 
                  transform hover:translate-x-1 transition-transform"
      >
        VIEW ALL <ChevronRight size={16} className="ml-1 animate-pulse" />
      </a>
    </div>
  );
};

// Improved Quick View Modal
const QuickViewModal = ({ product, onClose, type }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => {
    if (quantity < (product.stock || 10)) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white dark:bg-gray-800 border-4 border-gray-900 dark:border-gray-700 
                  max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transform rotate-0"
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-900 text-white p-2 z-10 hover:bg-red-500 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full object-cover border-2 border-gray-900 dark:border-gray-700"
            />
          </div>
          
          <div className="md:w-1/2 p-6 border-t-4 md:border-t-0 md:border-l-4 border-gray-900 dark:border-gray-700">
            <div className="flex flex-wrap gap-2 mb-3">
              {product.isHot && (
                <span className="bg-amber-500 text-black font-black py-1 px-3 uppercase text-sm flex items-center">
                  <Fire size={16} className="mr-1" /> Hot!
                </span>
              )}
              
              {product.isNew && (
                <span className="bg-violet-600 text-white font-black py-1 px-3 uppercase text-sm">
                  New!
                </span>
              )}
              
              {product.preorder && (
                <span className="bg-blue-500 text-white font-black py-1 px-3 uppercase text-sm">
                  Pre-order
                </span>
              )}
              
              {product.limitedEdition && (
                <span className="bg-red-500 text-white font-black py-1 px-3 uppercase text-sm flex items-center">
                  <Trophy size={16} className="mr-1" /> Limited Edition
                </span>
              )}
            </div>
            
            <h3 className="font-black text-2xl tracking-tight uppercase text-gray-900 dark:text-white mb-2">
              {product.title}
            </h3>
            
            {type === 'manga' && (
              <p className="text-gray-600 dark:text-gray-400 font-bold italic">{product.author}</p>
            )}
            
            {type === 'figure' && (
              <p className="text-gray-600 dark:text-gray-400 font-bold">{product.manufacturer}</p>
            )}
            
            {/* Product specifications */}
            <div className="mt-4 space-y-2">
              {product.material && (
                <div className="flex items-start">
                  <span className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 w-24">Material:</span>
                  <span className="text-gray-900 dark:text-gray-200">{product.material}</span>
                </div>
              )}
              
              {product.height && (
                <div className="flex items-start">
                  <span className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 w-24">Height:</span>
                  <span className="text-gray-900 dark:text-gray-200">{product.height}</span>
                </div>
              )}
              
              {product.dimensions && (
                <div className="flex items-start">
                  <span className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 w-24">Dimensions:</span>
                  <span className="text-gray-900 dark:text-gray-200">{product.dimensions}</span>
                </div>
              )}
              
              {product.releaseDate && (
                <div className="flex items-start">
                  <span className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 w-24">Release Date:</span>
                  <span className="text-gray-900 dark:text-gray-200">{product.releaseDate}</span>
                </div>
              )}
            </div>
            
            {/* Rating display for manga */}
            {product.rating && (
              <div className="flex items-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-bold text-gray-600 dark:text-gray-400">{product.rating}/5</span>
              </div>
            )}
            
            {/* Size selector for apparel */}
            {product.sizes && (
              <div className="mt-4">
                <label className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 block mb-2">Size:</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button 
                      key={size} 
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 flex items-center justify-center font-bold text-sm border-2 transition-all
                                ${selectedSize === size 
                                  ? 'border-pink-500 bg-pink-100 dark:bg-pink-900 text-pink-500' 
                                  : 'border-gray-300 dark:border-gray-600 hover:border-pink-500'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Color selector */}
            {product.colors && (
              <div className="mt-4">
                <label className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 block mb-2">Color:</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button 
                      key={color} 
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-2 flex items-center justify-center font-bold text-sm border-2 transition-all
                                ${selectedColor === color 
                                  ? 'border-pink-500 bg-pink-100 dark:bg-pink-900 text-pink-500' 
                                  : 'border-gray-300 dark:border-gray-600 hover:border-pink-500'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity selector */}
            <div className="mt-4">
              <label className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 block mb-2">Quantity:</label>
              <div className="flex items-center">
                <button 
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600"
                >
                  -
                </button>
                <span className="w-12 h-10 flex items-center justify-center border-t-2 border-b-2 border-gray-300 dark:border-gray-600">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600"
                >
                  +
                </button>
                
                {product.stock !== undefined && (
                  <span className="ml-4 text-sm font-bold text-gray-600 dark:text-gray-400">
                    {product.stock > 0 
                      ? `${product.stock} in stock` 
                      : product.comingSoon 
                        ? <span className="text-blue-500">Coming Soon</span>
                        : <span className="text-red-500">Out of Stock</span>}
                  </span>
                )}
              </div>
            </div>
            
            {/* Price and buy buttons */}
            <div className="mt-6 flex items-center">
              <div className="mr-4">
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-sm mr-2">${product.originalPrice}</span>
                )}
                <span className="font-bold text-pink-500 dark:text-pink-400 text-2xl transform -skew-x-6">${product.price}</span>
              </div>
              
              <div className="flex gap-2">
                <button 
                  className={`uppercase font-bold text-sm px-4 py-2 transform skew-x-3 hover:skew-x-0 
                             transition-transform flex items-center 
                             ${product.stock === 0 && !product.preorder 
                                ? 'bg-gray-300 cursor-not-allowed text-gray-600' 
                                : 'bg-amber-500 text-gray-900 hover:bg-amber-400'}`}
                  disabled={product.stock === 0 && !product.preorder}
                >
                  {product.preorder ? "Pre-order" : product.stock === 0 ? "Sold Out" : "Add to Cart"}
                  <ShoppingCart size={16} className="ml-1" />
                </button>
                
                <button className="uppercase font-bold text-sm px-4 py-2 bg-gray-200 dark:bg-gray-700 
                                  text-gray-900 dark:text-white hover:bg-pink-100 dark:hover:bg-gray-600 
                                  transform -skew-x-3 hover:skew-x-0 transition-transform flex items-center">
                  Wishlist <Heart size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Manga Card Component
const MangaCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  
  return (
    <>
      <div 
        className="transform rotate-1 transition-all duration-200 hover:rotate-0 hover:scale-105 
                  bg-white dark:bg-gray-800 rounded-none relative overflow-hidden shadow-lg group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="border-4 border-gray-900 dark:border-gray-700">
          <div className="relative">
            <img src={product.image} alt={product.title} className="w-full object-cover" />
            
            {/* Overlay on hover with quick view button */}
            <div 
              className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center 
                        transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <button 
                onClick={() => setShowQuickView(true)}
                className="bg-white text-gray-900 font-bold px-4 py-2 transform -rotate-2 hover:rotate-0 
                         transition-transform uppercase flex items-center"
              >
                <Eye size={18} className="mr-2" /> Quick View
              </button>
            </div>
            
            {/* Hot Badge */}
            {product.isHot && (
              <div className="absolute -top-1 -right-1 transform rotate-6 bg-amber-500 text-black font-black py-1 px-3 rounded-bl-lg uppercase text-sm flex items-center">
                <Fire size={16} className="mr-1" /> Hot!
              </div>
            )}
            
            {/* New Badge */}
            {product.isNew && (
              <div className="absolute top-2 -left-2 transform -rotate-6 bg-violet-600 text-white font-black py-1 px-3 rounded-tr-lg uppercase text-sm">
                New!
              </div>
            )}
            
            {/* Stock Warning */}
            {product.stock === 0 ? (
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 text-white font-bold py-2 text-center uppercase text-sm">
                {product.comingSoon ? (
                  <span className="flex items-center justify-center">
                    <Clock size={16} className="mr-1" /> Coming Soon
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <AlertTriangle size={16} className="mr-1" /> Out of Stock
                  </span>
                )}
              </div>
            ) : product.stock <= 5 && (
              <div className="absolute bottom-0 left-0 right-0 bg-amber-500 bg-opacity-90 text-black font-bold py-2 text-center uppercase text-sm">
                Only {product.stock} left!
              </div>
            )}
            
            {/* Quick actions */}
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-none transform rotate-2 hover:rotate-0 transition-all">
                <Heart size={18} />
              </button>
              <button 
                className={`${product.stock === 0 
                           ? 'bg-gray-400 cursor-not-allowed' 
                           : 'bg-gray-900 hover:bg-black'} 
                          text-white p-2 rounded-none transform -rotate-1 hover:rotate-0 transition-all`}
                disabled={product.stock === 0}
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
          
          <div className="p-4 border-t-4 border-gray-900 dark:border-gray-700 relative">
            <h3 className="font-black text-lg tracking-tight uppercase text-gray-900 dark:text-white line-clamp-1">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-bold italic">{product.author}</p>
            
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm font-bold text-gray-600 dark:text-gray-400">{product.rating}/5</span>
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <div>
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-xs mr-1">${product.originalPrice}</span>
                )}
                <span className="font-bold text-pink-500 dark:text-pink-400 text-xl transform -skew-x-6">${product.price}</span>
              </div>
              <button 
                className={`uppercase font-bold text-sm px-3 py-1 transform skew-x-3 
                          hover:skew-x-0 transition-transform flex items-center
                          ${product.stock === 0 
                            ? 'bg-gray-300 cursor-not-allowed text-gray-600' 
                            : 'bg-amber-500 hover:bg-amber-400 text-gray-900'}`}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? "Sold Out" : "Add"} <ShoppingCart size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showQuickView && (
        <QuickViewModal 
          product={product} 
          onClose={() => setShowQuickView(false)} 
          type="manga"
        />
      )}
    </>
  );
};

// Enhanced Figure Card Component
const FigureCard = ({ product }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  
  return (
    <>
      <div className="transform -rotate-1 transition-all duration-200 hover:rotate-0 hover:scale-105 bg-white dark:bg-gray-800 rounded-none relative overflow-hidden shadow-lg group">
        <div className="border-4 border-gray-900 dark:border-gray-700">
          <div className="relative">
            <img src={product.image} alt={product.title} className="w-full object-cover" />
            
            {/* Overlay on hover with quick view button */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <button 
                onClick={() => setShowQuickView(true)}
                className="bg-white text-gray-900 font-bold px-4 py-2 transform -rotate-2 hover:rotate-0 transition-transform uppercase flex items-center"
              >
                <Eye size={18} className="mr-2" /> Quick View
              </button>
            </div>
            
            {/* Hot Badge */}
            {product.isHot && (
              <div className="absolute -top-1 -right-1 transform rotate-6 bg-amber-500 text-black font-black py-1 px-3 rounded-bl-lg uppercase text-sm flex items-center">
                <Fire size={16} className="mr-1" /> Hot!
              </div>
            )}
            
            {/* New Badge */}
            {product.isNew && (
              <div className="absolute top-2 -left-2 transform -rotate-6 bg-violet-600 text-white font-black py-1 px-3 rounded-tr-lg uppercase text-sm">
                New!
              </div>
            )}
            
            {/* Preorder Badge */}
            {product.preorder && (
              <div className="absolute -bottom-1 -left-1 transform -rotate-3 bg-blue-500 text-white font-black py-1 px-3 uppercase text-sm">
                Pre-order
              </div>
            )}
            
            {/* Limited Edition Ribbon */}
            {product.limitedEdition && (
              <div className="absolute top-0 right-0">
                <div className="bg-red-500 text-white font-bold py-1 px-6 transform rotate-45 translate-x-5 -translate-y-2 uppercase text-xs">
                  Limited Edition
                </div>
              </div>
            )}
            
            {/* Stock Warning */}
            {(product.stock !== undefined && product.stock <= 3 && !product.preorder) && (
              <div className="absolute bottom-0 left-0 right-0 bg-amber-500 bg-opacity-90 text-black font-bold py-2 text-center uppercase text-sm">
                {product.stock === 0 ? 'Sold Out!' : `Only ${product.stock} left!`}
              </div>
            )}
          </div>
          
          <div className="p-4 border-t-4 border-gray-900 dark:border-gray-700">
            <h3 className="font-black text-lg tracking-tight uppercase text-gray-900 dark:text-white line-clamp-1">{product.title}</h3>
            <div className="flex justify-between items-center mt-1">
              <p className="text-gray-600 dark:text-gray-400 font-bold">{product.manufacturer}</p>
              <span className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1">{product.height}</span>
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <div>
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-xs mr-1">${product.originalPrice}</span>
                )}
                <span className="font-bold text-pink-500 dark:text-pink-400 text-xl transform -skew-x-6">${product.price}</span>
              </div>
              <button className="uppercase font-bold text-sm bg-amber-500 hover:bg-amber-400 px-3 py-1 transform skew-x-3 hover:skew-x-0 transition-transform text-gray-900 flex items-center">
                {product.preorder ? "Pre-order" : "Add"} <ShoppingCart size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showQuickView && (
        <QuickViewModal 
          product={product} 
          onClose={() => setShowQuickView(false)} 
          type="figure"
        />
      )}
    </>
  );
};

// Enhanced Merchandise Card Component
const MerchandiseCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [showQuickView, setShowQuickView] = useState(false);
  
  return (
    <>
      <div className="transform rotate-1 transition-all duration-200 hover:rotate-0 hover:scale-105 bg-white dark:bg-gray-800 rounded-none relative overflow-hidden shadow-lg group">
        <div className="border-4 border-gray-900 dark:border-gray-700">
          <div className="relative">
            <img src={product.image} alt={product.title} className="w-full object-cover" />
            
            {/* Overlay on hover with quick view button */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <button 
                onClick={() => setShowQuickView(true)}
                className="bg-white text-gray-900 font-bold px-4 py-2 transform -rotate-2 hover:rotate-0 transition-transform uppercase flex items-center"
              >
                <Eye size={18} className="mr-2" /> Quick View
              </button>
            </div>
            
            {/* Hot Badge */}
            {product.isHot && (
              <div className="absolute -top-1 -right-1 transform rotate-6 bg-amber-500 text-black font-black py-1 px-3 rounded-bl-lg uppercase text-sm flex items-center">
                <Fire size={16} className="mr-1" /> Hot!
              </div>
            )}
            
            {/* New Badge */}
            {product.isNew && (
              <div className="absolute top-2 -left-2 transform -rotate-6 bg-violet-600 text-white font-black py-1 px-3 rounded-tr-lg uppercase text-sm">
                New!
              </div>
            )}
            
            {/* Type Badge */}
            <div className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs uppercase font-bold py-1 px-2 transform -rotate-2">
              {product.type}
            </div>
          </div>
          
          <div className="p-4 border-t-4 border-gray-900 dark:border-gray-700">
            <h3 className="font-black text-lg tracking-tight uppercase text-gray-900 dark:text-white line-clamp-1">{product.title}</h3>
            
            {/* Size selector for apparel */}
            {product.sizes && (
              <div className="mt-2 flex flex-wrap gap-1">
                {product.sizes.map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 flex items-center justify-center font-bold text-sm
                              ${selectedSize === size 
                                ? 'bg-pink-500 text-white' 
                                : 'bg-gray-200 hover:bg-pink-100 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
            
            {/* Dimensions for posters/art */}
            {product.dimensions && (
              <div className="mt-2 text-sm font-bold text-gray-600 dark:text-gray-400">
                Size: {product.dimensions}
              </div>
            )}
            
            <div className="flex justify-between items-center mt-3">
              <div>
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-xs mr-1">${product.originalPrice}</span>
                )}
                <span className="font-bold text-pink-500 dark:text-pink-400 text-xl transform -skew-x-6">${product.price}</span>
              </div>
              <button className="uppercase font-bold text-sm bg-amber-500 hover:bg-amber-400 px-3 py-1 transform skew-x-3 hover:skew-x-0 transition-transform text-gray-900 flex items-center">
                Add <ShoppingCart size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showQuickView && (
        <QuickViewModal 
          product={product} 
          onClose={() => setShowQuickView(false)} 
          type="merchandise"
        />
      )}
    </>
  );
};

// Enhanced Special Promotion Banner Component
const PromoBanner = ({ title, description, buttonText, bgColor, decoration, countdown }) => {
  const [timeLeft, setTimeLeft] = useState(countdown ? {
    days: 2,
    hours: 17,
    minutes: 43,
    seconds: 12
  } : null);
  
  useEffect(() => {
    if (!countdown) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [countdown]);
  
  return (
    <div className={`relative border-4 border-gray-900 dark:border-gray-700 transform ${decoration === "left" ? '-rotate-1' : 'rotate-1'} overflow-hidden my-12`}>
      <div className={`${bgColor} py-8 px-6 flex flex-col md:flex-row items-center justify-between relative`}>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: decoration === "halftone" 
            ? "radial-gradient(circle, black 1px, transparent 1px)" 
            : "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.8) 10px, rgba(0,0,0,0.8) 11px)",
          backgroundSize: decoration === "halftone" ? "20px 20px" : "100px 100px",
        }}></div>
        
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-black uppercase text-gray-900 transform -skew-x-6 mb-2">{title}</h3>
          <p className="text-gray-900 font-bold">{description}</p>
          
          {/* Countdown timer */}
          {countdown && timeLeft && (
            <div className="flex space-x-4 mt-3">
              <div className="text-center">
                <div className="bg-gray-900 text-white font-bold text-xl w-12 h-12 flex items-center justify-center">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-xs uppercase font-bold mt-1">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white font-bold text-xl w-12 h-12 flex items-center justify-center">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs uppercase font-bold mt-1">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white font-bold text-xl w-12 h-12 flex items-center justify-center">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs uppercase font-bold mt-1">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 text-white font-bold text-xl w-12 h-12 flex items-center justify-center">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs uppercase font-bold mt-1">Seconds</div>
              </div>
            </div>
          )}
        </div>
        <button className="bg-gray-900 text-white hover:bg-black font-bold uppercase py-3 px-6 transform skew-x-3 hover:skew-x-0 transition-transform duration-200 flex items-center">
          {buttonText} <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Enhanced Featured Collections Component
const FeaturedCollection = ({ title, image, count, description }) => {
  return (
    <div className="relative overflow-hidden border-4 border-gray-900 dark:border-gray-700 transform hover:scale-105 hover:rotate-0 transition-all duration-200 rotate-1 group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-black uppercase text-xl">{title}</h3>
        <p className="text-white text-sm font-bold">{count} items</p>
        <p className="text-gray-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
      <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs uppercase font-bold py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Explore
      </div>
    </div>
  );
};

// Enhanced Newsletter component
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here would be the actual submission logic
    }
  };
  
  return (
    <div className="mt-20 relative border-4 border-gray-900 dark:border-gray-700 transform -rotate-1 overflow-hidden">
      <div className="bg-violet-600 py-12 px-6 relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.8) 10px, rgba(0,0,0,0.8) 11px)",
        }}></div>
        
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-black uppercase text-white transform -skew-x-6 mb-4">JOIN OUR OTAKU CLUB!</h3>
          <p className="text-white font-bold mb-6">Get exclusive discounts, early access to new releases, and special collector offers!</p>
          
          {submitted ? (
            <div className="bg-white dark:bg-gray-800 py-4 px-6 max-w-md mx-auto transform rotate-1 border-2 border-gray-900">
              <p className="font-bold text-green-500 dark:text-green-400">Thanks for joining! Check your email for your welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow py-3 px-4 outline-none border-4 border-gray-900 mb-2 sm:mb-0 sm:mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-amber-500 text-gray-900 hover:bg-amber-400 font-bold uppercase py-3 px-6 border-4 border-gray-900 transform skew-x-3 hover:skew-x-0 transition-transform duration-200"
              >
                SIGN UP
              </button>
            </form>
          )}
          
          <div className="mt-6 flex justify-center gap-4">
            <div className="bg-white dark:bg-gray-800 px-3 py-2 transform rotate-1 border-2 border-gray-900">
              <p className="font-bold text-pink-500 text-sm">10% OFF first order</p>
            </div>
            <div className="bg-white dark:bg-gray-800 px-3 py-2 transform -rotate-1 border-2 border-gray-900">
              <p className="font-bold text-amber-500 text-sm">Exclusive drops</p>
            </div>
            <div className="bg-white dark:bg-gray-800 px-3 py-2 transform rotate-2 border-2 border-gray-900">
              <p className="font-bold text-violet-500 text-sm">Free shipping events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Trending Tags component
const TrendingTags = ({ tags }) => {
  return (
    <div className="mt-16 mb-10">
      <h4 className="uppercase font-bold mb-4 text-lg flex items-center">
        <Activity size={20} className="mr-2 text-pink-500" /> TRENDING TAGS
      </h4>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <a 
            key={tag.name} 
            href={`#${tag.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`}
            className="inline-block bg-gray-800 dark:bg-gray-700 text-white px-3 py-1 text-sm font-bold transform -rotate-1 hover:rotate-0 hover:bg-pink-500 transition-all duration-200 group"
          >
            #{tag.name} <span className="text-xs text-gray-400 group-hover:text-white transition-colors">({tag.count})</span>
          </a>
        ))}
      </div>
    </div>
  );
};

// Newest Releases Slider
const NewestReleases = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide(current => (current === products.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? products.length - 1 : current - 1));
  };
  
  return (
    <div className="mt-16 relative">
      <div className="border-4 border-gray-900 dark:border-gray-700 overflow-hidden">
        <div className="relative h-96">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-500 flex ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full object-contain border-4 border-gray-800 shadow-lg" 
                />
              </div>
              <div className="w-1/2 bg-white dark:bg-gray-800 p-8 flex flex-col justify-center">
                <div className="flex mb-4">
                  {product.isNew && (
                    <span className="bg-violet-600 text-white font-black py-1 px-3 uppercase text-sm">
                      New Release!
                    </span>
                  )}
                  {product.isHot && (
                    <span className="bg-amber-500 text-black font-black py-1 px-3 uppercase text-sm ml-2 flex items-center">
                      <Fire size={16} className="mr-1" /> Trending
                    </span>
                  )}
                </div>
                
                <h3 className="font-black text-3xl tracking-tight uppercase text-gray-900 dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-bold text-lg">{product.author || product.manufacturer}</p>
                
                <div className="mt-6 flex items-center">
                  {product.rating && (
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  )}
                  <p className="text-gray-600 dark:text-gray-400">Release Date: {product.releaseDate}</p>
                </div>
                
                <div className="mt-6 flex items-center">
                  <div className="mr-4">
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 text-lg mr-2">${product.originalPrice}</span>
                    )}
                    <span className="font-bold text-pink-500 dark:text-pink-400 text-3xl transform -skew-x-6">${product.price}</span>
                  </div>
                  
                  <button className="uppercase font-bold text-md bg-amber-500 px-6 py-3 transform skew-x-3 hover:skew-x-0 transition-transform text-gray-900 flex items-center">
                    Add to Cart <ShoppingCart size={18} className="ml-2" />
                  </button>
                </div>
                
                <div className="mt-8">
                  <button className="bg-gray-200 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-gray-600 py-2 px-4 text-gray-900 dark:text-white font-bold transform -rotate-1 hover:rotate-0 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 z-20 hover:bg-pink-500 hover:text-white transition-colors border-2 border-gray-900"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 z-20 hover:bg-pink-500 hover:text-white transition-colors border-2 border-gray-900"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
            {products.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-pink-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Accordion Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically ship within 1-3 business days. International shipping can take 7-21 business days depending on your location and customs processing."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to most countries worldwide. International shipping rates are calculated at checkout based on weight and destination."
    },
    {
      question: "When are pre-orders charged?",
      answer: "Pre-orders are charged at the time of purchase, not when the item ships. This helps us secure your item and gauge demand."
    },
    {
      question: "What's your return policy?",
      answer: "We accept returns within 30 days of delivery for items in original condition. Figures must be unopened. Please contact customer service to initiate a return."
    },
    {
      question: "Are the manga books in English?",
      answer: "Yes, all manga in our store are official English translations unless specifically noted as Japanese imports in the product description."
    }
  ];
  
  return (
    <div className="mt-16 border-4 border-gray-900 dark:border-gray-700">
      <div className="bg-gray-100 dark:bg-gray-800 py-4 px-6 border-b-4 border-gray-900 dark:border-gray-700">
        <h3 className="text-2xl uppercase font-black text-gray-900 dark:text-white">Frequently Asked Questions</h3>
      </div>
      
      <div className="divide-y-4 divide-gray-900 dark:divide-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-900">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full px-6 py-4 flex justify-between items-center font-bold text-left text-gray-900 dark:text-white"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            <div className={`px-6 pb-4 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Store Component
export default function MangaStore() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-purple-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Theme toggle & cart icon */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden transform -rotate-1 font-bold text-sm px-4 py-2 border-2 border-gray-800 dark:border-gray-200"
          >
            {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="transform -rotate-1 font-bold text-sm px-4 py-2 border-2 border-gray-800 dark:border-gray-200"
            >
              {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
            </button>
            
            <div className="relative">
              <button className="transform rotate-1 font-bold text-sm p-2 border-2 border-gray-800 dark:border-gray-200 flex items-center">
                <ShoppingCart size={20} />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu (responsive) */}
        <div className={`md:hidden ${showMobileMenu ? 'block' : 'hidden'} mb-4 border-4 border-gray-900 dark:border-gray-700 bg-white dark:bg-gray-800`}>
          <div className="p-4 space-y-2">
            <a href="#manga" className="block py-2 px-4 font-bold uppercase hover:bg-pink-100 dark:hover:bg-gray-700">Manga</a>
            <a href="#figures" className="block py-2 px-4 font-bold uppercase hover:bg-pink-100 dark:hover:bg-gray-700">Figures</a>
            <a href="#merch" className="block py-2 px-4 font-bold uppercase hover:bg-pink-100 dark:hover:bg-gray-700">Merchandise</a>
            <a href="#preorders" className="block py-2 px-4 font-bold uppercase hover:bg-pink-100 dark:hover:bg-gray-700">Pre-Orders</a>
            <a href="#sales" className="block py-2 px-4 font-bold uppercase hover:bg-pink-100 dark:hover:bg-gray-700">Sale</a>
          </div>
        </div>

        {/* Store Banner */}
        <div className="relative mb-16 border-4 border-gray-900 dark:border-gray-700 transform -rotate-1 overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 via-violet-500 to-purple-600 py-16 px-8 relative">
            {/* Speed Lines Background */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.8) 10px, rgba(0,0,0,0.8) 11px)",
            }}></div>
            
            <h1 className="text-4xl md:text-6xl uppercase font-black tracking-tight text-white transform -skew-x-6 text-shadow">
              MANGA & ANIME STORE
            </h1>
            <p className="mt-4 text-xl text-white font-bold">Discover the latest manga, figures, and merchandise!</p>
          </div>
          
          {/* Search Bar */}
          <div className="absolute bottom-0 right-0 left-0 transform translate-y-1/2 px-8">
            <div className="flex bg-white dark:bg-gray-800 border-4 border-gray-900 dark:border-gray-700 shadow-lg">
              <input 
                type="text" 
                placeholder="Search for manga, merchandise, figures..." 
                className="flex-grow py-3 px-4 outline-none bg-transparent text-gray-900 dark:text-white"
              />
              <button className="bg-pink-500 px-4 flex items-center justify-center">
                <Search size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Featured Collections */}
        <div className="mt-20 mb-8">
          <h2 className="text-3xl uppercase font-black tracking-tight mb-6 transform -rotate-1">
            <span className="border-b-4 border-pink-500 pb-1">FEATURED COLLECTIONS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCollections.map(collection => (
              <FeaturedCollection 
                key={collection.id}
                title={collection.title} 
                image={collection.image} 
                count={collection.count}
                description={collection.description}
              />
            ))}
          </div>
        </div>
        
        {/* Special Offer Banner with Countdown */}
        <PromoBanner 
          title="SPRING SALE! 25% OFF ALL MANGA" 
          description="Limited time offer on all manga volumes! Use code: SPRING25" 
          buttonText="SHOP NOW" 
          bgColor="bg-pink-500" 
          decoration="speed"
          countdown={true}
        />
        
        {/* New Releases Slider */}
        <SectionTitle 
          icon={<Fire className="text-amber-500" size={28} />} 
          title="NEW RELEASES" 
          viewAllLink="#new"
        />
        
        <NewestReleases products={[...mangaProducts, ...figureProducts].filter(p => p.isNew).slice(0, 4)} />
        
        {/* Manga Section */}
        <SectionTitle 
          icon={<BookOpen className="text-pink-500" size={28} />} 
          title="MANGA" 
          viewAllLink="#manga"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mangaProducts.map(product => (
            <MangaCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Promotion Banner */}
        <PromoBanner 
                  title="PRE-ORDER EXCLUSIVE JUJUTSU KAISEN BUNDLE"
                  description="Get limited edition art cards with every pre-order"
                  buttonText="PRE-ORDER NOW"
                  bgColor="bg-amber-400"
                  decoration="left" countdown={undefined}        />
        
        {/* Figures Section */}
        <SectionTitle 
          icon={<Trophy className="text-pink-500" size={28} />} 
          title="FIGURES" 
          viewAllLink="#figures"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {figureProducts.map(product => (
            <FigureCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Merchandise Section */}
        <SectionTitle 
          icon={<TShirt className="text-pink-500" size={28} />} 
          title="MERCHANDISE" 
          viewAllLink="#merch"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {merchandiseProducts.map(product => (
            <MerchandiseCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Trending Tags */}
        <TrendingTags tags={trendingTags} />
        
        {/* Newsletter Section */}
        <Newsletter />
        
        {/* FAQ Section */}
        <FAQ />
        
        
      </div>
    </div>
  );
}
