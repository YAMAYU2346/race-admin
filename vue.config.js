module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        extraResources: [
          {
            from: 'public/race-caption/',
            to: 'race-caption',
            filter: ['**/*']
          }
        ]
      }
    }
  }
}
