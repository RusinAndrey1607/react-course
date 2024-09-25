import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useState } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/login.slice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { registrationByEmail } from '../../model/services/registrationByEmail/registrationByEmail';

interface LoginFormProps {
  className?: string;
  initialIsLogin?: boolean;
}

export const LoginForm = memo(({ className, initialIsLogin = true }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(initialIsLogin);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const {
        password, email, username, isLoading, error,
    } = useSelector(getLoginState);

    const onLoginClick = useCallback(() => {
        dispatch(loginByEmail({ email, password }));
    }, [dispatch, email, password]);

    const onRegistrationClick = useCallback(() => {
        dispatch(registrationByEmail({ email, password, username }));
    }, [dispatch, email, password, username]);

    const onToggleForm = useCallback(() => {
        setIsLogin(!isLogin);
    }, [isLogin]);

    const handleSubmit = useCallback(() => {
        if (isLogin) {
            onLoginClick();
        } else {
            onRegistrationClick();
        }
    }, [isLogin, onLoginClick, onRegistrationClick]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={isLogin ? t('LoginForm') : t('RegistrationForm')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                onChange={onChangeEmail}
                value={email}
                placeholder={t('Email')}
                type="email"
                className={cls.input}
            />
            {!isLogin && (
                <Input
                    onChange={onChangeUsername}
                    value={username}
                    placeholder={t('Username')}
                    type="text"
                    className={cls.input}
                />
            )}
            <Input
                onChange={onChangePassword}
                value={password}
                placeholder={t('Password')}
                type="password"
                className={cls.input}
            />
            <Button onClick={onToggleForm} theme={ButtonTheme.CLEAR} className={cls.toggleFormBtn}>
                <Text
                    theme={TextTheme.PRIMARY}
                    text={isLogin ? t('Create an account') : t('Already have an account?')}
                />
            </Button>
            <Button
                disabled={isLoading}
                onClick={handleSubmit}
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {isLogin ? t('Login') : t('Register')}
            </Button>

        </div>
    );
});
