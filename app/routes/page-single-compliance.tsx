import { createFileRoute } from '@tanstack/react-router';
import { page as pageApi } from '@salla.sa/twilight-theme-engine/api/page';
import { PageSingle } from '@salla.sa/twilight-theme-engine/routes/page';
import type { PageSingleProps } from '@salla.sa/twilight-theme-engine/routes/page';
import { HookSlot } from '@salla.sa/twilight-theme-engine/hooks';
import { withHead } from '@salla.sa/twilight-theme-engine/tanstack';

type PageWithType = PageSingleProps['page'] & { type?: string };
type PageLoaderData = { page: PageWithType };

export const Route = createFileRoute('/{-$locale}/$slug/page-{$id}')({
  loader: async ({ params }): Promise<PageLoaderData> => {
    const page = await pageApi.findOrThrow(params.id);

    return {
      page: {
        slug: 'page-single',
        id: page.id,
        title: page.name,
        url: page.url,
        content: page.content,
        metadata: page.metadata,
        created_at: page.created_at,
        type: page.type,
      },
    };
  },
  head: withHead(PageSingle),
  component: PageSingleComponent,
});

function PageSingleComponent() {
  const data = Route.useLoaderData();

  if (data.page.type === 'customised') {
    return (
      <div className="s-blocks-wrapper s-information-page !mt-0">
        <HookSlot name="information_page.information_page" />
      </div>
    );
  }

  return <PageSingle.Component {...data} />;
}
