import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    console.log(email);

    if (!email || !email.includes("@")) {
      res.status(400).json({
        status: `In-Valid`,
        message: `Validation failed for Email`,
      });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://Mikey:myNameIs_Mikey@cluster0.mcfpfpr.mongodb.net/newsLetter?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email });

    await client.close();

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
