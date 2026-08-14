import { RcContactSocial } from '../components/home/RcContactSocial';
import React, { lazy, Suspense, useEffect } from 'react';
import { HeadContent, Scripts, Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { TwilightProvider } from '@salla.sa/twilight-theme-engine';
import {
  createTwilightRootRoute,
  getTwilightContext,
} from '@salla.sa/twilight-theme-engine/tanstack';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import themeTranslations from 'virtual:twilight/theme-translations';
import devSchema from 'virtual:twilight/schema';
import '../styles/app.css';

import { RcTopBar } from '../components/home/RcTopBar';
import { RcHero } from '../components/home/RcHero';
import { RcServiceCategories } from '../components/home/RcServiceCategories';
import { RcServices } from '../components/home/RcServices';
import { RcOffers } from '../components/home/RcOffers';
import { RcBranches } from '../components/home/RcBranches';
import { RcGift } from '../components/home/RcGift';

const DevSettingsWidget = import.meta.env.DEV
  ? lazy(() =>
    import('@salla.sa/twilight-theme-engine/dev').then((m) => ({ default: m.DevSettingsWidget }))
  )
  : null;

export const Route = createTwilightRootRoute()({
  shellComponent: RootComponent,
});

function DevStoreBasePathRedirect() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!/^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname)) return;

    const salla = (window as unknown as { salla?: { config?: { get?: (k: string) => unknown } } })
      .salla;
    const username = salla?.config?.get?.('store.username');
    if (typeof username !== 'string' || !username) return;

    const escaped = username.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`^(/[a-z]{2})?/${escaped}(?=/|$)`);
    if (!re.test(window.location.pathname)) return;

    const stripped =
      window.location.pathname.replace(re, (_m, locale?: string) => locale || '') || '/';
    navigate({ to: stripped + window.location.search + window.location.hash, replace: true });
  }, [pathname, navigate]);

  return null;
}

function useIsHomePath(): boolean {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const stripped = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
  return stripped === '/' || stripped === '';
}

function RootComponent() {
  const ctx = getTwilightContext();
  const isHome = useIsHomePath();

  return (
    <html lang={ctx.locale} dir={ctx.dir} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <HeadContent />
      </head>
      <body suppressHydrationWarning className={isHome ? 'rc-home' : undefined}>
        <noscript>
          To get full functionality of this site you need to enable JavaScript.
          <a href="https://www.enable-javascript.com/" rel="noreferrer" target="_blank">
            To enable JavaScript on webpage
          </a>
          .
        </noscript>
        <TwilightProvider translations={themeTranslations}>
          <DevStoreBasePathRedirect />
          {isHome ? (
            <>
              <RcTopBar />
              <RcHero />
              <RcServiceCategories />
              <RcServices />
              <RcOffers />
              <RcBranches />
              <RcGift />
              <RcContactSocial />
            </>
          ) : (
            <Outlet />
          )}
        </TwilightProvider>
        <TanStackRouterDevtools position="bottom-right" />
        {DevSettingsWidget && (
          <Suspense fallback={null}>
            <DevSettingsWidget schema={devSchema} />
          </Suspense>
        )}
        <Scripts />
      </body>
    </html>
  );
}