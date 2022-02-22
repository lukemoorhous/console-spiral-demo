# Pythonic Approach

My first solution was written in Python rather than JavaScript. If you're curious about how it works, check it out below.

## Running the mini-challenge program

To start the program, launch the program file from the repo's root directory as follows:

```
$ py program.py
```

The program will then ask you for a size. You can enter any integer here. For example:

```
$ py program.py

Enter the size of the spiral matrix to print: 10
[* * * * * * * * * *]
[                  *]
[    * * * * * *   *]
[    *         *   *]
[    *   * *   *   *]
[    *   *     *   *]
[    *   * * * *   *]
[    *             *]
[    * * * * * * * *]
[                   ]
```



Should you wish to change the style of the spiral, you can dive into program.py and alter the spiral class properties at instantiation time

You can edit these properties of the spiral:

- padding (default = 2). This attribute sets the number of spaces between the signal characters
- signal_char (default = "*"). The character used to draw the spiral
- noise_char (default = " "). The background of the spiral