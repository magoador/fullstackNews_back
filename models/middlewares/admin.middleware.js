const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.json("Вы не авторизованы!");
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") {
    return res.json("Неверный тип токена");
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY);

    if (req.user.login === 'admin') {
        next();
    } else {
        return res.json('Вы не админ!')
    }
  } catch (e) {
    return res.json("Неверный токен");
  }
};
