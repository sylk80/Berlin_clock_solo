const { BerlinClock, template_method} = require('../src/template.js');

describe('Berlin Clock testing...', () => {
    test('should be a BerlinClock class...', () => {
      const template = new BerlinClock();
      expect(template).toBeDefined();
    });
    test('should be a template_method method...', () => {
      expect(template_method()).toEqual('Hello world');
    });
  });