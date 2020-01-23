const createUser = (req, res) => {
  res.send({
    status: 'OK',
    message: 'User created',
  });
};
const updateUser = (req, res) => {
  res.send('usuario actualizado');
};
const deleteUser = (req, res) => {
  res.send('usuario eliminado');
};
const getUsers = (req, res) => {
  res.send('usuarios:::::');
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
};
