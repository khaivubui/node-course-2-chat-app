const expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var messageObj = generateMessage('Emily', 'Why are you Laiing');
    expect(messageObj.from).toBe('Emily');
    expect(messageObj.text).toBe('Why are you Laiing');
    expect(messageObj.createdAt).toBeA('number');
  });
});
