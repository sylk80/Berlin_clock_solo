const { BerlinClock, show_berlin_clock} = require('../src/berlinclock.js');
const {split} = require("lodash");

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
    test('should accept input with 8 length...', () => {
        expect(show_berlin_clock("12:20:1245")).toBe("Time required in HH:mm:ss format");
    });
    test('should return a string...', () => {
        let clock = show_berlin_clock("test")
        expect(typeof clock === "string").toBe(true)
    });
    test('should return a string with fixed characters...', () => {
        let clock2 = show_berlin_clock("00:00:00")
        const regex = /[O,R,Y]/g
        expect(clock2.match(regex)).toHaveLength(24)
    });
    test('should have five rows...', () => {
        let clock3 = show_berlin_clock("00:00:00")
        let rows = clock3.split("\n")
        expect(rows).toHaveLength(5)
    });
  });

describe('Berlin Clock rows testing...', () => {
    test('first row should return Y on 00:00:00...', () => {
        const clock = show_berlin_clock("00:00:00")
        let rows = clock.split("\n")
        expect(rows[0]).toBe('Y');
    });
})