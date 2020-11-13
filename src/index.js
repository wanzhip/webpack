import _ from 'lodash';
import './index.css';
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的  Shift + Alt + B
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}

document.body.appendChild(component());