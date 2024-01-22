const db = require("../config/db");

class HomeController {
  index(req, res, next) {
    res.send("Hello world");
  }
  async search(req, res, next) {
    const inputValue = req.query.inputValue;
    try {
      if (inputValue && inputValue.length > 0) {
        const query = `SELECT * FROM products `;
        const searchProduct = await new Promise((resolve, reject) => {
          db.query(query, (err, resultsquery) => {
            if (err) {
              reject(err);
            } else {
              resolve(resultsquery);
            }
          });
        });

        const resultss = searchProduct.filter((item) =>
          item.productName
            .toLowerCase()
            .startsWith(inputValue.charAt(0).toLowerCase())
        );
        if (resultss.length > 0) {
          res.send(resultss);
        } else {
          return res.send("Không có sản phẩm");
        }
      }
    } catch (error) {
      console.error(error);
      throw res.send(error);
    }
  }
}

module.exports = new HomeController();
