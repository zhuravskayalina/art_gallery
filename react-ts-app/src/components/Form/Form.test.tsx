import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import exampleImage from '../../assets/images/gallery1.jpeg';

describe('Form', () => {
  it('have all fields', () => {
    render(<Form />);
    expect(screen.getByRole('form', { name: '' })).toBeInTheDocument();
    expect(screen.getByRole('list', { name: '' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /your name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /your email/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Innocence/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Wallowing/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Resistance/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Basket/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Vonnegut/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: '' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Nice lightning/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Interesting events/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Friendly staff/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /I dont like it here/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /no/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /submit/i,
      })
    ).toBeInTheDocument();
  });

  it('submit with empty fields', () => {
    render(<Form />);
    const name = screen.getByRole('textbox', { name: /your name/i });
    const email = screen.getByRole('textbox', { name: /your email/i });
    const textbox = screen.getByRole('textbox', { name: /Write a comment/i });
    const combobox = screen.getByRole('combobox', { name: /Most impressive art work:/i });
    const date = screen.getByTestId('dateInput');
    const file = screen.getByTestId('dateInput');
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    fireEvent.change(name, { target: { value: 'lola' } });
    fireEvent.change(email, { target: { value: 'hihi' } });
    fireEvent.change(textbox, {
      target: { value: `Cool` },
    });
    fireEvent.change(combobox, { target: { value: '' } });
    fireEvent.change(date, { target: { value: 4678406400000 } });
    fireEvent.change(file, { target: { value: '' } });

    submitButton.click();
    expect(screen.getByText(/Please/i)).toBeInTheDocument();
  });

  it('submit with full fields', () => {
    render(<Form />);
    const name = screen.getByRole('textbox', { name: /your name/i });
    const email = screen.getByRole('textbox', { name: /your email/i });
    const textbox = screen.getByRole('textbox', { name: /Write a comment/i });
    const combobox = screen.getByRole('combobox', { name: /Most impressive art work:/i });
    const date = screen.getByTestId('dateInput');
    const file = screen.getByTestId('dateInput');
    const checkbox = screen.getByRole('checkbox', { name: /Nice lightning/i });
    const radio = screen.getByRole('radio', { name: /yes/i });

    fireEvent.change(name, { target: { value: 'Lola' } });
    fireEvent.change(email, { target: { value: 'lola@gmail.com' } });
    fireEvent.change(textbox, {
      target: { value: `Really nice place, cool events and beautiful artworks!` },
    });
    fireEvent.change(combobox, { target: { value: `"Innocence" Ria Arante` } });
    fireEvent.change(date, { target: { value: 1678406400000 } });
    fireEvent.change(file, { target: { value: { exampleImage } } });
    checkbox.click();
    radio.click();

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    submitButton.click();
    expect(screen.queryByText(/Please/i)).not.toBeInTheDocument();
  });
});
