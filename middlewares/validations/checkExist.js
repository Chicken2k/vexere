const { Station } = require("../../models/index");

// xem lại phần
//  const detailStation = Station.findOne({ where: { id: id } });
// nếu không sử dụng async await thì nó trả về promise , còn dùng là trả về đối tượng
const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const detailStation = await Model.findOne({ where: { id } });
    // await Model.findOne({ where: { id } });
    if (detailStation) {
      next();
    } else {
      res.status(404).send(" item does not exist");
    }
  };
};

module.exports = { checkExist };
