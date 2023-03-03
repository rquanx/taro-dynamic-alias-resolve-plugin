const { join } = require('path');
const cwd = __dirname;

// 供 CLI 编译时使用的 Taro 插件入口
const comileConfig = {
  input: join(cwd, 'src/index.js'),
  output: {
    file: join(cwd, 'dist/index.js'),
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
};

module.exports = [comileConfig];
