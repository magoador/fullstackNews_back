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

    next();
  } catch (e) {
    return res.json("Неверный токен");
  }
};
