// In my "getQuotes" function, I am trying to extract only the quotes from a string.
//
// #Example
//
// getQuotes('"example quote #1" some text "example quote #2"');
// should return ["\"example quote #1\"","\"example quote #2\""]

var reg = /".+?"/g;
function getQuotes(string) {
  return string.match(reg);
}
