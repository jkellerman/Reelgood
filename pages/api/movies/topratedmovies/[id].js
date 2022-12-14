export default async function handler(req, res) {
  try {
    const { id } = req.query;

    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&page=${id}&include_adult=false`;
    const response = await fetch(URL);
    const data = await response.json();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
