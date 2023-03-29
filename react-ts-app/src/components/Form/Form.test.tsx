import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.URL.createObjectURL = () => {};

  it('have all fields', () => {
    render(<Form setCards={() => {}} />);
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

  it('submit with empty fields', async () => {
    const user = userEvent.setup();
    render(<Form setCards={() => {}} />);
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(submitButton);

    await waitFor(() => expect(screen.queryByTestId('submit-modal')).not.toBeInTheDocument());
  });

  it('submit with full fields', async () => {
    const user = userEvent.setup();

    render(<Form setCards={() => {}} />);

    const name = screen.getByRole('textbox', { name: /your name/i });
    const email = screen.getByRole('textbox', { name: /your email/i });
    const textbox = screen.getByRole('textbox', { name: /Write a comment/i });
    const select = screen.getByRole('combobox', { name: /Most impressive art work:/i });
    const date = screen.getByTestId('dateInput');
    const file = screen.getByTestId('fileInput');
    const checkbox = screen.getByRole('checkbox', { name: /Nice lightning/i });
    const radio = screen.getByRole('radio', { name: /yes/i });

    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    await userEvent.upload(file, fakeFile);
    await userEvent.type(name, 'Lola');
    await userEvent.type(email, 'lola@gmail.com');
    await userEvent.type(textbox, 'Really nice place, cool events and beautiful artworks!');
    await userEvent.selectOptions(select, [`"Innocence" Ria Arante`]);
    await userEvent.type(date, '2022-12-31');
    await userEvent.click(checkbox);
    await userEvent.click(radio);

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(submitButton);

    await screen.findByTestId('submit-modal').then((el) => expect(el).toBeInTheDocument());
  });
});
