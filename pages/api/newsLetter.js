function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    console.log(email);

    res.status(201).json({
      status: `Success`,
    });
  } else {
    res.status(200).json({
      status: `Success`,
    });
  }
}

export default handler;
