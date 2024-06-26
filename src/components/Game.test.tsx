import {render, screen, fireEvent, act} from '@testing-library/react';
import Game from './Game';
import Machine from '../assets/MachinesSpreadsheet.png';

beforeEach(() => {
    // Mock the Image constructor
    class MockImage {
        onload: (() => void) | null = null;
        set src(_value: string) {
          setTimeout(() => {
            if (this.onload) {
              this.onload();    
            }
          }, 0);
        }
      }
    
      globalThis.Image = MockImage as new (width?: number | undefined, height?: number | undefined) => HTMLImageElement;
  });

describe('Game component', () => {
    it("should render canvas", () => {
        const handleResetMock = vi.fn();
        render(<Game handleReset={handleResetMock} />);

        const canvasComponent = screen.getByRole('canvas')
        expect(canvasComponent).toBeVisible();
    });
    it("should render Numbers component", () => {
        const handleResetMock = vi.fn();
        render(<Game handleReset={handleResetMock} />);

        const numbersComponent = screen.getByTestId('numbers')
        expect(numbersComponent).toBeVisible();
    });
    it("should render play button", () => {
        const handleResetMock = vi.fn();
        render(<Game handleReset={handleResetMock} />);

        const playeButton = screen.getByText('Play')
        expect(playeButton).toBeVisible;
    });
    it('should start animation when Play button is clicked', () => {
        const handleResetMock = vi.fn();
        render(<Game handleReset={handleResetMock} />);

        const playButton = screen.getByText('Play');
        fireEvent.click(playButton);
    });
    it('should animate through frames and reset play state', () => {
        vi.useFakeTimers();
        const handleResetMock = vi.fn();
        render(<Game handleReset={handleResetMock} />);
        
        const playButton = screen.getByText('Play');
        
        fireEvent.click(playButton);

        // Mock the animation frame progression
        for (let i = 0; i < 7; i++) {
        act(() => {
            vi.advanceTimersByTime(150);
        });
        }

        fireEvent.click(playButton);

        // Clean up timers
        vi.useRealTimers();
    });
});

describe('MockImage', () => {
    it('should trigger onload when src is set', () => {
        let onloadTriggered = false;

        const img = new Image();
        img.onload = () => {
            onloadTriggered = true;
        }
        img.src = Machine;

        setTimeout(() => {
            expect(onloadTriggered).toBe(true);
        }, 10);
    })
})