/*eslint-disable */
export default (req, res) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
};
