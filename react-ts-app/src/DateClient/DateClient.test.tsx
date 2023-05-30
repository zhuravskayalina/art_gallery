import dateClient from './DateClient';

describe('DateClient', () => {
  it('return correct formatted date', () => {
    expect(dateClient.formatDate(1679749469329)).toBe('25.03.2023');
    expect(dateClient.formatDate(3322323232)).toBe('08.02.1970');
  });
});
