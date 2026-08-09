const lesson12 = {

  id: "lesson12",

  title: "Logical Operators in Java",

  content: `

# Logical Operators in Java


## Introduction


Logical operators are used to combine multiple conditions and perform logical operations.


They are mainly used with boolean values.


The result of a logical operation is always:


true


or


false



Logical operators are widely used in:


- Decision making.
- Authentication systems.
- Validation systems.
- Control flow statements.



## What are Logical Operators?


Logical operators combine one or more conditions and produce a boolean result.



Example:


age >= 18 && age <= 60



Here:


Java checks whether both conditions are true.



# Types of Logical Operators


Java provides three main logical operators:


| Operator | Name |
|----------|------|
| && | Logical AND |
| || | Logical OR |
| ! | Logical NOT |



# Logical AND Operator (&&)


## Introduction


The AND operator returns true only when all conditions are true.


If any one condition is false, the complete result becomes false.



## Truth Table


Condition 1 | Condition 2 | Result

true | true | true

true | false | false

false | true | false

false | false | false



## Example


int age = 25;


System.out.println(age >= 18 && age <= 60);



Output:


true



## Explanation


First condition:


age >= 18


true



Second condition:


age <= 60


true



Both conditions are true, so the result is true.



## Real-World Usage


Used for:


- Login validation.
- Eligibility checking.
- Multiple requirements.



Example:


usernameCorrect && passwordCorrect



# Logical OR Operator (||)


## Introduction


The OR operator returns true if at least one condition is true.


It returns false only when all conditions are false.



## Truth Table


Condition 1 | Condition 2 | Result

true | true | true

true | false | true

false | true | true

false | false | false



## Example


int marks = 80;


System.out.println(marks >= 35 || marks == 0);



Output:


true



## Explanation


The first condition is true.


So the complete expression returns true.



## Real-World Usage


Used when multiple options are acceptable.



Examples:


- Login using email or phone number.
- Payment through card or UPI.
- Multiple user roles.



# Logical NOT Operator (!)


## Introduction


The NOT operator reverses the result of a boolean expression.


It converts:


true into false


false into true



## Example


boolean status = true;


System.out.println(!status);



Output:


false



## Truth Table


Condition | Result

true | false

false | true



# Logical Operators Example Program


class LogicalExample

{

    public static void main(String[] args)

    {

        int age = 20;

        boolean citizen = true;


        System.out.println(age >= 18 && citizen);

        System.out.println(age < 18 || citizen);

        System.out.println(!citizen);

    }

}



Output:


true

true

false



# Short-Circuit Evaluation


Java supports short-circuit evaluation for logical operators.



## AND Short-Circuit (&&)


In AND operation:


If the first condition is false, Java does not check the second condition.



Example:


false && condition



Result:


false



The second condition is skipped.



## OR Short-Circuit (||)


In OR operation:


If the first condition is true, Java does not check the second condition.



Example:


true || condition



Result:


true



The second condition is skipped.



# Difference Between AND and OR



## AND Operator


Requires:


All conditions must be true.



Example:


Age must be greater than 18 AND less than 60.



## OR Operator


Requires:


At least one condition must be true.



Example:


Payment through card OR UPI.



# Logical Operators with if Statement


Logical operators are commonly used with decision statements.



Example:


class Example

{

    public static void main(String[] args)

    {

        int age = 20;

        boolean hasId = true;


        if(age >= 18 && hasId)

        {

            System.out.println("Allowed");

        }

    }

}



Output:


Allowed



# Real-World Applications



## Banking Applications


Logical operators are used for:


- User authentication.
- Transaction verification.
- Security checks.



Example:


validPassword && accountActive



## E-Commerce Applications


Used for:


- Discount eligibility.
- Product availability.
- Payment validation.



Example:


quantity > 0 && paymentCompleted



## Student Management Systems


Used for:


- Result processing.
- Attendance checking.
- Eligibility verification.



Example:


marks >= 35 && attendance >= 75



# Common Mistakes



## Confusing & and &&


Single & performs bitwise operation.


Double && performs logical AND.



## Using Incorrect Conditions


Always check whether conditions should use AND or OR.



# Best Practices


Follow these practices:


- Use parentheses for complex conditions.
- Keep conditions readable.
- Use logical operators carefully.
- Avoid unnecessary conditions.



# Key Points


Remember:


- Logical operators work with boolean values.
- && requires all conditions to be true.
- || requires at least one condition to be true.
- ! reverses boolean values.
- Logical operators are important for decision making.
- Short-circuit evaluation improves efficiency.


Logical operators help Java programs make intelligent decisions by combining multiple conditions.

`

};


export default lesson12;