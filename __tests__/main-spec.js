const {createMultilyTable} = require("../main");

it("should return multiply table from 2 to 4 when call createMultilyTable given 2 and 4", () => {
  expect(createMultilyTable(2, 4)).toBe(
     "2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n"
  );
});
