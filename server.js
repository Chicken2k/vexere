const express = require("express");
const path = require("path");
//sequelize S viết hoa là class , s thường đối tượng new ra class => đối tượng ra mới là kết nối
const { sequelize } = require("./models");
const rootRouter = require("./routers/index");
const app = express();

// cài ứng dụng sử dụng kiểu json
app.use(express.json());
app.use('/api/v1',rootRouter);
// cài static file
// __dirname dùng để trỏ đúng ngay thằng sever , và từ đó có thể chạy đúng thư mục , nhìu khi nó sẽ chạy lộn xộn file
const publibPathDirectory = path.join(__dirname, "./public");
// dùng cái đường dẫn
app.use(express.static(publibPathDirectory));

// lắng nghe sự kiện kết nối
app.listen(7000, async () => {
  console.log("App listening on http://localhost:7000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
