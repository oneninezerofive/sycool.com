# sycool.com

## 接口文档

|页面|请求参数|方式|url|
|-|-|-|-|
|首页|无|get|http://10.3.132.227:12345/home/floors|
|品牌优选|无|get|http://10.3.132.227:12345/brands/list|
|分类：种类|无|get|http://10.3.132.227:12345/categorys/list|
|分类：品牌|无|get|http://10.3.132.227:12345/brand/list|
|列表：搜索|value: 仅支持一段关键字, skip: 页数从0开始|get|http://10.3.132.227:12345/goods/search|
|列表：分类品牌|gName: 品牌名, skip: 页数从0开始|get|http://10.3.132.227:12345/goods/brand|
|列表：分类种类|type: 种类, skip: 页数从0开始|get|http://10.3.132.227:12345/goods/type|
|详情页|id: 商品id|get|http://10.3.132.227:12345/goods/detail|
|获取用户订单|uid: 用户id|get|http://10.3.132.227:12345/cart|
|添加订单|uid: 用户id, username: 用户名, gid: 商品id, number: 购买数量|post|http://10.3.132.227:12345/cart/addorder|
|修改订单购买数量|oid: 订单id, number: 购买数量|get|http://10.3.132.227:12345/cart/update|
|删除订单|oid: 订单id|get|http://10.3.132.227:12345/cart/del|
|用户登录|username: 用户名, password: 密码|post|http://10.3.132.227:12345/login|
|检查令牌|token: 令牌|post|http://10.3.132.227:12345/login/check|
|猜你喜欢|limit: 商品数量|get|http://10.3.132.227:12345/goods/random|
|猜你喜欢|无|get|https://www.easy-mock.com/mock/5d40092bfd74df5e8c45e490/list/imgurl|

## 任务分配与调整

### 吴梓豪
1. 框架搭建，项目管理

2. 编写后端接口，管理数据库

3. 制作个人中心页面、登录页面，改进购物车页面

### 何琪

1. 路由设定

2. 制作首页、品牌优选、分类页面，改进列表页和详情页

### 罗振洲

1. 制作列表页、详情页、购物车页面

## 总结

### 吴梓豪

1. 首次进行团队项目开发，一方面要和新的组员认真沟通，明确其能力范围，一方面要对项目模块化，尽量在分配任务之前将公用模块整理并制作完成，避免发生冲突。
2. 这次团队项目开发主要目的在于结合并运用所学知识、git项目管理和操作、工作调度、锻炼组员沟通配合。最有意义的收获是模块化思想开发和组员沟通配合，掌握工作进度。不过后者这次做的不怎么样，因为对工作进度的掌握出现偏差，错误估计了项目的时间成本，导致组员的个人项目开发时间减少。
3. 目前项目的完成度不高，仍有许多可以完善的细节。