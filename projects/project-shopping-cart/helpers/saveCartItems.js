const saveCartItems = (cartItemToSave) => {
  localStorage.setItem('cartItems', cartItemToSave);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
