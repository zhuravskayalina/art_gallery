/* eslint-disable consistent-return */

import { HttpClient } from '../HttpClient/HttpClient';

enum Path {
  characters = 'character',
  locations = 'location',
  episodes = 'episode',
}

class APIClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'https://rickandmortyapi.com/api/';
  }

  public getCharacters = async () => {
    try {
      const response = await HttpClient.get(`${this.baseUrl}${Path.characters}`);

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      return false;
    }
  };
  public getCharacter = async (id: number) => {
    try {
      const response = await HttpClient.get(`${this.baseUrl}${Path.characters}/${id}`);

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      return false;
    }
  };
}

const ApiClient = new APIClient();

export default ApiClient;
