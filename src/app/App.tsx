import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';

type Props = {};

export const App = (props:Props) => {
    const { theme } = useTheme();
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">

                <NavBar />
                <div className="content-page">

                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
