module.exports = {
  apps: [
    {
      name: "www",
      script: "./bin/www.js",
      instances: "max",
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
