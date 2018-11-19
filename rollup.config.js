import uglify from "rollup-plugin-uglify"

export default [{
    input: "./index.js",
    plugins: [uglify()],
    output: [{
        file: "build/kelbas.min.js",
        format: "umd",
        name: "kelbas"
      },
      {
        file: "docs/kelbas.min.js",
        format: "umd",
        name: "kelbas"
      }
    ]
  },
  {
    input: "./index.js",
    plugins: [uglify()],
    output: [{
        file: "build/kelbas.esm.js",
        format: "es",
        name: "kelbas"
      },
      {
        file: "docs/kelbas.esm.js",
        format: "es",
        name: "kelbas"
      }
    ]
  },
  {
    input: "./index.js",
    output: [{
        file: "docs/kelbas.js",
        format: "umd",
        name: "kelbas"
      },
      {
        file: "build/kelbas.js",
        format: "umd",
        name: "kelbas"
      }
    ]
  }
]
