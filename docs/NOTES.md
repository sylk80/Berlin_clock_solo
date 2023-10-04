...indicators...

:heavy_check_mark: / :green_circle:  - green test

:x: / :red_circle: - failing test

:dart: - goal

:heavy_plus_sign: - items

:hammer_and_pick: - refactor

:warning: - Techdebt

### Description

The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

“O” = Light off
“R” = Red light
“Y” = Yellow light

Example Test Case:
Input String:
12:56:01

Output String:
O
RROO
RROO
YYRYYRYYRYY
YOOO

### Scenario 1

:radio_button: As a

:arrow_right: I want

:arrow_left:  So that

### User acceptance test 1

:heavy_plus_sign: Given

:construction: When

:heavy_exclamation_mark: Then

### Unit tests

:heavy_plus_sign: Boundaries

- Should accept input :heavy_check_mark:
- Input should be eight length :heavy_check_mark:
- Output should be string :heavy_check_mark:
- Output should contain only O, R,Y :heavy_check_mark:
- Output should have 5 rows :heavy_check_mark:

:heavy_plus_sign: Row test

- First row Y on even seconds
- First row O on odd seconds
- Second row 0000 on 0-4 hours plus,
- Second row R000 on 5-9 hours plus, 
- Second row RR00 on 10-14 hours plus, 
- Second row RRR0 on 15-19 hours plus, 
- Second row RRRR on 20-23 hours plus,
- Third row 0000 on (4+5x)0 hours plus,
- Third row R000 on (4+5x)1 hour plus,
- Third row RR00 on (4+5x)2 hours plus,
- Third row RRR0 on (4+5x)3 hours plus,
- Third row RRRR on (4+5x)4 hours plus, 
- Fourth row 00000000000 - 0 minutes
- Fourth row Y0000000000 - 5 minutes
- Fourth row YY000000000 - 10 minutes
- Fourth row YYR00000000 - 15 minutes
- Fifth row 0000 on 0 minutes,
- Fifth row Y000 on 1 minutes
- Fifth row YY00 on 2 minutes
- Fifth row YYY0 on 3 minutes
- Fifth row YYYY on 4 minutes


