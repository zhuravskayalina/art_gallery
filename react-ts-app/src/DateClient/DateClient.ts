class DateClient {
  public formatDate(date: number | undefined): string {
    if (date) {
      const timestamp = Number(date);
      const newDate = new Date(timestamp);
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();
      const year = newDate.getFullYear();

      return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
    }
    return '';
  }
}

const dateClient = new DateClient();
export default dateClient;
