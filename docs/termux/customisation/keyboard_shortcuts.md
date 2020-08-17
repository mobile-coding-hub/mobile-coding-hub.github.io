hero: Various Keyboard Shortcuts for Termux

## Understanding Keys on Termux and Shortcuts
You might have noticed that the keyboard at the bottom of the screen has some pretty useful keys by default!
These are `ESC`, `TAB`, `CTRL`, `ALT`, `-`, `DOWN` and `UP`.

But you can always edit these if you want to!

Use of keys like `ALT`, `CTRL`, `ESC` is necessary for working with a CLI terminal.
Termux touch keyboards do not include one.
For that purpose Termux uses the Volume down button to emulate the `CTRL` key.
For example, pressing `VOLUME DOWN+L` on a touch keyboard sends the same input
as pressing Ctrl+L on a hardware keyboard.

The result of using `CTRL` in combination with a key depends on which program is used, but for many command line tools the following shortcuts works:

* `CTRL+A` → Move cursor to the beginning of line
* `CTRL+C` → Abort (send SIGINT to) current process
* `CTRL+D` → Logout of a terminal session
* `CTRL+E` → Move cursor to the end of line
* `CTRL+K` → Delete from cursor to the end of line
* `CTRL+L` → Clear the terminal
* `CTRL+Z` → Suspend (send SIGTSTP to) current process
* `CTRL+ALT+C` → Open new session (only work in Hacker's Keyboard)

The Volume up key also serves as a special key to produce certain input:

* `VOLUME UP+E` → Escape key
* `VOLUME UP+T` → Tab key
* `VOLUME UP+1` → F1 (and Volume Up+2 → F2, etc)
* `VOLUME UP+0` → F10
* `VOLUME UP+B` → Alt+B, back a word when using readline
* `VOLUME UP+F` → Alt+F, forward a word when using readline
* `VOLUME UP+X` → Alt+X
* `VOLUME UP+W` → Up arrow key
* `VOLUME UP+A` → Left arrow key
* `VOLUME UP+S` → Down arrow key
* `VOLUME UP+D` → Right arrow key
* `VOLUME UP+L` → | (the pipe character)
* `VOLUME UP+H` → ~ (the tilde character)
* `VOLUME UP+U` → _ (underscore)
* `VOLUME UP+P` → Page Up
* `VOLUME UP+N` → Page Down
* `VOLUME UP+.` → Ctrl+\ (SIGQUIT)
* `VOLUME UP+V` → Show the volume control
* `VOLUME UP+Q` → Show extra keys view
* `VOLUME UP+K` → Another variant to toggle extra keys view
