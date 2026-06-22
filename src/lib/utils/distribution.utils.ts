import { GridTemplate } from "../types";

export const Distributions: Array<GridTemplate> = [
  //Vertical
  {
    template: {
      distribution: '1/1',
      templateArea: `"one one one one" "two two two two"`,
      maxItems: 2,
      orientation: "vertical",
      columns: 4,
      rows: 2
    }
  },
  {
    template: {
      distribution: '1/2',
      templateArea: `"one one one one" "two two three three"`,
      maxItems: 3,
      orientation: "vertical",
      columns: 4,
      rows: 2
    }
  },
  {
    template: {
      distribution: '1/3',
      templateArea: `"one one one" "two three four"`,
      maxItems: 4,
      orientation: "vertical",
      columns: 3,
      rows: 2
    }
  },
  {
    template: {
      distribution: '1/4',
      templateArea: `"one one one one" "two three four five"`,
      maxItems: 5,
      orientation: "vertical",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '1/5',
      templateArea: `"one one one one one" "two three four five six"`,
      maxItems: 6,
      orientation: "vertical",
      columns: 5,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '1/6',
      templateArea: `"one one one one one one" "two three four five six seven"`,
      maxItems: 7,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '1/7',
      templateArea: `"one one one one one one one" "two three four five six seven eight"`,
      maxItems: 8,
      orientation: "vertical",
      columns: 7,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '1/8',
      templateArea: `"one one one one one one one one" "two three four five six seven eight nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 8,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '1/9',
      templateArea: `"one one one one one one one one one" "two three four five six seven eight nine ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 9,
      rows: 2,
    }
  },
  // 2
  {
    template: {
      distribution: '2/1',
      templateArea: `"one one two two" "three three three three"`,
      maxItems: 3,
      orientation: "vertical",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/2',
      templateArea: `"one one two two" "three three four four"`,
      maxItems: 4,
      orientation: "vertical",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/3',
      templateArea: `"one one one two two two" "three three four  four five five"`,
      maxItems: 5,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/4',
      templateArea: `"one one two two" "three four  five six"`,
      maxItems: 6,
      orientation: "vertical",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/5',
      templateArea: `"one one one one one two two two two two" "three three four four five five six six seven seven"`,
      maxItems: 7,
      orientation: "vertical",
      columns: 10,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/6',
      templateArea: `"one one one two two two" "three four five six seven eight"`,
      maxItems: 8,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/7',
      templateArea: `"one one one one one one one two two two two two two two" "three three four four five five six  six seven seven eight eight nine nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 14,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/8',
      templateArea: `"one one one one two two two two" "three four five six seven eight nine ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 8,
      rows: 2,
    }
  },
  // 3
  {
    template: {
      distribution: '3/1',
      templateArea: `"one two three" "four four four"`,
      maxItems: 4,
      orientation: "vertical",
      columns: 3,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '3/2',
      templateArea: `"one one two two three three" "four four four five five five"`,
      maxItems: 5,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '3/3',
      templateArea: `"one one two two three three" "four four five five six six"`,
      maxItems: 6,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '3/4',
      templateArea: `"one one one one two two two two three three three three" "four four four five five five six six six seven seven seven"`,
      maxItems: 7,
      orientation: "vertical",
      columns: 12,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '3/5',
      templateArea: `"one one one one one two two two two two three three three three three" "four four four five five five six six six seven seven seven eight eight eight"`,
      maxItems: 8,
      orientation: "vertical",
      columns: 15,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '3/6',
      templateArea: `"one one two two three three" "four five six seven eight nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '3/7',
      templateArea: `"one one one one one one one two two two two two two two three three three three three three three" "four four four five five five six six six seven seven seven eight eight eight nine nine nine ten ten ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 21,
      rows: 2,
    }
  },
  // 4
  {
    template: {
      distribution: '4/1',
      templateArea: `"one two three four" "five five five five"`,
      maxItems: 5,
      orientation: "vertical",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '4/2',
      templateArea: `"one two three four" "five five six six"`,
      maxItems: 6,
      orientation: "vertical",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '4/3',
      templateArea: `"one one one two two two three three three four four four" "five five five five six six six six seven seven seven seven"`,
      maxItems: 7,
      orientation: "vertical",
      columns: 12,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '4/4',
      templateArea: `"one two three four" "five six seven eight"`,
      maxItems: 8,
      orientation: "vertical",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '4/5',
      templateArea: `"one one one one one two two two two two three three three three three four four four four four" "five five five five six six six six seven seven seven seven eight eight eight eight nine nine nine nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 20,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '4/6',
      templateArea: `"one one one two two two three three three four four four" "five five six six seven seven eight eight nine nine ten ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 12,
      rows: 2,
    }
  },
  // 5
  {
    template: {
      distribution: '5/1',
      templateArea: `"one two three four five" "six six six six six"`,
      maxItems: 6,
      orientation: "vertical",
      columns: 5,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '5/2',
      templateArea: `"one one two two three three four four five five" "six six six six six seven seven seven seven seven"`,
      maxItems: 7,
      orientation: "vertical",
      columns: 10,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '5/3',
      templateArea: `"one one one two two two three three three four four four five five five" "six six six six six seven seven seven seven seven eight eight eight eight eight"`,
      maxItems: 8,
      orientation: "vertical",
      columns: 15,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '5/4',
      templateArea: `"one one one one two two two two three three three three four four four four five five five five" "six six six six six seven seven seven seven seven eight eight eight eight eight nine nine nine nine nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 20,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '5/5',
      templateArea: `"one two three four five" "six seven eight nine ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 5,
      rows: 2,
    }
  },
  // 6
  {
    template: {
      distribution: '6/1',
      templateArea: `"one two three four five six" "seven seven seven seven seven seven"`,
      maxItems: 7,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '6/2',
      templateArea: `"one two three four five six" "seven seven seven eight eight eight"`,
      maxItems: 8,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '6/3',
      templateArea: `"one two three four five six" "seven seven eight eight nine nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 6,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '6/4',
      templateArea: `"one one two two three three four four five five six six" "seven seven seven eight eight eight nine nine nine ten ten ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 12,
      rows: 2,
    }
  },
  // 7
  {
    template: {
      distribution: '7/1',
      templateArea: `"one two three four five six seven" "eight eight eight eight eight eight eight"`,
      maxItems: 8,
      orientation: "vertical",
      columns: 7,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '7/2',
      templateArea: `"one one two two three three four four five five six six seven seven" "eight eight eight eight eight eight eight nine nine nine nine nine nine nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 14,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '7/3',
      templateArea: `"one one one two two two three three three four four four five five five six six six seven seven seven" "eight eight eight eight eight eight eight nine nine nine nine nine nine nine ten ten ten ten ten ten ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 21,
      rows: 2,
    }
  },
  // 8
  {
    template: {
      distribution: '8/1',
      templateArea: `"one two three four five six seven eight" "nine nine nine nine nine nine nine nine"`,
      maxItems: 9,
      orientation: "vertical",
      columns: 8,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '8/2',
      templateArea: `"one two three four five six seven eight" "nine nine nine nine ten ten ten ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 8,
      rows: 2,
    }
  },
  // 9
  {
    template: {
      distribution: '9/1',
      templateArea: `"one two three four five six seven eight nine" "ten ten ten ten ten ten ten ten ten"`,
      maxItems: 10,
      orientation: "vertical",
      columns: 9,
      rows: 2,
    }
  },
  // Horizontal
  // 1
  {
    template: {
      distribution: '1/1',
      templateArea: `"one two" "one two"`,
      maxItems: 2,
      orientation: "horizontal",
      columns: 2,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '1/2',
      templateArea: `"one two" "one three"`,
      maxItems: 3,
      orientation: "horizontal",
      columns: 2,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '1/3',
      templateArea: `"one two" "one three" "one four"`,
      maxItems: 4,
      orientation: "horizontal",
      columns: 2,
      rows: 3,
    }
  },
  {
    template: {
      distribution: '1/4',
      templateArea: `"one two" "one three" "one four" "one five"`,
      maxItems: 5,
      orientation: "horizontal",
      columns: 2,
      rows: 4,
    }
  },
  {
    template: {
      distribution: '1/5',
      templateArea: `"one two" "one three" "one four" "one five" "one six"`,
      maxItems: 6,
      orientation: "horizontal",
      columns: 2,
      rows: 5,
    }
  },
  {
    template: {
      distribution: '1/6',
      templateArea: `"one two" "one three" "one four" "one five" "one six" "one seven"`,
      maxItems: 7,
      orientation: "horizontal",
      columns: 2,
      rows: 6,
    }
  },
  {
    template: {
      distribution: '1/7',
      templateArea: `"one two" "one three" "one four" "one five" "one six" "one seven" "one eight"`,
      maxItems: 8,
      orientation: "horizontal",
      columns: 2,
      rows: 7,
    }
  },
  {
    template: {
      distribution: '1/8',
      templateArea: `"one two" "one three" "one four" "one five" "one six" "one seven" "one eight" "one nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 8,
    }
  },
  {
    template: {
      distribution: '1/9',
      templateArea: `"one two" "one three" "one four" "one five" "one six" "one seven" "one eight" "one nine" "one ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 9,
    }
  },
  // 2
  {
    template: {
      distribution: '2/1',
      templateArea: `"one three" "two three"`,
      maxItems: 3,
      orientation: "horizontal",
      columns: 2,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/2',
      templateArea: `"one three" "two four"`,
      maxItems: 4,
      orientation: "horizontal",
      columns: 2,
      rows: 2,
    }
  },
  {
    template: {
      distribution: '2/3',
      templateArea: `"one three" "one three" "one four" "two four" "two five" "two five" `,
      maxItems: 5,
      orientation: "horizontal",
      columns: 2,
      rows: 6,
    }
  },
  {
    template: {
      distribution: '2/4',
      templateArea: `"one three" "one three" "one four" "one four" "two five" "two five" "two six" "two six"`,
      maxItems: 6,
      orientation: "horizontal",
      columns: 2,
      rows: 8,
    }
  },
  {
    template: {
      distribution: '2/5',
      templateArea: `"one three" "one three" "one four" "one four" "one five" "two five" "two six" "two six" "two seven" "two seven"`,
      maxItems: 7,
      orientation: "horizontal",
      columns: 2,
      rows: 10,
    }
  },
  {
    template: {
      distribution: '2/6',
      templateArea: `"one three" "one three" "one four" "one four" "one five" "one five" "two six" "two six" "two seven" "two seven" "two eight" "two eight"`,
      maxItems: 8,
      orientation: "horizontal",
      columns: 2,
      rows: 12,
    }
  },
  {
    template: {
      distribution: '2/7',
      templateArea: `"one three" "one three" "one four" "one four" "one five" "one five" "one six" "two six" "two seven" "two seven" "two eight" "two eight" "two nine" "two nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 14,
    }
  },
  {
    template: {
      distribution: '2/8',
      templateArea: `"one three" "one three" "one four" "one four" "one five" "one five" "one six" "one six" "two seven" "two seven" "two eight" "two eight" "two nine" "two nine" "two ten" "two ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 16,
    }
  },
  // 3
  {
    template: {
      distribution: '3/1',
      templateArea: `"one four" "two four" "three four"`,
      maxItems: 4,
      orientation: "horizontal",
      columns: 2,
      rows: 3,
    }
  },
  {
    template: {
      distribution: '3/2',
      templateArea: `"one four" "one four" "two four" "two five" "three five" "three five"`,
      maxItems: 5,
      orientation: "horizontal",
      columns: 2,
      rows: 6,
    }
  },
  {
    template: {
      distribution: '3/3',
      templateArea: `"one four" "two five" "three six"`,
      maxItems: 6,
      orientation: "horizontal",
      columns: 2,
      rows: 3,
    }
  },
  {
    template: {
      distribution: '3/4',
      templateArea: `"one four" "one four" "one four" "one five" "two five" "two five" "two six" "two six" "three six" "three seven" "three seven" "three seven"`,
      maxItems: 7,
      orientation: "horizontal",
      columns: 2,
      rows: 12,
    }
  },
  {
    template: {
      distribution: '3/5',
      templateArea: `"one four" "one four" "one four" "one five" "one five" "two five" "two six" "two six" "two six" "two seven" "three seven" "three seven" "three eight" "three eight" "three eight"`,
      maxItems: 8,
      orientation: "horizontal",
      columns: 2,
      rows: 15,
    }
  },
  {
    template: {
      distribution: '3/6',
      templateArea: `"one four" "one five" "two six" "two seven" "three eight" "three nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 6,
    }
  },
  {
    template: {
      distribution: '3/7',
      templateArea: `"one four" "one four" "one four" "one five" "one five" "one five" "one six" "two six" "two six" "two seven" "two seven" "two seven" "two eight" "two eight" "three eight" "three nine" "three nine" "three nine" "three ten" "three ten" "three ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 21,
    }
  },
  {
    template: {
      distribution: '4/1',
      templateArea: `"one five" "two five" "three five" "four five"`,
      maxItems: 5,
      orientation: "horizontal",
      columns: 2,
      rows: 4,
    }
  },
  {
    template: {
      distribution: '4/2',
      templateArea: `"one five" "two five" "three six" "four six"`,
      maxItems: 6,
      orientation: "horizontal",
      columns: 2,
      rows: 4,
    }
  },
  {
    template: {
      distribution: '4/3',
      templateArea: `"one five" "one five" "one five" "two five" "two six" "two six" "three six" "three six" "three seven" "four seven" "four seven" "four seven"`,
      maxItems: 7,
      orientation: "horizontal",
      columns: 2,
      rows: 12,
    }
  },
  {
    template: {
      distribution: '4/4',
      templateArea: `"one five" "two six" "three seven" "four eight"`,
      maxItems: 8,
      orientation: "horizontal",
      columns: 2,
      rows: 4,
    }
  },
  {
    template: {
      distribution: '4/5',
      templateArea: `"one five" "one five" "one five" "one five" "one six" "two six" "two six" "two six" "two seven" "two seven" "three seven" "three seven"  "three eight" "three eight" "three eight" "four eight" "four nine" "four nine" "four nine" "four nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 20,
    }
  },
  {
    template: {
      distribution: '4/6',
      templateArea: `"one five" "one five" "one six" "two six" "two seven" "two seven" "three eight" "three eight"  "three nine" "four nine" "four ten" "four ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 12,
    }
  },
  {
    template: {
      distribution: '5/1',
      templateArea: `"one six" "two six" "three six" "four six" "five six"`,
      maxItems: 6,
      orientation: "horizontal",
      columns: 2,
      rows: 5,
    }
  },
  {
    template: {
      distribution: '5/2',
      templateArea: `"one six" "one six" "two six" "two six" "three six" "three seven" "four seven" "four seven" "five seven" "five seven"`,
      maxItems: 7,
      orientation: "horizontal",
      columns: 2,
      rows: 10,
    }
  },
  {
    template: {
      distribution: '5/3',
      templateArea: `"one six" "one six" "one six" "two six" "two six" "two seven" "three seven" "three seven" "three seven" "four seven" "four eight" "four eight" "five eight" "five eight" "five eight"`,
      maxItems: 8,
      orientation: "horizontal",
      columns: 2,
      rows: 15,
    }
  },
  {
    template: {
      distribution: '5/4',
      templateArea: `"one six" "one six" "one six" "one six" "two six" "two seven" "two seven" "two seven" "three seven" "three seven" "three eight" "three eight" "four eight" "four eight" "four eight" "four nine" "five nine" "five nine" "five nine" "five nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 20,
    }
  },
  {
    template: {
      distribution: '5/5',
      templateArea: `"one six" "two seven" "three eight" "four nine" "five ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 5,
    }
  },
  {
    template: {
      distribution: '6/1',
      templateArea: `"one seven" "two seven" "three seven" "four seven" "five seven" "six seven"`,
      maxItems: 7,
      orientation: "horizontal",
      columns: 2,
      rows: 6,
    }
  },
  {
    template: {
      distribution: '6/2',
      templateArea: `"one seven" "two seven" "three seven" "four eight" "five eight" "six eight"`,
      maxItems: 8,
      orientation: "horizontal",
      columns: 2,
      rows: 6,
    }
  },
  {
    template: {
      distribution: '6/3',
      templateArea: `"one seven" "two seven" "three eight" "four eight" "five nine" "six nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 6,
    }
  },
  {
    template: {
      distribution: '6/4',
      templateArea: `"one seven" "one seven" "two seven" "two eight" "three eight" "three eight" "four nine" "four nine" "five nine" "five ten" "six ten" "six ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 12,
    }
  },
  {
    template: {
      distribution: '7/1',
      templateArea: `"one eight" "two eight" "three eight" "four eight" "five eight" "six eight" "seven eight"`,
      maxItems: 8,
      orientation: "horizontal",
      columns: 2,
      rows: 7,
    }
  },
  {
    template: {
      distribution: '7/2',
      templateArea: `"one eight" "one eight" "two eight" "two eight" "three eight" "three eight" "four eight" "four nine" "five nine" "five nine" "six nine" "six nine" "seven nine" "seven nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 14,
    }
  },
  {
    template: {
      distribution: '7/3',
      templateArea: `"one eight" "one eight" "one eight" "two eight" "two eight" "two eight" "three eight" "three nine" "three nine" "four nine" "four nine" "four nine" "five nine" "five nine" "five ten" "six ten" "six ten" "six ten" "seven ten" "seven ten" "seven ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 21,
    }
  },
  {
    template: {
      distribution: '8/1',
      templateArea: `"one nine" "two nine" "three nine" "four nine" "five nine" "six nine" "seven nine" "eight nine"`,
      maxItems: 9,
      orientation: "horizontal",
      columns: 2,
      rows: 8,
    }
  },
  {
    template: {
      distribution: '8/2',
      templateArea: `"one nine" "two nine" "three nine" "four nine" "five ten" "six ten" "seven ten" "eight ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 8,
    }
  },
  {
    template: {
      distribution: '9/1',
      templateArea: `"one ten" "two ten" "three ten" "four ten" "five ten" "six ten" "seven ten" "eight ten" "nine ten"`,
      maxItems: 10,
      orientation: "horizontal",
      columns: 2,
      rows: 9,
    }
  },
  // Mix
  {
    template: {
      distribution: 'default',
      templateArea: `"one one two four" "one one three five"`,
      maxItems: 5,
      orientation: "horizontal",
      columns: 4,
      rows: 2,
    }
  },
  {
    template: {
      distribution: 'default',
      templateArea: `"one one one one" "two two four four" "three three five five"`,
      maxItems: 5,
      orientation: "vertical",
      columns: 4,
      rows: 3,
    }
  },
  {
    template: {
      distribution: '1/4/1',
      templateArea: `"one two four six" "one three five six"`,
      maxItems: 6,
      orientation: "horizontal",
      columns: 4,
      rows: 2,

    }
  }
]
