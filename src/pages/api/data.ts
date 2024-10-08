import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = [
    {
      id: 1,
      title: "Service 1",
      description: "This is the description for Service 1.",
    },
    {
      id: 2,
      title: "Service 2",
      description: "This is the description for Service 2.",
    },
    {
      id: 3,
      title: "Service 3",
      description: "This is the description for Service 3.",
    },
  ];

  res.status(200).json(data);
}
