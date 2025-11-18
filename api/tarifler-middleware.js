const { getById } = require("./tarifler-model");
const checkId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const idBul = await getById(id);
    if (!idBul) {
      return res.status(404).json({ message: "ID not Found" });
    }
    req.id = id;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = checkId;
