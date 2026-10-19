import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.onkernel.com/mcp",
  description: "Run cloud browsers for AI agents.",
  auth: connect("mcp.onkernel.com/prj_Q9Z2wwIECjjt1zWaC1wB5gCAHblY"),
});
