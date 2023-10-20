export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const result = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const data = await result.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "failed to load data" });
  }
}
