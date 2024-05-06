const { defineConfig } = require("cypress")
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    specPattern: 'cypress/e2e/**/*.smoke.cy.{js,jsx,ts,tsx}',
    retries: {
      // Configure retry attempts for `cypress run`
      "runMode": 1,
      // Configure retry attempts for `cypress open`
      "openMode": 0
    },
    setupNodeEvents(on, config) {
      const fs = require('fs')
      const path = require('path')
      const glob = require('glob')

      getCompareSnapshotsPlugin(on, config);

      on('task', {
        writeFile ({filename, content = ''}) {
          const dir = path.dirname(filename)
          
          if (!fs.existsSync(dir)){
              fs.mkdirSync(dir, { recursive: true }) // recursive: true ensures all nested dirs are created
          }
          
          fs.writeFileSync(filename, content)
          return null
        },
        clearFileContent({filename}) {
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
