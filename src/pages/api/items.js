export default async function handler(req, res) {
  try {
    const { query } = req.query;
    const result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=4`
    );
    const data = await result.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "failed to load data" });
  }
}
