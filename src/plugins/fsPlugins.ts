import fs from "fs";
import path from "path";

interface TreeList {
  label: string;
  src: string;
  children: TreeList[];
}
function getDirOfFiles(dir: string) {
  // eslint-disable-next-line no-undef
  const list: TreeList = {
    label: path.basename(dir),
    src: dir,
    children: [],
  };
  let dirNum = 0; //下次放文件夹的位置
  const dirs = fs.readdirSync(dir); //读文件
  dirs.forEach((value) => {
    const newDir = path.join(dir, value);
    const stat = fs.statSync(newDir);
    if (stat.isDirectory()) {
      //如果是文件夹
      // list.children.push(getDirOfFiles(newDir))
      list.children.splice(dirNum, 0, getDirOfFiles(newDir));
      dirNum++;
    } else if (stat.isFile()) {
      //如果是文件
      list.children.push({
        label: value,
        src: newDir,
        children: [],
      });
    }
  });
  return list;
}
export default (mainWindow: any, ipcMain: any) => {
  //获取目录下所有的文件
  ipcMain.on("getDirAll", function (_event: any, _data: string) {
    const dir = getDirOfFiles(_data);
    mainWindow.webContents.send("getDirAll", dir.children); //发送ipc消息给前端
  });
};
