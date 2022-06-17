const getSavedCartItems = () => {
  const savedLocalStorage = localStorage.getItem('cartItems');
  return savedLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
