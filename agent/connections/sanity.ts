import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sanity.io",
  description: "Query and edit content in your datasets.",
  auth: connect("mcp.sanity.io/prj_Q9Z2wwIECjjt1zWaC1wB5gCAHblY"),
});
