1. 既然选择使用redux，那就将页面中所有数据都放入其中。
2. 在 rudex 中，reducer是不可更改传入的state的，但这单靠人的警惕去实现不够稳健，因此求助immutable(不可改变的)库，将state变为immutable对象。
3. immutable 库中的 fromJS 方法可将一个js对象转为immutable对象，即不可被更改的对象。
4. 获取 immutable 对象 im 中某属性:im.get('属性名') ;  im.set('属性','值') 是拷贝一份原有的  immutable 对象然后生成一个新的immutable对象并做修改。