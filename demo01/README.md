// Simple React Snippets快捷键：
// https://www.cnblogs.com/lemos/p/10926325.html


// 【git查看某次提交/更新所更改的文件及内容】
// https://blog.csdn.net/hyupeng1006/article/details/82979258

// 【优先使用Reactjs code snippets插件的命令】

react中使用prop-types检测props数据类型:
<!-- https://www.jianshu.com/p/a73fb26c88b5 -->
可以检测的类型
optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,


Markdown基本语法:
https://www.jianshu.com/p/191d1e21f7ed

npm install -save 和 -save-dev的区别：
npm install xxx: 安装项目到项目目录下，不会将模块依赖写入devDependencies或dependencies。
npm install -g xxx: -g的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm cinfig prefix的位置
npm install -save xxx：-save的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
npm install -save-dev xxx：-save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。


【遗留问题】：
1、20节的声明周期中，componentWillReceiveProps在子组件中误触发，原因是最新的react中废弃了，换成最新的static getDerivedStateFromProps，报错：`getDerivedStateFromProps` but its initial state is undefined. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `XiaojiejieItem`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.
2、第22节不同，原因为子组件检测不到shouldComponentUpdate的触发
3、26节和28节没看，动画，没什么用，等用到的的时候再看

