import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { Suspense, useEffect } from 'react';

type Props = {};

export const App = (props:Props) => {
    const { theme } = useTheme();
    useEffect(() => {
        if (Math.random() > 0.5) {
            throw new Error('Error');
        }
    }, []);
    return (
        <div className={classNames('app', {}, [theme])}>
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
