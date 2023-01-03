import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: ["src/index.tsx"],
    output: {
      file: "dist/index.js",
      format: "cjs",
    },
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
    external: ["react"],
  },
];
