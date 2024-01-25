const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// Implémenter le port 8081 pour le serveur de développement
module.exports = {
  devServer: {
    port: 8081
  }
}