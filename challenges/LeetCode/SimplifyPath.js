/*Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, 
convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, 
and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such 
as '...' are treated as file/directory names. */

var simplifyPath = function(path) {
    // split the path by '/'
  const components = path.split('/');
  console.log(components)
  const stack = [];

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    
    if (component === '' || component === '.') {
      continue;
    }
    
    else if (component === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    }
    else {
      stack.push(component);
    }
  }
  
  const canonicalPath = '/' + stack.join('/');
  return canonicalPath;
};

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/../'))