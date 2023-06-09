<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>BIK to MP3 Converter</h1>
  <p>This script is used to convert BIK audio files to MP3 format using the FFmpeg library. It takes a folder containing BIK files as input, converts each file to MP3, and saves the converted files in the specified output folder.</p>
  <h2>Prerequisites</h2>
  <p>Before using this script, make sure you have the following dependencies installed:</p>
  <ul>
    <li><a href="https://nodejs.org">Node.js</a> - JavaScript runtime environment.</li>
    <li><a href="https://ffmpeg.org">FFmpeg</a> - A complete, cross-platform solution to record, convert, and stream audio and video.</li>
  </ul>
  <h2>Installation</h2>
  <ol>
    <li>Clone the repository or download the script file.</li>
    <li>Install the required dependencies by running the following command in the terminal:</li>
  </ol>
  <pre><code>npm install fluent-ffmpeg</code></pre>
  <ol start="3">
    <li>Update the <code>ffmpegPath</code> variable in the script to point to the location of the FFmpeg executable on your system:</li>
  </ol>
  <pre><code>const ffmpegPath = 'C:/path_system/ffmpeg';</code></pre>
  <h2>Usage</h2>
  <p>To convert BIK files to MP3, perform the following steps:</p>
  <ol>
    <li>Place the BIK files that you want to convert in a folder. By default, the script expects the BIK files folder to be named <code>bikfiles</code>. If you want to use a different folder name, update the <code>bikFilesFolder</code> variable in the script.</li>
    <li>Create an output folder where the converted MP3 files will be saved. By default, the output folder is named <code>output</code>. If you want to use a different folder name, update the <code>outputFolder</code> variable in the script.</li>
    <li>Run the script using the following command:</li>
  </ol>
  <pre><code>node bikToMP3.js</code></pre>
  <p>The script will read the BIK files from the specified folder, convert each file to MP3 format, and save the converted files in the output folder.</p>
  <p>Once the conversion process is complete, the script will log a success message indicating that all files have been converted successfully.</p>
  <h2>Troubleshooting</h2>
  <p>If you encounter any issues or errors during the conversion process, ensure that:</p>
  <ul>
    <li>The FFmpeg executable path (<code>ffmpegPath</code>) is correctly set to the location of the FFmpeg executable on your system.</li>
    <li>The BIK files folder (<code>bikFilesFolder</code>) contains the BIK files you want to convert.</li>
    <li>The output folder (<code>outputFolder</code>) exists and is writable.</li>
  </ul>
  <p>If you need further assistance, feel free to reach out for support.</p>
  <h2>License</h2>
  <p>This script is provided under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
</body>
</html>
