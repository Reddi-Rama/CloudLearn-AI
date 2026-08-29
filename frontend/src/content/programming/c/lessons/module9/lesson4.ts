const lesson4 = {
  id: "lesson4",
  title: "File Opening Modes",

  content: `
Introduction

The file opening mode determines how a C program interacts with a file.

The mode is specified as the second argument of fopen().

Example:

FILE *file;

file = fopen("data.txt", "r");

Here:

"data.txt"
    ↓
File name

"r"
    ↓
File opening mode

The three basic modes are:

"r" → Read
"w" → Write
"a" → Append

---

1. Read Mode — "r"

The "r" mode opens an existing file for reading.

Example:

FILE *file;

file = fopen("data.txt", "r");

If the file does not exist, opening the file fails.

Example:

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("File opened for reading.\\n");

    fclose(file);

    return 0;
}

---

2. Write Mode — "w"

The "w" mode opens a file for writing.

Example:

FILE *file;

file = fopen("data.txt", "w");

If the file does not exist, it can be created.

If the file already exists, opening it in "w" mode generally discards
the previous contents and starts a new file.

Therefore, "w" should be used carefully.

---

3. Append Mode — "a"

The "a" mode opens a file for appending.

Example:

FILE *file;

file = fopen("data.txt", "a");

New data is written at the end of the existing file.

If the file does not exist, it can be created.

The previous contents are preserved.

---

4. Comparing the Basic Modes

"r"

    ↓

Read existing file

"w"

    ↓

Write / create / replace

"a"

    ↓

Append to end

---

5. Read and Write Mode — "r+"

The "r+" mode allows both reading and writing.

Example:

FILE *file;

file = fopen("data.txt", "r+");

It is used with an existing file.

---

6. Read and Write Mode — "w+"

The "w+" mode allows both reading and writing.

Example:

FILE *file;

file = fopen("data.txt", "w+");

The existing contents are replaced when the file is opened in this mode.

Therefore, it should be used carefully.

---

7. Read and Append Mode — "a+"

The "a+" mode allows both reading and appending.

Example:

FILE *file;

file = fopen("data.txt", "a+");

New data is appended to the end of the file.

---

8. Binary Mode

For binary data, use "b" with the appropriate mode.

Example:

FILE *file;

file = fopen("students.dat", "wb");

Here:

"w"
    → Write

"b"
    → Binary

---

9. Binary Read Mode — "rb"

The "rb" mode is used to read binary data.

Example:

FILE *file;

file = fopen("students.dat", "rb");

Here:

"r"
    → Read

"b"
    → Binary

---

10. Binary Write Mode — "wb"

The "wb" mode is used to write binary data.

Example:

FILE *file;

file = fopen("students.dat", "wb");

If the file already exists, the previous contents are replaced.

---

11. Binary Append Mode — "ab"

The "ab" mode is used to append binary data.

Example:

FILE *file;

file = fopen("students.dat", "ab");

New binary data is added at the end of the existing file.

---

12. Common File Modes

"r"
    → Read existing file

"w"
    → Write / create / replace

"a"
    → Append to end

"r+"
    → Read + write existing file

"w+"
    → Read + write, replacing existing contents

"a+"
    → Read + append

"rb"
    → Binary read

"wb"
    → Binary write

"ab"
    → Binary append

---

13. Example Program

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("records.txt", "a");

    if (file == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    fprintf(file, "New record\\n");

    fclose(file);

    return 0;
}

Every time the program runs, the new record is added to the end rather
than replacing the previous contents.

---

14. Choosing the Correct Mode

The choice of mode depends on what the program needs to do.

If the program needs to:

Read existing data
    → Use "r"

Write new data
    → Use "w"

Add data without replacing existing data
    → Use "a"

Read and write an existing file
    → Use "r+"

Read and write while replacing existing contents
    → Use "w+"

Read and append
    → Use "a+"

Work with binary data
    → Add "b" to the appropriate mode

---

15. Important Points

"r"
    ↓
Read existing file

"w"
    ↓
Write / create / replace

"a"
    ↓
Append to end

"r+"
    ↓
Read + write existing file

"w+"
    ↓
Read + write, replacing existing contents

"a+"
    ↓
Read + append

"b"
    ↓
Binary mode

Binary modes include:

"rb"
"wb"
"ab"

Choosing the correct mode is important because some modes can discard
existing file contents.

---

Lesson Summary

The file opening mode determines how a C program interacts with a file.

The three basic modes are:

"r"   // Read
"w"   // Write
"a"   // Append

For both reading and writing:

"r+"
"w+"
"a+"

Binary files use modes such as:

"rb"
"wb"
"ab"

Choosing the correct mode is important because some modes can discard
existing file contents.
`,

  summary:
    "The file opening mode determines whether a C program reads, writes, appends, or performs combinations of these operations on a file.",

  keyPoints: [
    "The mode is supplied as the second argument to fopen().",
    "'r' is used to read an existing file.",
    "'w' is used to write, create, or replace a file.",
    "'a' is used to append data to the end of a file.",
    "'r+' allows reading and writing to an existing file.",
    "'w+' allows reading and writing while replacing existing contents.",
    "'a+' allows reading and appending.",
    "'b' indicates binary mode.",
    "Common binary modes are 'rb', 'wb', and 'ab'.",
    "Some modes can discard existing file contents, so the correct mode must be chosen carefully."
  ],
};

export default lesson4;