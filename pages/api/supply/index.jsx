import SupplyJSON from "../../../app/data/sc-locations.json";

export default function handler(req, res) {
  res.status(200).json(SupplyJSON);
}
