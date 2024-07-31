import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {};
function MainPage(props: Props) {
    const { t } = useTranslation('main');

    return <div>{t('MainPage')}</div>;
}

export default MainPage;
