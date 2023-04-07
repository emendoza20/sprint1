const showFiles = (folder) => {
  const cp = require('child_process');
  //const exec_options = {}
  //cp.exec('dir',exec_options, (err, stdout, stderr) =>
  cp.exec(folder, (err, stdout, stderr) => { //The dir command displays a list of files and subdirectories in a directory in Windows. In Linux is ls
      console.log(stdout)
  });
}
showFiles('dir');
