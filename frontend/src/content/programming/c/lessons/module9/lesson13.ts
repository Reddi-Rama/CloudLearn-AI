const lesson13 = {
  id: "lesson13",
  title: "File Error Handling",

  content: `
Introduction

File operations can fail for many reasons.

For example:

File does not exist

File cannot be created

Permission denied

Invalid file operation

Read error

Write error

A good C program should check for errors instead of assuming that
every file operation succeeds.

---

1. Checking fopen()

The most basic file error check is checking whether fopen() returned
NULL.

FILE *file;

file = fopen("data.txt", "r");

if (file == NULL)
{
    printf("Unable to open file.\\n");
    return 1;
}

If opening fails, fopen() returns NULL.

---

2. Why Can fopen() Fail?

A file may fail to open because:

File does not exist
    ↓
Using "r" mode

No permission
    ↓
Access denied

Invalid path
    ↓
File cannot be found

Storage/resource problem
    ↓
File cannot be created/opened

Therefore, always check the result.

---

3. Using perror()

The C standard library provides perror() to print a message
describing the current error associated with a library/system
operation.

Example:

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("missing.txt", "r");

    if (file == NULL)
    {
        perror("Error opening file");
        return 1;
    }

    fclose(file);

    return 0;
}

A typical system may display something like:

Error opening file: No such file or directory

The exact wording depends on the system.

---

4. Checking fclose()

fclose() returns:

0
    → Success

EOF
    → Error

Example:

if (fclose(file) == EOF)
{
    perror("Error closing file");
}

This can be useful when closing an output stream because buffered
output may be finalized during the close operation.

---

5. Checking fputc()

fputc() returns the character written as an unsigned char converted
to int, or EOF if a write error occurs.

Example:

if (fputc('A', file) == EOF)
{
    perror("Write error");
}

---

6. Checking fputs()

The return value of fputs() can also be checked.

Example:

if (fputs("Hello\\n", file) == EOF)
{
    perror("Write error");
}

---

7. Checking fprintf()

fprintf() returns a negative value if an output error occurs.

Example:

if (fprintf(file, "Hello %d\\n", 100) < 0)
{
    perror("Write error");
}

---

8. Checking fread()

fread() returns the number of complete items successfully read.

Example:

if (fread(&student, sizeof(Student), 1, file) == 1)
{
    printf("Record read successfully.\\n");
}

The return value should be checked to make sure the requested item
was successfully read.

---

9. Checking fwrite()

fwrite() returns the number of complete items successfully written.

Example:

if (fwrite(&student, sizeof(Student), 1, file) == 1)
{
    printf("Record written successfully.\\n");
}

This allows the program to detect a failed write operation.

---

10. ferror() Function

The ferror() function checks whether the error indicator for a
stream is set.

Example:

if (ferror(file))
{
    perror("File error");
}

It is useful after a file-reading or file-writing operation when the
program needs to determine whether an error occurred.

---

11. feof() Function

The feof() function checks the end-of-file indicator for a stream.

Example:

if (feof(file))
{
    printf("End of file reached.\\n");
}

It is important to remember that feof() reports the end-of-file
indicator after an input operation has encountered the end of the
stream.

---

12. clearerr() Function

The clearerr() function clears the error and end-of-file indicators
for a stream.

Example:

clearerr(file);

After calling clearerr(), the stream's error and end-of-file
indicators are cleared.

---

13. Checking File Position Operations

fseek() can also be checked.

Example:

if (fseek(file, 0, SEEK_SET) != 0)
{
    perror("Seek error");
}

The return value of fseek() indicates whether the operation
succeeded.

ftell() can also be checked.

Example:

long position;

position = ftell(file);

if (position == -1L)
{
    perror("ftell error");
}

---

14. Complete Error-Handling Example

#include <stdio.h>

int main(void)
{
    FILE *file;
    char line[100];

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        perror("Error opening file");
        return 1;
    }

    while (fgets(line, sizeof(line), file) != NULL)
    {
        printf("%s", line);
    }

    if (ferror(file))
    {
        perror("Error while reading file");
    }

    if (fclose(file) == EOF)
    {
        perror("Error closing file");
        return 1;
    }

    return 0;
}

This program:

1. Opens the file
2. Checks whether opening succeeded
3. Reads the file
4. Checks for a reading error
5. Closes the file
6. Checks whether closing succeeded

---

15. Important Points

fopen()
    ↓
Check for NULL

fgetc()
    ↓
Check for EOF

fgets()
    ↓
Check for NULL

fscanf()
    ↓
Check number of successful conversions

fread()
    ↓
Check number of complete items read

fwrite()
    ↓
Check number of complete items written

ferror()
    ↓
Check stream error indicator

feof()
    ↓
Check end-of-file indicator

fclose()
    ↓
Check for EOF on failure

---

Lesson Summary

File error handling is an important part of writing reliable C
programs.

The most important functions are:

perror()
feof()
ferror()
clearerr()

Always check important file operations instead of assuming they
succeeded.
`,

  summary:
    "File error handling allows C programs to detect and report problems during file operations.",

  keyPoints: [
    "Check fopen() for NULL.",
    "perror() prints an error message associated with the current error.",
    "fclose() returns 0 on success and EOF on failure.",
    "ferror() checks the stream error indicator.",
    "feof() checks the end-of-file indicator.",
    "clearerr() clears the error and end-of-file indicators.",
    "Check the return values of fgetc(), fgets(), fscanf(), fread(), fwrite(), fseek(), and ftell() when appropriate."
  ],
};

export default lesson13;