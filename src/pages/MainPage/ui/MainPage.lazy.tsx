import { lazy } from 'react';

// export const MainPageLazy = lazy(() => import('./MainPage'));
export const MainPageLazy = lazy(
    () => new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore

            resolve(import('./MainPage'));
        }, 3000);
    }),
);
