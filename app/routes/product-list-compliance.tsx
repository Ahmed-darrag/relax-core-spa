import { createFileRoute } from '@tanstack/react-router';
import { ProductListing } from '@salla.sa/twilight-theme-engine/routes/product-listing';
import type { ProductListLoaderData } from '@salla.sa/twilight-theme-engine/routes/product-listing';
import { HookSlot } from '@salla.sa/twilight-theme-engine/hooks';
import { withHead } from '@salla.sa/twilight-theme-engine/tanstack';

export const Route = createFileRoute('/{-$locale}/$slug/c{$id}')({
  validateSearch: (search: Record<string, unknown>) => ({
    page: Number(search.page) || 1,
    sort: (search.sort as string) || undefined,
  }),
  loaderDeps: ({ search }) => ({ page: search.page, sort: search.sort }),
  loader: ({ deps, params }): Promise<ProductListLoaderData> =>
    ProductListing.loader({
      params: { id: params.id },
      search: { page: deps.page, sort: deps.sort },
      locale: params.locale,
    }),
  head: withHead(ProductListing),
  component: ProductListingComponent,
});

function ProductListingComponent() {
  const data: ProductListLoaderData = Route.useLoaderData();

  return (
    <>
      <div className="s-blocks-wrapper s-before-products-list !mt-0">
        <HookSlot name="product.index.before_products_group_with_filter" />
      </div>
      <ProductListing.Component {...data} />
      <div className="s-blocks-wrapper s-after-products-list">
        <HookSlot name="product.index.after_products_group_with_filter" />
      </div>
      <div className="s-blocks-wrapper s-after-testimonials">
        <HookSlot name="product.index.after_testimonials" />
      </div>
    </>
  );
}
