import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen:boolean
  onClose:() => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const { t } = useTranslation();

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
