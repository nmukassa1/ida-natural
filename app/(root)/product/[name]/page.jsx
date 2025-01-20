
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import ProductHeader from '@/components/product/ProductHeader';
import QuantitySelector from '@/components/product/QuantitySelector';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductIcons from '@/components/product/ProductIcons';
import ProductAccordion from '@/components/product/ProductAccordion';
import RecommendedProducts from '@/components/product/RecommendedProducts';
import { products } from '@/lib/database/products';
import { ProductProvider } from '@/lib/providers/ProductProvider';
import VariantSelector from '@/components/product/VariantSelector';
import AddToCartForm from '@/components/product/AddToCartForm';



const page = async ({params}) => {
  const name = (await params).name
  const product = products.find(product => product.slug === name);

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <ProductProvider product={product}>

      <div className="flex flex-col lg:flex-row p-4 lg:px-8 gap-8">
        {/* Left Section: Product Images */}
        <div className="flex gap-4 w-full lg:w-1/2">
          {/* Small Thumbnails */}
          <div className="flex flex-col gap-4 w-20">
            {product.images.map((image, index) => (
              <div 
                key={index} 
                className="w-20 h-20 rounded-lg border border-gray-200 overflow-hidden"
              >
                <ImagePlaceholder />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 rounded-lg border border-gray-200 overflow-hidden bg-purple-50 lg:h-[573px]">
            <ImagePlaceholder />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col md:pl-12 md:pr-24">
          <ProductHeader 
            brand={product.brand}
            title={product.name}
            price={`£${product.price.toFixed(2)}`}
          />
          
          {/* Variant Selector */}
          {/* <VariantSelector /> */}

          {/* Quantity Selector and Add to Cart Button */}
          {/* <QuantitySelector product={product} /> */}

          <AddToCartForm />

          <ProductFeatures 
            features={product.features}
          />

          {/* <ProductIcons 
            icons={product.icons.map(icon => ({ name: icon }))}
          /> */}

          <ProductAccordion 
            description={product.description} // Pass product description
            ingredients={product.ingredients} // Pass product ingredients
            howToUse={product.howToUse} // Pass product howToUse
          />
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="px-4 lg:px-8">
        <RecommendedProducts />
      </div>
      
    </ProductProvider>
  );
};

export default page;
