import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

let currentCategory; 

const portrait = { name: "portrits", description: "Portraits of the people in my life." };

afterEach(cleanup)

describe('Gallery is rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });
})