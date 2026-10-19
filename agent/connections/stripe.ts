import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.stripe.com",
  description: "Manage payments and financial workflows.",
  auth: connect("mcp.stripe.com/prj_Q9Z2wwIECjjt1zWaC1wB5gCAHblY"),
});
