const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  numTestsKeptInMemory: 10,
  e2e: {
    retries: {
      // Configure retry attempts for `cypress run`
      "runMode": 1,
      // Configure retry attempts for `cypress open`
      "openMode": 0
    },
    setupNodeEvents(on, config) {
      const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin')
      const fs = require('fs')
      const path = require('path')
      const glob = require('glob')

      addMatchImageSnapshotPlugin(on)

      on('task', {
        writeFile({ filename, content = '' }) {
          const dir = path.dirname(filename)

          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }) // recursive: true ensures all nested dirs are created
          }

          fs.writeFileSync(filename, content)
          return null
        },
        clearFileContent({ filename }) {
          if (fs.existsSync(filename)) {
            fs.writeFileSync(filename, '') // Overwrite with empty content
          }
          return null
        },
        deleteFiles(relativePath) {
          const absolutePath = path.join(__dirname, relativePath)
          const files = glob.sync(absolutePath)
          files.forEach((file) => {
            if (fs.existsSync(file)) {
              fs.unlinkSync(file)
            }
          })
          return null
        }
      })
    }
  },
})
