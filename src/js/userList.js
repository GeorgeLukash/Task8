var _ = require('lodash');

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
	
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
			/*const userImg = document.createElement('IMG');
			userImg.src = require("../img/" + user.img);
			div.append(userImg);*/
            div.append(user.name + ' ' + user.age);
            container.appendChild(div);
        });
    }
}

module.exports = userList;