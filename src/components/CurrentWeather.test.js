import React from 'react'
import { render, screen } from '@testing-library/react'
import { CurrentWeather } from './CurrentWeather'


test('renders without error', () => {
    render(<CurrentWeather />)
    expect(
        screen.getByText(/Welcome to OnDemandWeather/i)
      ).toBeInTheDocument();
})