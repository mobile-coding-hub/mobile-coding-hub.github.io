hero: Adding Extra Keys on the touch keyboard

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


## Adding extra keys

Termux also has an extra keys view which allows you to extend your current keyboard.
To enable the extra keys view you have to long tap on the keyboard button in the left drawer menu.
(Swipe from left → right to open the drawer)

!!! abstract
    ![Termux Left Drawer](/images/termux_left_drawer.jpg)

You can also press `VOLUME UP+Q` or `VOLUME UP+K`.

!!! note
    From Termux v0.66, Extra keys are enabled by default.
    You can remove these by long pressing on the keyboard again

Open the `termux.properties` file:

!!! example
    ```bash
    $ nano ~/.termux/termux.properties
    ```

??? error "Directory .../home/.termux doesn't exist"
    ![Termux Nano Directory Doesn't Exist](/images/termux_directory_doesnt_exist.jpg)

    If you get the above error, then that means that the `.termux` directory
    doesn't exist. Try making it, before doing this, with
    ```bash
    mkdir $HOME/.termux/
    ```

Now we will start by adding two rows of some really useful keys(default keys until v0.66)

!!! example ""
    ```bash
    extra-keys = [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]
    ```

    `extra-keys` is the key and the value is a list(array) of lists with the extra keys!

The extra-keys definition itself can also be spread over multiple lines,
if desired, by "backslash-escaping" the line feed at the end of each line, thus:

!!! example ""
    ```bash
    extra-keys = [ \
        ['ESC','/','-','HOME','UP','END','PGUP'], \
        ['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN'] \
    ]
    ```

!!! success
    It should look something like this:

    ![Termux Extra Keys Written](/images/termux_extra_keys_written.jpg)

Each key "entry" can be either a string (such as `'|'`, `'/'` or `'='`) or one of the values listed below.
These values are defined in ExtraKeysView.java, and the list of values (not including possible synonyms) is:

* CTRL ("special key")
* ALT ("special key")
* FN ("special key")
* ESC ("special key")
* TAB
* HOME
* END
* PGUP
* PGDN
* INS
* DEL
* BKSP
* UP
* LEFT
* RIGHT
* DOWN
* ENTER
* BACKSLASH
* QUOTE
* APOSTROPHE

!!! bug
    Each of the four "special keys" listed above should only be listed at most
    ONCE in the extra-keys definition i.e. do NOT have more than one CTRL key.
    Having more than one instance of any "special key" will result in a bug
    whereby those keys do not function correctly.

### Saving the properties
Now you must save the file. To do so, you need to:

* Hit `CTRL+X`(or `VOLUME DOWN+X` which is the same thing.)
* Press `y` on the keyboard to save changes
* Press `ENTER` to save the filename! 

## Enabling the changes
Termux won't directly load the save changes.
You can use any of the following ways to enable these changes:

* Restart the application! (Easiest way)
* Run `source ~/.termux/termux.properties` to load the file (The linux way)
* Run `termux-reload-settings` (the offical way)

All 3 of these work the same. If one doesn't for you, then use the other :smiley:

!!! tip "For the linux nerds"
    You don't need to follow any of the above steps.
    We didn't put this in the beginning because spoon-feeding is against our policies.
    Sorry, lol

    Use this one command if you want it to happen:

    !!! example
        ```bash
        mkdir $HOME/.termux/ ;echo "extra-keys = [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]" >> $HOME/.termux/termux.properties; termux-reload-properties;
        ```

!!! success
    The keyboard on the bottom should look something like this now!
    Well Done!

    ![Termux Extra Keys Loaded](/images/termux_extra_keys_loaded.jpg)

??? bug "Tightly Packed Keys"
    ![Termux Tight Keys](/image/termux_tight_keys.jpg)

    If after doing all the above steps, the keys look too tightly
    packed to you then that's probably a bug.

    Just close the application with `CTRL+D` or Exit from the
    notification shade and restart it.
    This should hopefully fix it :fingers_crossed: