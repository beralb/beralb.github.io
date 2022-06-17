const fetchItem = async (idParam) => {
  try {
    const url = `https://api.mercadolibre.com/items/${idParam}`;
    const response = await fetch(url);
    const receivedObject = await response.json();
    return receivedObject;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
