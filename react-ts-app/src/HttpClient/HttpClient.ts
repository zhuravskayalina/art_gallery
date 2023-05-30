export class HttpClientMethods {
  public get = async (url: string): Promise<Response> => {
    const response = await fetch(url, {});

    return response;
  };

  public post = async <T>(url: string, body: T): Promise<Response> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response;
  };

  public patch = async (url: string, abortSignal?: AbortSignal): Promise<Response> => {
    const response = await fetch(url, {
      ...(abortSignal && { signal: abortSignal }),
      method: 'PATCH',
    });

    return response;
  };

  public put = async <T>(url: string, body: T): Promise<Response> => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response;
  };

  public delete = async (url: string): Promise<Response> => {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    return response;
  };
}

export const HttpClient = new HttpClientMethods();
