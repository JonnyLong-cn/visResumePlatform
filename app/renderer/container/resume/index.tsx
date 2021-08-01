import React from 'react';
import ResumeButton from '@src/common/components/ResumeButton';
// import fileAction from '@common/utils/file';
// import { getAppPath } from '@src/common/utils/appPath';

function Resume() {
  // getAppPath().then((rootPath:string)=>{
  //   console.log("目录为：",rootPath);
  //   console.log("读取数据为：");
  //   fileAction
  //   .read(`${rootPath}app/renderer/container/resume/index.tsx`,'utf8')
  //   .then((data)=>{
  //     console.log(data);
  //   })
  // })
  return (
    <div>
      <div>我是简历模块</div>
      <ResumeButton size="big" width={200} disabled={false}>哈哈</ResumeButton>
    </div>
  );
}
export default Resume;