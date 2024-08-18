import type { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface renderWithRouterOptions {
    path?:string
    initialState?:DeepPartial<StateSchema>
}
export function componentRender(component:ReactNode, options:renderWithRouterOptions = {}) {
    const { path = '/', initialState } = options;
    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[path]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>

        ,

    );
}
