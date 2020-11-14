import _ from 'lodash';
import './index.css';
import icon from './asserts/test.png';
import printMe from './print.js';





function component() {
  var element = document.createElement('div');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的  Shift + Alt + B
  element.innerHTML = _.join(['Hello', 'webpack' , '一段文字一段文字一段文字f'], ' ');
  // element.innerHTML = ['Hello', 'webpack'].join(' ');
  element.classList.add('webfont')
  var myIcon = new Image();
  myIcon.src = icon;
  element.appendChild(myIcon);

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);







  return element;
}

document.body.appendChild(component());