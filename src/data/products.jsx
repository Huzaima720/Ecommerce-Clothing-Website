import ProductImg1 from "../assets/clothing images/Product 1.png";
import ProductImg2 from "../assets/clothing images/Product 2.png";
import ProductImg3 from "../assets/clothing images/Product 3.png";
import ProductImg4 from "../assets/clothing images/Product 4.png";
import ProductImg5 from "../assets/clothing images/Product 5.png";
import ProductImg6 from "../assets/clothing images/Product 6.png";
import ProductImg7 from "../assets/clothing images/Product 7.png";
import ProductImg8 from "../assets/clothing images/Product 8.png";
import ProductImg9 from "../assets/clothing images/Product 9.png";
import ProductImg10 from "../assets/clothing images/Product 10.png";

const images = [
  ProductImg1,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
  ProductImg7,
  ProductImg8,
  ProductImg9,
  ProductImg10,
];

const audiences = ["Men", "Women", "Kids", "Babies"];
const brands = [
  "Victoria’s Secret",
  "Dior",
  "Gucci",
  "Fendi",
  "Prada",
  "Chanel",
  "Versace",
  "Dolce & Gabbana",
];
const categories = [
  "Dresses",
  "Tops",
  "Lingerie & Lounge Wear",
  "Blouse",
  "Vintage",
];
const sizes = ["Medium", "Large", "Plus Size", "Sexy Plus Size"];

const products = Array(100).fill(null).map((_, index) => {
  const category = categories[index % categories.length]; // Cycles through categories
  const brand = brands[index % brands.length]; // Cycles through brands
  const size = sizes[index % sizes.length]; // Cycles through sizes
  const audience = audiences[index % audiences.length]; 
  const image = images[index % images.length]; // Cycles through images
  const isNewArrival = index < 10; // Mark the first 10 products as new arrivals

  return {
    id: index + 1,
    name: `${category} - Product ${index + 1}`,
    category: category,
    brand: brand,
    audience: audience,
    price: (50 + Math.random() * 100).toFixed(2), // Random price between 50 and 150
    rating: (3 + Math.random() * 2).toFixed(1), // Random rating between 3.0 and 5.0
    image: image,
    isNewArrival: isNewArrival,
  };
});

export {products , categories, brands, audiences, sizes }