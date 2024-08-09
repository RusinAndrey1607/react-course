import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Spinner.module.scss';

interface SpinnerProps {
  className?: string,
}

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={classNames(cls['lds-ring'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
