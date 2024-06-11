import {render, screen} from '@testing-library/react';
import Footer from './Footer';

it("should display: Choose your lucky numbers.", () => {
    render(<Footer />)
    const message1 = screen.getByText(/Coded by/i)
    expect(message1).toBeVisible();

    const message2 = screen.getByText(/open-source on/i)
    expect(message2).toBeVisible();
})

it("should display the link to Luna Smith's website", () => {
    render(<Footer />);
    const lunaLink = screen.getByRole('link', { name: /Luna Smith/i });
    expect(lunaLink).toBeInTheDocument();
    expect(lunaLink).toHaveAttribute('href', 'https://www.lunasmithart.com/');
});

it("should display the link to Luna Smith's GitHub repository", () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Lu-Smith/vitest-react-choose-lotto-numbers-app');
});

