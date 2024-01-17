const db = require("../config/db");

class UserController {
  index(req, res, next) {
    const query = `SELECT * FROM classicmodels.customers;`;
    db.query(query, (err, results) => {
      if (err) return res.send(err);

      res.send(results);
    });
  }

  profile(req, res, next) {
    const { id } = req.query;
    const query = `SELECT * FROM customers WHERE customerNumber = "${id}"; `;
    db.query(query, (err, results) => {
      if (err) return res.send(err);
      res.send(results);
    });
  }

  email(req, res, next) {
    const { id } = req.query;
    const query = `SELECT phone FROM customers WHERE customerNumber = "${id}"; `;
    db.query(query, (err, results) => {
      if (err) return res.send(err);
      res.send(results);
    });
  }

  image_user(req, res, next) {
    res.send("image");
  }
  create(req, res, next) {
    const {
      customerNumber,
      customerName,
      contactLastName,
      contactFirstName,
      addressLine1,
      phone,
      city,
      country,
    } = req.body;

    if (
      !customerNumber ||
      !customerName ||
      !contactLastName ||
      !contactFirstName ||
      !addressLine1 ||
      !phone ||
      !city ||
      !country
    ) {
      return res.send("Phải điền đầy đủ thông tin");
    }

    const query = `INSERT INTO customers(customerNumber,customerName,
                                        contactLastName,
                                        contactFirstName,addressLine1,
                                        phone,
                                        city,
                                        country) VALUES 
                                        ('${customerNumber}',
                                        '${customerName}','${contactLastName}','${contactFirstName}','${addressLine1}','${phone}','${city}','${country}')`;

    db.query(query, (err, results) => {
      if (err) return res.send(err);
      res.send(results);
    });
  }
  update(req, res, next) {
    const {
      customerNumber,
      customerName,
      contactLastName,
      contactFirstName,
      addressLine1,
      phone,
      city,
      country,
    } = req.body;

    if (
      !customerNumber ||
      !customerName ||
      !contactLastName ||
      !contactFirstName ||
      !addressLine1 ||
      !phone ||
      !city ||
      !country
    ) {
      return res.send("Phải điền đầy đủ thông tin");
    }
    const query = `UPDATE customers
    SET  
          customerName ="${customerName}",
          contactLastName="${contactLastName}",
          contactFirstName="${contactFirstName}",
          addressLine1="${addressLine1}",
          phone="${phone}",
          city="${city}",
          country="${country}"
    WHERE customerNumber = ${customerNumber};`;
    db.query(query, (err, results) => {
      if (err) return res.send(err);
      res.send("updated thanh cong");
    });
  }
}

module.exports = new UserController();
