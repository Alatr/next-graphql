import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  verbose: true,
  schema: "./src/app/api/graphql/schema.ts",
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};
export default config;
