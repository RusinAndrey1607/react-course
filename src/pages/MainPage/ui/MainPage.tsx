import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {};
function MainPage(props: Props) {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>
                {t('MainPage')}

            </h1>
        </div>
    );
}

export default MainPage;
