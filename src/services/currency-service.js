class CurrencyService {
  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status} `);
    }
    return await res.json();
  }

  getCurrentExchange = async (currencyCode) => {
    const res = await this.getResource(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyCode}.json`
    );
    return res[currencyCode];
  };
}

export default CurrencyService;
