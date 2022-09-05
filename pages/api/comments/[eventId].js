import { connectionDb, insertIntoDocument } from "../../../helper/db-utils";

async function comments(req, res) {
  const id = req.query.eventId;

  let client;

  try {
    client = await connectionDb();
  } catch (error) {
    res.status(500).json({
      status: `Falid`,
      message: `Connection to the database Failed...`,
    });
    return;
  }

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
      eventtId: id,
    };

    let result;

    try {
      result = await insertIntoDocument(client, "comments", userInput);
    } catch (error) {
      res.status(500).json({
        status: `Faild`,
        message: `Inserting to Database Failed`,
      });
      return;
    }

    userInput.id = result.insertedId;

    res.status(201).json({
      status: `Success`,
      data: userInput,
    });
  }
  if (req.method === "GET") {
    const db = client.db();
    const dummyComments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      status: `Success`,
      data: dummyComments,
    });
  }
  await client.close();
}

export default comments;
