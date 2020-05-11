module.exports = {
  name: 'kahoot-it-clone',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/kahoot-it-clone',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
