// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withApiAuthRequired } from "@auth0/nextjs-auth0"

export default withApiAuthRequired(function handler(req, res) {
  res.status(200).json({ name: "John Doe" })
})
