function comments(req, res) {
  const id = req.query.eventtId;
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;

    if (
      !email ||
      !email.includes("@") ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(422).json({
        status: "Invalid",
        message: `Validation failed `,
      });
    }

    const userInput = {
      email,
      name,
      text,
    };
    console.log(userInput);

    res.status(201).json({
      status: `Success`,
      data: userInput,
    });
  } else {
    const dummyComments = [
      { id: 2, name: "John", comment: `please go watch john wick` },
      { id: 3, name: "Peter", comment: `Please re-watch spider man again` },
    ];

    res.status(200).json({
      status: `Success`,
      data: dummyComments,
    });
  }
}

export default comments;
