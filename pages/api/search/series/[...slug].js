export default async function handler(req, res) {
  try {
    const { slug } = req.query;
    const URL = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}&language=en-GB&page=${slug[1]}&query=${slug[0]}&include_adult=false`;
    const response = await fetch(URL);
    const data = await response.json();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
