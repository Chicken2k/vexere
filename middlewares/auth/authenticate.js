const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    //"lan123": cái key bảo mật (secret Key) dùng để verify có hợp lệ không
    const decode = jwt.verify(token, "lan123");
    if (decode) {
      // chưa hỉu dòng dưới
      req.user = decode;
      console.log(req);
      return next();
    } else {
      res.status(401).send("chưa đang nhập");
    }
  } catch (error) {
    res.status(401).send("chưa đang nhập");
  }
};

module.exports = {
  authenticate,
};
