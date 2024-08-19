import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter render', () => {
    test('Render counter', () => {
        componentRender(<Counter />);
        const valueTitle = screen.getByTestId('value-title');
        expect(valueTitle).toHaveTextContent('0');
    });
    test('Increment button', () => {
        componentRender(<Counter />);
        const valueTitle = screen.getByTestId('value-title');
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(valueTitle).toHaveTextContent('1');
    });
    test('Decrement button', () => {
        componentRender(<Counter />);
        const valueTitle = screen.getByTestId('value-title');
        const decrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementBtn);
        expect(valueTitle).toHaveTextContent('-1');
    });
});
