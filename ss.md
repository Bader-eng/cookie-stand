## THE CONSOLE & DEV TOOLS:
Tools built into the browser that help you hunt for errors.

## COMMON PROBLEMS:
Common sources of errors, and how to solve them.

## HANDLING ERRORS :
How code can deal with potential errors gracefully.

## EXECUTION CONTEXT:
* GLOBAL CONTEXT:Code that is in the script,
 but not in a function. There is only one global context in any page
 * FUNCTION CONTEXT Code that is being run within a function. 
 Each function has its own function context. 
 * EVAL CONTEXT (NOT SHOWN) Text is executed like code in an internal function called eva l {) (which is not covered in this book).

 ## VARIABLE SCOPE:
 If a variable is declared outside a fu nction, it can be used anywhere because it has global scope. If you do not use the var keyword when creating a variable, it is placed in global scope.

 ### Each time a script enters a new execution context, there are two phases of activity: 
 1. PREPARE:
 * The new scope is created 
 * Variables, functions, and arguments are created 
 * The value of the this keyword is determined 
 2. EXECUTE:
 * Now it can assign values to variables
 * Reference functions and ru n their code 
 * Execute statements

 ## ERROR OBJECTS :
 1. Error :
 Generic error -the other errors are all based upon this error 
 2. Syntax Error:Syntax has not been followed 
 3. Reference Erro:
 Tried to reference a variable that is not declared/within scope
 4. Type Error:
 An unexpected data type that cannot be coerced
 5. Range Error :
 Numbers not in acceptable range 
 6. URI Error:
 encodeURI().decodeURI(),and similar methods used incorrectly
 7. Eval Error :
 eval () function used incorrectly 

 ## TRY:
 * First, you specify the code that you t hink might throw an exception within the try block. 
* If an exception occurs in this section of code, control is automatically passed to the corresponding catch block.
## CATCH :
* If the try code block throws an exception, catch steps in with an alternative set of code
* It has one parameter: the error object. Although it is optional, you are not handling the error if you do not catch an error.

## FINALLY:
The contents of the fi na 11 y code block will run either way - whether the try block succeeded or failed. 