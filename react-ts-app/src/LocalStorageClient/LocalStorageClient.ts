class LocalStorageClient {
  public get = (key: string) => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };

  public set = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  public remove = (key: string) => {
    localStorage.removeItem(key);
  };

  public setSearchValue = (value: string) => {
    localStorage.setItem('search-value', value.trim());
  };

  public getSearchValue = () => {
    const item = localStorage.getItem('search-value');
    if (item) {
      return item;
    }
    return null;
  };

  public removeSearchValue = () => {
    localStorage.removeItem('search-value');
  };
}

const LocalStorage = new LocalStorageClient();
export default LocalStorage;
