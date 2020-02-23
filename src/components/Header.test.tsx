import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Header from "./Header";

describe('Header', () => {
    let logo: HTMLElement;
    const logoPath = '/assets/images/logo.svg';
    beforeAll(()=>{
        const { getByTestId } = render(<Header />);
        logo = getByTestId('logo');
    });

    it('finds logo', () => {
        expect(logo).toBeTruthy();
    });

    it('should show a logo in the header', () => {
        expect(logo).toHaveAttribute('src', logoPath);
    });
});
