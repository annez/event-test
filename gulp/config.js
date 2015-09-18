var src     = './src';
var dest    = './dist';
var dataDir = '../../data/';
var testDir = './test/*.test.js';

module.exports = {
  src: src,
  dest: dest,
  data: dataDir,
  testDir: testDir,
  browserSync: {
    server: {
      baseDir: [dest]
    },
    files: [
      dest + "/**"
    ]
  }
}
