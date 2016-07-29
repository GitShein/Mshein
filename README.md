CSS规范 - 命名规则

CSS内部的分类及其顺序
重置（reset）和默认（base）（tags）：消除默认样式和浏览器差异
布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！
模块（module）（.m-）：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册、各种列表、评论、搜索等！
元件（unit）（.u-）：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输入框、loading、图标等！
功能（function）（.f-）：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！
皮肤（skin）（.s-）：如果你需要把皮肤型的样式抽离出来，通常为文字色、背景色（图）、边框色等，非换肤型网站通常只提取文字色！非换肤型网站不可滥用此类！
状态（.z-）：为状态类样式加入前缀，统一标识，方便识别

分类的命名方法：使用单个字母+"-"为前缀
布局（grid）（.g-）；模块（module）（.m-）；元件（unit）（.u-）；功能（function）（.f-）；皮肤（skin）（.s-）；状态（.z-）。
在样式中的选择器总是要以上面前五类开头，然后在里面使用后代选择器。如果这五类不能满足需求，可以另外定义一个或多个大类，但必须符合单个字母+"-"为前缀的命名规则，即 .x- 的格式。
特殊：.j-将被专用于JS获取节点，请勿使用.j-定义样式。

后代选择器命名
最好不以单个字母+"-"为前缀且长度大于等于2的类选择器为后代选择器，如：.item为m-list 模块里的每一个项，.text为m-list模块里的文本部分：.m-list .item{}.m-list .text{}。
一个语义化的标签也可以是后代选择器，比如：.m-list li{}。
不要以单个字母的类选择器出现，通过使用后代选择器的方法，你不需要考虑他的命名是否已被使用，因为他只在当前模块或元件中生效，同样的样式名可以在不同的模块或元件中重复使用，互不干扰；后代选择器不需要完整表现结构树层级，尽量能短则短。
注：后代选择器最好不要在页面布局中使用，因为污染的可能性较大；

模块和元件的扩展类的命名方法
当A、B、C、...它们类型相同且外形相似区别不大，那么就以它们中出现率最高的做成基类，其他做成基类的扩展。
方法：+“-”+数字或字母（如：.m-list的扩展类为.m-list-1、.m-list-2等）。
补充：基类自身可以独立使用（如：class="m-list"即可），扩展类必须基于基类使用（如：class="m-list m-list-2"）。
如果你的扩展类是表示不同状态，那么你可以这样命名：u-btn-dis，u-btn-hov，m-box-sel，m-box-hov等等，然后像这样使用：class="u-btn u-btn-dis"。

相同语义的不同类命名
方法：直接加数字或字母区分即可（如：.m-list、.m-list2、.m-list3等，都是列表模块，但是是完全不一样的模块）。
其他举例：.f-fw0、.f-fw1、.s-fc0、.s-fc1、.m-logo2、.m-logo3、u-btn、u-btn2等等。

模块和元件的后代选择器的扩展类
有时候模块内会有些类似的东西，如果你没有把它们做成元件和扩展，那么也可以使用后代选择器和扩展。
后代选择器：.m-login .btn{}。
后代选择器扩展：.m-login .btn-1{}，.m-login .btn-dis{}。
同样也可以采取独立状态分类（.z-）方法：.m-login .btn.z-dis{}，然后像这样使用：class="btn z-dis"。
注：此方法用于类选择器，直接使用标签做为选择器的则不需要使用此命名方法。
注：为防止后代选择器的扩展类和大类命名规范冲突，后代选择器不允许使用单个字母。比如：.m-list .a{}是不允许的，因为当这个.a需要扩展的时候就会变成.a-bb，这样就和大类的命名规范冲突。
防止污染和被污染
当模块或元件之间互相嵌套，且使用了相同的标签选择器或其他后代选择器，那么里面的选择器就会被外面相同的选择器所影响。
所以，如果你的模块或元件可能嵌套或被嵌套于其他模块或元件，那么要慎用标签选择器，必要时采用类选择器，并注意命名方式，可以采用.m-layer .layerxxx、.m-list2 .list2xxx的形式来降低后代选择器的污染性。


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

CSS书写顺序　
1.位置属性(position, top, right, z-index, display, float等)
2.大小(width, height, padding, margin)
3.文字系列(font, line-height, letter-spacing, color- text-align等)
4.背景(background, border等)
5.其他(animation, transition等)

注意事项 
1.一律小写; 
2.尽量用英文; 
3.不加中杠和下划线; 
4.尽量不缩写，除非一看就明白的单词. 
以下供参考：
主要的 master.css 
模块 module.css 
基本共用 base.css 
布局，版面 layout.css 
主题 themes.css 
专栏 columns.css 
文字 font.css 
表单 forms.css 
补丁 mend.css 
打印 print.css
重置 reset.css
http://nec.netease.com/里有详细的介绍
