import { useTranslation } from 'react-i18next';

type Props = {};

const AboutPage = (props: Props) => {
    const { t } = useTranslation('about');
    return <div>{t('AboutPage')}</div>;
};
export default AboutPage;
