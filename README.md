# commonapi
> 整理的常用api。

## 一 安装/使用

下面是使用commonapi的一些最常见的方法。

### 1.1 Browser

#### 1.1.1 Script tag

```html
<script src="https://code.commonapi.com/commonapi-1.0.0.min.js"></script>
```

#### 1.1.2 Babel

[Babel](https://babeljs.io/) 是下一代JavaScript编译器。其中一个特性是现在可以使用ES6/ES2015模块，即使浏览器本身还不支持这个功能。

```js
import $ from commonapi
```

#### 1.1.3 Browserify/Webpack

也可以使用打包工具 [Browserify](http://browserify.org/) and [Webpack](https://webpack.github.io/). 有关使用这些工具的更多信息，请参阅相应的项目文档。 在脚本中，引用jQuery通常如下所示。。。

```js
var $ = require( "commonapi" )
```

#### 1.1.4 AMD (Asynchronous Module Definition)

AMD是为浏览器构建的模块化规范。更多信息，我们推荐查看[require.js' documentation]().

```js
define( [ "commonapi" ], function( $ ) {

} );
```

### 1.2 Node

[Node](https://nodejs.org/)本身包含jQuery , 首先用npm安装它

```sh
npm install commonapi
```

jQuery要在节点中工作，需要一个包含文档的窗口。由于Node中本机不存在这样的窗口，所以可以用[jsdom](https://github.com/jsdom/jsdom)之类的工具来模拟它. 这对于测试目的很有用。

```js
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "commonapi" )( window );
```
