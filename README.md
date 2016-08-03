CSS规范 - 命名规则

CSS样式表文件命名：

Reset.scss   消除浏览器差异，重置样式。

Global.scss   编写全局样式。

Library.scss   编写sass组件

css书写顺序：
   1.位置属性（position,top,right,z-index,display,float等）
   
   2.大小（width,height,padding,margin）
   
   3.文字系列（font,line-height,letter-spacing,color,text-align等）
   
   4.背景（background,border等）
   
   5.其他（animation,transition等）

css命名规则
   
1.一律小写；
   
2.尽量用英文；

3.尽量不缩写，除非一看就明白的单词；

4.长名称或词组可以使用中横线来为选择器命名,不建议使用“_”下划线来命名CSS选择器

5.尽量使用class，避免使用id；

注意事项

每一块布局样式最好都写上注释，例如：

/* header */

内容区

/* end header */

6.可以给选择器添加一个表示状态的前缀，让语义更明了

常用的CSS命名规则：

头：header

内容：content/container

尾：footer

导航：nav

侧栏：sidebar

栏目：column

页面外围控制整体佈局宽度：wrapper

左右中：left right center

登录条：loginbar

标志：logo

广告：banner

页面主体：main

热点：hot

新闻：news

下载：download

子导航：subnav

菜单：menu

子菜单：submenu

搜索：search

友情链接：friendlink

页脚：footer

版权：copyright

滚动：scroll

内容：content

标签：tags

文章列表：list

提示信息：msg
小技巧：tips

栏目标题：title

加入：joinus

指南：guide

服务：service

注册：regsiter

状态：status

投票：vote

合作伙伴：partner

例：M站可以按如下命名：

公共样式和布局，模块及原件都以.mshe-开头，例如：

布局类：mshe-header,mshe-content,mshe-sidebar,mshe-footer就代表有头部、主体、侧栏、尾部

模块类：mshe-nav,mshe-login,mshe-regsiter,mshe-list,mshe-comment代表导航、登录、注册、各种列表、评论

原件：mshe-btn,mshe-input,mshe-loading代表按钮、输入框、loading

dis-mshe-btn就代表这个button是不可用的

http://nec.netease.com/里有详细的介绍
