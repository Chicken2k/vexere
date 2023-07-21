const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// 1) header : quy định loại giải thuật mã hoá token , loại token
// 2)Payload : data mà bạn cần lưu trong token
// 3) signature : là 1 key cho mình tự định nghĩa để tính bảo mật cao hơn
const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  // console.log(req.body);
  try {
    // các bước mã hoá password
    // 1) tạo chuỗi ngẫu nhiên + password => tôi ưu hơn

    //genSaltSync tạo theo kiểu đồng bộ (là chạy xong ms chạy tiếp)
    // độ dài =10
    const salt = bcrypt.genSaltSync(10);
    // 2) mã hoá password + với chuỗi ngẫu nhiêu tạo ra password bảo mật hơn
    //mã hoá salt + password
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // b1 : phải xác định được email đăng nhập
  const user = await User.findOne({ where: { email } });
  if (user) {
    // b2 : kiểm tra  password
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      // plaload dữ liệu muốn mã hoá nó đi
      // mã hoá trong oject
      //1 đoạn mã hoá thông tin , 2 cái key bảo mật (secret Key) dùng để verify có hợp lệ không , 3 thời gian tồn tại
      const token = jwt.sign({ email: user.email, type: user.type }, "lan123", {
        expiresIn: 60 * 60,
      });
      res.status(200).send({ mess: "dang nhap thanh cong", token: token });
    } else {
      res.status(200).send("dang nhap that bai");
    }
  } else {
    res.status(404).send("user not found");
  }
};

module.exports = { register, login };
