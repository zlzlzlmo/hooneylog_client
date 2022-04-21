class ApiManager<T> {
  private encodeURIQuery: string | null = null;

  constructor(query: string) {
    this.encodeURIQuery = encodeURIComponent(query);
  }

  async sanityFetch(): Promise<T> {
    const res = await fetch(
      `https://e5m09ops.api.sanity.io/v2021-10-21/data/query/production?query=${this.encodeURIQuery}`,
    );
    const { result } = await res.json();
    return result;
  }
}

export default ApiManager;
