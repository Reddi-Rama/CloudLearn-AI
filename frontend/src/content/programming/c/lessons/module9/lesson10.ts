const lesson10 = {
  id: "lesson10",
  title: "End-of-File (EOF)",

  content: `
Introduction

When a program reads data from a file, it needs to know when there is
no more input available.

C uses the special value EOF to indicate the end of an input stream.

EOF
    ↓
End of input stream

EOF is commonly used with functions such as:

fgetc()
fgets()
fscanf()

---

1. What is EOF?

EOF stands for End-of-File.

It is a special value used by input functions to indicate that the
end of the input stream has been reached or that an input operation
encountered an error.

EOF is defined in <stdio.h>.

---

2. EOF With fgetc()

The fgetc() function returns the next character as an int.

When the end of the stream is reached, it returns EOF.

Example:

int ch;

while ((ch = fgetc(file)) != EOF)
{
    printf("%c", ch);
}

This continues reading until EOF is returned.

---

3. Why fgetc() Uses int

The variable used with fgetc() should normally be an int.

Example:

int ch;

while ((ch = fgetc(file)) != EOF)
{
    ...
}

fgetc() returns an int so that it can represent every possible
unsigned char value as well as the special value EOF.

Using int allows the program to distinguish a valid character value
from EOF.

---

4. Reading a Complete File Until EOF

#include <stdio.h>

int main(void)
{
    FILE *file;
    int ch;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while ((ch = fgetc(file)) != EOF)
    {
        putchar(ch);
    }

    fclose(file);

    return 0;
}

The program reads and displays the file until EOF is reached.

---

5. EOF With fgets()

fgets() returns NULL when it cannot read another line.

A common pattern is:

char line[100];

while (fgets(line, sizeof(line), file) != NULL)
{
    printf("%s", line);
}

The loop continues while a line is successfully read.

---

6. EOF and fgets()

For fgets(), the usual check is against NULL rather than directly
checking EOF.

Example:

while (fgets(line, sizeof(line), file) != NULL)
{
    printf("%s", line);
}

This is the standard line-by-line reading pattern.

---

7. EOF With fscanf()

fscanf() returns the number of input items successfully matched and
assigned.

For example:

int number;

while (fscanf(file, "%d", &number) == 1)
{
    printf("%d\\n", number);
}

The loop continues while an integer is successfully read.

---

8. Reading Multiple Values Until Input Ends

Suppose a file contains:

10 20
30 40
50 60

Program:

#include <stdio.h>

int main(void)
{
    FILE *file;
    int a;
    int b;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while (fscanf(file, "%d %d", &a, &b) == 2)
    {
        printf("%d %d\\n", a, b);
    }

    fclose(file);

    return 0;
}

The program continues until another complete pair of integers cannot
be read.

---

9. EOF Is Not a Character

EOF is not a character stored in the file.

It is a special return value provided by input functions to indicate
that no more input is available or that an input error occurred.

Therefore, a program should not search a text file for an actual
character called EOF.

---

10. feof() Function

C also provides the feof() function.

Syntax:

feof(file);

It tests the end-of-file indicator for a stream.

Example:

if (feof(file))
{
    printf("End of file reached.\\n");
}

However, the EOF return value from the input function should normally
be used to control the reading loop.

---

11. Reading Until EOF

A common character-reading pattern is:

int ch;

while ((ch = fgetc(file)) != EOF)
{
    /* Process character */
}

This is useful for:

Displaying files
Copying files
Counting characters
Searching characters
Processing text

---

12. EOF and File Copying

EOF can be used to determine when a file-copy operation is complete.

Example:

#include <stdio.h>

int main(void)
{
    FILE *source;
    FILE *destination;
    int ch;

    source = fopen("source.txt", "r");
    destination = fopen("destination.txt", "w");

    if (source == NULL || destination == NULL)
    {
        if (source != NULL)
            fclose(source);

        if (destination != NULL)
            fclose(destination);

        return 1;
    }

    while ((ch = fgetc(source)) != EOF)
    {
        fputc(ch, destination);
    }

    fclose(source);
    fclose(destination);

    return 0;
}

The source file is copied until EOF is reached.

---

13. EOF and Errors

For functions such as fgetc(), EOF can indicate that the end of the
stream was reached or that a read error occurred.

If it is necessary to distinguish these cases, the ferror() function
can be used.

Example:

if (ferror(file))
{
    printf("Read error occurred.\\n");
}

---

14. Basic EOF Reading Pattern

Open file
    ↓
Read data
    ↓
Check result
    ↓
EOF / NULL / unsuccessful read?
    ↓
Stop
    ↓
Close file

For character input:

while ((ch = fgetc(file)) != EOF)
{
    /* Process character */
}

For line input:

while (fgets(line, sizeof(line), file) != NULL)
{
    /* Process line */
}

---

15. Important Points

EOF
    ↓
End of input stream or input error

fgetc()
    ↓
Returns a character or EOF

fgets()
    ↓
Returns a line or NULL

fscanf()
    ↓
Returns the number of successfully read items

feof()
    ↓
Tests the end-of-file indicator

ferror()
    ↓
Tests whether a read/write error occurred

For fgetc(), use an int variable when testing against EOF.

---

Lesson Summary

EOF is used by C input functions to indicate that no more input is
available.

A common fgetc() pattern is:

int ch;

while ((ch = fgetc(file)) != EOF)
{
    /* Process character */
}

For fgets():

while (fgets(line, sizeof(line), file) != NULL)
{
    /* Process line */
}

EOF is a special return value, not a character stored in the file.
`,
  
  summary:
    "EOF is a special value used by C input functions to indicate the end of an input stream or, for some functions such as fgetc(), a read error.",

  keyPoints: [
    "EOF means End-of-File.",
    "fgetc() returns a character or EOF.",
    "Use an int variable with fgetc() when checking against EOF.",
    "fgets() returns NULL when another line cannot be read.",
    "fscanf() returns the number of successfully matched input items.",
    "feof() tests the end-of-file indicator.",
    "ferror() can be used to check for an input/output error."
  ],
};

export default lesson10;