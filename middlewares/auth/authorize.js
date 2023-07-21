//vì sao ? hiện tại là 1 cái hàm mà kh gọi vẫn sử dụng được 
// hàm bọc hàm mà phải gọi thì chạy , cuối bài 21

const authorize = (req, res, next) => {
  const { user } = req;
  //dùng findIndex vì khi mình có thể thêm 1 role khác vào được nữa 
  // findIndex tìm trong cái mảng có type đó kh 
  if (["ADMIN","VIP"].findIndex((type) => type === user.type) > -1) {
    return next();
  } else {
    res.status(403).send("đã đăng nhập nhưng kh có quyền");
  }
};
module.exports = { authorize };
