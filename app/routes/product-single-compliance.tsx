import { createFileRoute } from '@tanstack/react-router';
import { Product } from '@salla.sa/twilight-theme-engine/routes/product';
import type { ProductPageProps } from '@salla.sa/twilight-theme-engine/routes/product';
import { HookSlot } from '@salla.sa/twilight-theme-engine/hooks';
import { ProductDetailSkeleton } from '@salla.sa/twilight-theme-engine/skeleton';
import { withHead } from '@salla.sa/twilight-theme-engine/tanstack';

export const Route = createFileRoute('/{-$locale}/$slug/p{$id}')({
  loader: ({ params }): Promise<ProductPageProps> =>
    Product.loader({ params: { id: params.id }, locale: params.locale }),
  head: withHead(Product),
  pendingComponent: () => <ProductDetailSkeleton />,
  component: ProductComponent,
});

function ProductComponent() {
  const data: ProductPageProps = Route.useLoaderData();

  return (
    <>
      <div className="s-blocks-wrapper s-before-product-info !mt-0">
        <HookSlot name="product.single.before_product_info" />
      </div>
      <Product.Component {...data} />
      <div className="s-blocks-wrapper s-before-reviews">
        <HookSlot name="product.single.before_customer_reviews" />
      </div>
      <div className="s-blocks-wrapper s-before-related">
        <HookSlot name="product.single.before_product_recommendations" />
      </div>
      <div className="s-blocks-wrapper s-after-related">
        <HookSlot name="product.single.after_product_recommendations" />
      </div>
    </>
  );
}
