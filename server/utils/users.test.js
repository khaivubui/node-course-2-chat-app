const expect = require('expect');

const { Users } = require('./users.js');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '1234',
      name: 'Khai',
      room: 'GOT Fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user by id', () => {
    expect(users.removeUser('1')).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    });
    expect(users.users).toEqual([{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]);
  });

  it('should not remove a user', () => {
    expect(users.removeUser('1111')).toNotExist();
    expect(users.users).toEqual([{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]);
  });

  it('should find user', () => {
    expect(users.getUser('1')).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('should not find a user', () => {
    expect(users.getUser('111')).toNotExist();
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });
});
