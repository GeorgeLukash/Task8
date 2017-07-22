var userList = require('./userList.js');
require('../css/style.scss');

const users = [
    { name: 'Oksana', age: 22/*, img: 'img00.jpg'*/ }, 
    { name: 'Viktor', age: 14/*, img: 'img01.jpg'*/ }, 
    { name: 'Ivan', age: 37/*, img: 'img02.jpg'*/ }, 
    { name: 'Yana', age: 45/*, img: 'img03.jpg' */}
];

var userListModule = new userList(users);
userListModule.showList();


/**
MYCOMMENT
*/