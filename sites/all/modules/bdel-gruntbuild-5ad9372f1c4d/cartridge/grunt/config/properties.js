module.exports = {
  settings: 'config/build.properties',
  instance: 'config/environment.<%= settings["build.target.environment"] %>.properties'
}
