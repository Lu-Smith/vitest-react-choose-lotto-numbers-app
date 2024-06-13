import {render, screen} from '@testing-library/react';
import App from './App';

it("should display: Choose your lucky numbers.", () => {
    render(<App />)
    const message1 = screen.queryByText(/Choose your/i)
    expect(message1).toBeVisible();

    const message2 = screen.queryByText(/lucky/i)
    expect(message2).toBeVisible();

    const message3 = screen.queryByText(/numbers./i)
    expect(message3).toBeVisible();
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