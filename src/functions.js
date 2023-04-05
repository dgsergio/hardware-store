export const sendRequest = async (body) => {
    try {
    const response = await fetch(
      'https://hardware-store-93ec6-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok)
      throw new Error('Fail to resolve the request error: ' + response.status);
    // const data = await response.json();
  } catch (err) {
    console.log(err);
  }
};
