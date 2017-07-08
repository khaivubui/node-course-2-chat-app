const expect = require('expect');
var {
  generateMessage,
  generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var messageObj = generateMessage('Emily', 'Why are you Laiing');
    expect(messageObj.from).toBe('Emily');
    expect(messageObj.text).toBe('Why are you Laiing');
    expect(messageObj.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var messageObj = generateLocationMessage('Emily', 111, 999);
    expect(messageObj).toInclude({
      from: 'Emily',
      url: 'https://www.google.com/maps?q=111,999'
    });
    expect(messageObj.createdAt).toBeA('number');
  });
});
