const path = require("path")
const PugPlugin = require("pug-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const glob = require("glob")
const dirName = "src/views/"
const files = glob.sync(path.join(dirName, "**/*.pug"))
const entryObject = files.reduce((obj, file) => {
  let filename = file.split(dirName).pop().slice(0, -4)
  obj[filename] = file
  return obj
}, {})
const variables = require("./variables.js")
const devMode =
  process.env.NODE_ENV === "production" ? "production" : "development"
const isDev = devMode === "development"
const publicPath = isDev ? "" : "/gogoro"
module.exports = {
  mode: devMode,
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: isDev ? "/" : publicPath + "/",
    filename: "assets/js/[name].[contenthash:8].js",
    clean: false,
  },
  entry: {
    ...entryObject,
    main: {
      import: "./src/scripts/main.ts",
      filename: "assets/js/main.js",
    },
    utils: {
      import: "./src/scripts/utils.ts",
      filename: "assets/js/utils.js",
    },
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "sources", to: "sources" }, { from: "public" }],
    }),
    new PugPlugin({
      pretty: true,
      modules: [
        PugPlugin.extractCss({
          filename: isDev
            ? "assets/css/[name].css"
            : "assets/css/[name].[contenthash:8].css",
        }),
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          embedFilters: {
            escape: true,
          },
          data: { ...variables, isDev, publicPath },
          method: "render",
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|svg)/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}
