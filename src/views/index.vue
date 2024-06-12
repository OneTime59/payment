<template>
    <el-timeline class="horizontal-timeline">
      <el-timeline-item v-for="(item, index) in timeline" :key="index" :timestamp="item.timestamp">
        {{ item.content }}
      </el-timeline-item>
    </el-timeline>
  </template>
   
  <script>
  export default {
    data() {
      return {
        timeline: [
          { timestamp: '2011-11-04', content: '这是一个事件' },
          { timestamp: '2011-11-05', content: '这是另一个事件' },
          // ...更多事件
        ],
      };
    },
  };
  </script>
   
  <style scoped>
  .horizontal-timeline {
    display: flex;
    flex-direction: row;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item {
    flex: 1;
    display: flex;
    align-items: flex-start;
    margin-left: 10px;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item:first-child {
    margin-left: 0;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item__content {
    flex-direction: row;
    align-items: center;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item__timestamp {
    order: 1;
    flex: 0 0 auto;
    margin: 0 0 0 10px;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item__node {
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #409eff;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item__node--large {
    width: 6px;
    height: 6px;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item__node--normal {
    width: 10px;
    height: 10px;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item__node--small {
    width: 14px;
    height: 14px;
  }
   
  .horizontal-timeline /deep/ .el-timeline-item__node--mini {
    width: 18px;
    height: 18px;
  }
  </style>