// controller chịu trách nhiệm nhận res từ người dùng gữi lên
// lúc check validation ở đây ví dụ createStation
const { Op } = require("sequelize");
const { Station } = require("../models");
const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStation = async (req, res) => {
  const { name } = req.query;
  try {
    //xảy ra 2 trường hợp là có truyền name hoặc kh truyền name
    if (name) {
      const allStation = await Station.findAll({
        where: {
          name: {
            [Op.substring]: name,
          },
        },
      });
      res.status(200).send(allStation);
    } else {
      const allStation = await Station.findAll();
      res.status(200).send(allStation);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailStation = async (req, res) => {
  const { id } = req.params;
  try {
    const detailStation = await Station.findOne({ where: { id } });
    res.status(200).send(detailStation);
  } catch (error) {
    res.status(500).send("loi");
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    // const detailStation = await Station.findOne({ where: { id } });
    // detailStation.name = name;
    // detailStation.address = address;
    // detailStation.province = province;
    // await detailStation.save();
    const station = await Station.update(
      { name, address, province },
      {
        where: { id: id },
      }
    );
    res.status(200).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.destroy({ where: { id: id } });
    res.status(200).send("thanh cong");
  } catch (error) {
    res.status(500).send("that bai");
  }
};

module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
};
