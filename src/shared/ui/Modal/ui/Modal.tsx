import React, {
    useCallback,
    useEffect, useRef, useState, type ReactNode,
} from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?:ReactNode
  isOpen:boolean
  onClose:() => void
}

const ANIMATION_DELAY = 300;
export const Modal = (props:ModalProps) => {
    const {
        children, className, isOpen, onClose,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const contentClickHandler = (e:React.MouseEvent) => {
        e.stopPropagation();
    };
    const keyDownHandler = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', keyDownHandler);
        }
        return () => {
            clearTimeout(timeoutRef.current);
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [isOpen, keyDownHandler]);
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler} aria-hidden="true">
                    <div className={cls.content} onClick={contentClickHandler} aria-hidden="true">
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
