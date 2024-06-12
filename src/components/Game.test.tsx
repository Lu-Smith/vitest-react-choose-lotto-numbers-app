import {render, screen} from '@testing-library/react';
import Game from './Game';
import Machine from '../assets/MachinesSpreadsheet.png';

beforeEach(() => {
    // Mock the Image constructor
    class MockImage {
        onload: (() => void) | null = null;
        set src(value: string) {
          setTimeout(() => {
            if (this.onload) {
              this.onload();
            }
          }, 0);
        }
      }
    
      globalThis.Image = MockImage as new (width?: number | undefined, height?: number | undefined) => HTMLImageElement;
  });

it("should render canvas", () => {
    render(<Game />)
    const canvasComponent = screen.getByRole('canvas')
    expect(canvasComponent).toBeVisible();
})

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