const fs = require('fs');
const path = require('path');
const ffmpegPath = 'C:/path_system/ffmpeg';
const ffmpegConverter = require('fluent-ffmpeg');
ffmpegConverter.setFfmpegPath(ffmpegPath);

function convertBikToMp3(bikFilePath, outputFilePath) {
  return new Promise((resolve, reject) => {
    ffmpegConverter()
      .input(bikFilePath)
      .output(outputFilePath)
      .on('end', function() {
        console.log(`Converted ${bikFilePath} to ${outputFilePath}`);
        resolve();
      })
      .on('error', function(err) {
        console.log(`Error during conversion for ${bikFilePath}:`, err.message);
        reject(err);
      })
      .audioCodec('libmp3lame')
      .run();
  });
}

const bikFilesFolder = 'bikfiles';
const outputFolder = 'output';

fs.readdir(bikFilesFolder, function(err, files) {
  if (err) {
    console.log('Error reading the BIK files folder:', err.message);
    return;
  }

  const conversionPromises = files.map(function(file) {
    const bikFilePath = path.join(bikFilesFolder, file);
    const outputFileName = path.parse(file).name + '.mp3';
    const outputFilePath = path.join(outputFolder, outputFileName);
    return convertBikToMp3(bikFilePath, outputFilePath);
  });

  Promise.all(conversionPromises)
    .then(function() {
      console.log('All files converted successfully.');
    })
    .catch(function(err) {
      console.log('Error occurred during conversion:', err);
    });
});
