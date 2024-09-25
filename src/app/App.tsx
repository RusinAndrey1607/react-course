import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entity/User';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
        document.body.className = theme;
    }, [dispatch, theme]);
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
