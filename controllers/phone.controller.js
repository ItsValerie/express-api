const Phone = require('../models').Phone;

exports.getPhone = async (req, res) => {
  const { id } = req.params;

  const phone = await Phone.findOne({
    where: {
      id,
    },
  });

  if (!phone) {
    return res.status(400).send({
      message: `No phone found with the id ${id}`,
    });
  }

  return res.send(phone);
};
