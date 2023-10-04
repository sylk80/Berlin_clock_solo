const { BerlinClock, show_berlin_clock} = require('../src/berlinclock.js');

describe('Berlin Clock testing...', () => {
    test('should be a BerlinClock class...', () => {
      const template = new BerlinClock();
      expect(template).toBeDefined();
    });
    test('should be a template_method method...', () => {
      expect(show_berlin_clock()).toEqual('Hello world');
    });
  });