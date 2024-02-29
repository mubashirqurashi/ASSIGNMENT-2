// 1. Declare 3 variables in one statement.
var [variable1, variable2, variable3] =[4, 5, 6]
document.write(variable1,variable2,variable3 + "<br>")


// Declare 5 legal & 5 illegal variable names.
// 5 legal names
var myName = ('Ali, ') ;                // 1 variable start with letter
var $dollar = 200 ;                     // 2 variable start with dollar
var _hypin = ', 1kg, ' ;                // 3 variable start with hypin
var camelCaseVariable = 'hi camel, ';   // 4 camel case
var snace_case = 'snack was longer ';   // 5 snace case

document.write(myName, $dollar, _hypin, camelCaseVariable, snace_case + "<br>")

// 5 illegal names
// var  123v = 'Ali'               // variable starting with a number illegal
// var  my*variable = 6            //containing special characters like +,-,/,* illegal
// var  my variable = empty        // containing spaces illegal
// var  var = reserved             // reserved keywords illegal
// var  ()myvariable = underscore  // underscore illegal

var $my_1stVariable = 'Variable names can only contain numbers, $, hyphin and letters' + "<br>"
document.write($my_1stVariable)

var _variables = 'Variable  must begin with letters, $, _hyphin' + "<br>"
document.write(_variables)

var $variables = 'Variable names should not be JS keywords' + "<br>"
document.write($variables)