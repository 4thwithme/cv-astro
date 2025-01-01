import html_to_pdf from "html-pdf-node";
import { glob } from "glob";
import fs from "fs";

let options = { format: "A4", timeout: 20000 };

export const GET = async () => {
  try {
    const files = await glob("**/temp/**/index.*", {
      signal: AbortSignal.timeout(20000),
      ignore: ["node_modules/**"],
      absolute: true,
    });

    const content = fs.readFileSync(files[0], "utf8");

    const file = { content };
    const buffer = await html_to_pdf.generatePdf(file, options);

    return new Response(buffer, {
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    throw new Error(
      `Something went wrong in pdf-resource.pdf route!: ${error}`
    );
  }
};
