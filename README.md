# SCSS学习中。。。
## 一、自适应导航菜单
<br>注意：<br>1、display不支持transition属性；<br>2、对于下拉菜单:如果是在一列中显示，如本例。可以通过设置min-height和max-height，让子菜单选择性的显示。<br>代码展示：http://codepen.io/tombflylee/pen/EWNaGK
## 二、Contact Form Template

input type=button:默认高度不可调:

1、可以使用button标签代替

2、border:0;即可


outline:none;可以取消input标签选中时候的蓝色外边框。

展示地址：http://codepen.io/tombflylee/pen/jByaxy

## 三、自适应垂直时间线

1、element.getBoundingClientRect();

返回值是一个 DOMRect 对象，DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。一共返回6个属性。

注意：例：如果元素的上边框在浏览器上边框的上面，则top属性为负，如果在下面，则为正。

2、transition和display与visibility无用。但是transition对于visibility可以延迟显示或隐藏。

3、伪元素:(在css3之前,都是单个冒号)<br>
要添加某些内容的,称为伪元素<br>
::before<br>
::after<br>
::first-letter<br>
::first-line<br>
伪类:<br>
只是添加某些样式,为伪类<br>
:active<br>
:focus<br>
:hover<br>
:link<br>
:visited<br>
:first-child<br>
:lang<br>

3、translate3d:百分比:相对于自身的height和width。
