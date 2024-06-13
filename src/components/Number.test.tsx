import {render, screen} from '@testing-library/react';
import Numbers from './Numbers';

describe('Numbers component', () => {
    it('displays random numbers correctly', async () => {
        const mockRandomNumbers = [12, 18, 57, 28, 56, 31, 7]; 

        render(<Numbers randomNumbers={mockRandomNumbers} />);
    
        for (let i = 0; i < mockRandomNumbers.length; i++) {
          const numberElement = screen.getByTestId(`number-${i}`);
          expect(numberElement).toBeInTheDocument();
          expect(numberElement).toHaveTextContent(mockRandomNumbers[i].toString());
        }
    
        const numberElements = screen.getAllByTestId(/^number-/);
        expect(numberElements.length).toBe(7);
      });
})