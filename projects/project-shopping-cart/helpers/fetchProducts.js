const fetchProducts = async (productParam) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productParam}`;
    const response = await fetch(url);
    const resultObject = await response.json();

    return resultObject;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
