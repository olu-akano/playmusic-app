import {render, screen} from '@testing-library/react';
import {LikeButton} from '.';

describe('LikeButton', () =>{
    beforeEach(() =>{
        render(<LikeButton />)
    })

    test('renders a span with a heart (❤) in it', () => {
        let heartSpan = screen.getByRole("switch")
        expect(heartSpan.textContent).toBe('❤')
    })

    test('changes colour of heart when clicked', () => {
        let heartSpan = screen.getByRole("switch")
        let initColour = heartSpan.style.color
        userEvent.click(heartSpan)
        let clickedColour = heartSpan.style.color
        expect(clickedColour).not.toBe(initColour)
    })
    
})