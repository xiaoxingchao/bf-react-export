# bf-react-export

使用方式:

npm install bf-react-export -D

<!-- 引入 -->

import {exportExl} from 'bf-react-export'

<!-- 使用 -->
 <!-- 渲染数据 -->

const {data} = [{name:1,code:2},{name:2,code:2}];

<!-- 表格头部 -->

const header = [{code:'name',name:'名称'},{code:'code',name:'编号'}];

<!-- 使用参数 data数据源 header 表头 列表文件名字 -->

exportExl(data,header,'异常报警记录');
