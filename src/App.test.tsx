import {render, screen} from '@testing-library/react';
import App from './App';

it("should display: Choose your lucky numbers.", () => {
    render(<App />)
    const message = screen.queryByText(/Choose your lucky numbers./i)
    expect(message).toBeVisible();
})

it("should render Footer.tsx", () => {
    render(<App />)
    const footerComponent = screen.getByRole('footer')
    expect(footerComponent).toBeInTheDocument();
})

it("should render canvas", () => {
    render(<App />)
    const canvasComponent = screen.getByRole('canvas')
    expect(canvasComponent).toBeInTheDocument();
})