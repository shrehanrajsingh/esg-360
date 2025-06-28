import WorldCountries from "../../../app/data/world-countries.json";

export default function handler(req, res) {
  res.status(200).json(WorldCountries);
}
