import React from 'react'
import {render, screen} from '@testing-library/react'
import index from '../index'
    
test('can load smurf info', () =>{
    render(<index />)
    const firstName = screen.findByText(/Brainey/i)
})
