import _ from 'lodash';
import './index.css';
import icon from './asserts/test.png';
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的  Shift + Alt + B
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = ['Hello', 'webpack'].join(' ');
  var myIcon = new Image();
  myIcon.src = icon;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());