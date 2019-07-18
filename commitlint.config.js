module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'ci', // 与CI（持续集成服务）有关的改动
        'fix', // 修复bug
        'feat', // 增加新功能
        'perf', // 提高性能的改动
        'docs', // 只改动了文档相关的内容
        'test', // 添加测试或者修改现有测试
        'build', // 构造工具的或者外部依赖的改动，例如webpack，npm
        'style', // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        'chore', // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
        'revert', // 执行git revert打印的message
        'refactor', // 代码重构时使用
      ]]
  }
};
