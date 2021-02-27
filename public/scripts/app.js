"use strict";

var app = {
  telephones: ['İphone X', 'İphone XI', 'İphone 9'],
  descriptions: ['64GB', '128GB', '246GB'],
  price: [10000, 11000, 12000]
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var tel = event.target.elements.txtTel.value;
  var aciklama = event.target.elements.txtDesc.value;
  var fiyat = event.target.elements.txtPrice.value;

  if (tel && aciklama && fiyat) {
    app.telephones.push(tel);
    app.price.push(fiyat);
    app.descriptions.push(aciklama);
  } else {
    console.log("Boş alanları doldurun !!!");
  }

  render();
};

var onClickReset = function onClickReset() {
  app.telephones = [];
  app.descriptions = [];
  app.price = [];
  render();
}; // const sabit değerlerde ileride değiştirilmeyecekleri zaman kullanılır.


var render = function render() {
  // let aynı isimde bir değişken vermemek yani override yapmamak için kullanılır.
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Ecommerce App"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "#"), /*#__PURE__*/React.createElement("th", null, "Telefon"), /*#__PURE__*/React.createElement("th", null, "Depolama"), /*#__PURE__*/React.createElement("th", null, "Fiyat"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, app.telephones.length == 0 ? 'Not available' : app.telephones.map(function (telephone, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index
    }, "#", index);
  })), /*#__PURE__*/React.createElement("td", null, app.telephones.length == 0 ? 'Not available' : app.telephones.map(function (telephone, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index
    }, telephone);
  })), /*#__PURE__*/React.createElement("td", null, app.descriptions.length == 0 ? 'Not available' : app.descriptions.map(function (description, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index
    }, description);
  })), /*#__PURE__*/React.createElement("td", null, app.price.length == 0 ? 'Not available' : app.price.map(function (fiyat, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index
    }, fiyat);
  }))))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    onClick: onClickReset
  }, "S\u0131f\u0131rla"), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "txtTel"
  }, "Telefon :"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtTel",
    id: "txtTel"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "txtDesc"
  }, "\xD6zellikler :"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtDesc",
    id: "txtDesc"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "txtPrice"
  }, "Fiyat :"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtPrice",
    id: "txtPrice"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Telefon Ekle")));
  ReactDOM.render(template, root);
};

render();
