const { BerlinClock, show_berlin_clock} = require('../src/berlinclock.js');

describe('Berlin Clock testing...', () => {
    test('should be a BerlinClock class...', () => {
      const template = new BerlinClock();
      expect(template).toBeDefined();
    });
    test('should be a show_berlin_clock method...', () => {
      expect(show_berlin_clock()).toBeDefined();
    });
    test('should accept input...', () => {
        expect(show_berlin_clock()).toBe("Input time is required");
    });

  });