import { MongoClient } from "mongodb";

async function comments(req, res) {
  const id = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://Mikey:myNameIs_Mikey@cluster0.mcfpfpr.mongodb.net/newsLetter?retryWrites=true&w=majority"
  );

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

    const db = client.db();
    const result = await db.collection("comments").insertOne(userInput);

    console.log(result);

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
