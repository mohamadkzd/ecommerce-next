const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};

const handelError = (message) => {
  if (typeof message === "object") {
    const errors = [];
    Object.keys(message).map((key) => {
      message[key].map((e) => {
        errors.push(e);
      });
    });
    return errors.join();
  }
  return message;
};

const salePercent = (price, salePrice) => {
  return Math.round(((price - salePrice) / price) * 100);
};

export { numberFormat, handelError, salePercent };
