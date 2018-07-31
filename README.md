# disable-web-fonts

Disables Web Fonts across all website. Saves Bandwidth. This extension by itself will not save you much bandwidth. It is meant to be used alongside other solutions that block other things. It was born because while Chrome offers image and even script level blocking, there is no way to block web fonts from loading via `font-face` in css.

# Installation

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/olmabeadgbpmhllgdkemfdnmkngkbkeg)

# Other methods to save bandwidth

Go to `chrome://settings/content#content` and change the following:

-   Images - Do not show any images. (Manage exceptions as you browse)
-   Plugins - Click to Play (You can also manage exceptions)
-   JavaScript - Do not allow any site to run JavaScript (manage exceptions as you browse).

As an alternative to complete JavaScript blocking, I recommend using "Ghostery" or "Disconnect" extensions that would block all trackers, while allowing you to run important bits of javascript.

Needless to say, do not forget to install [uBlock][ublock] as well.

# Licence

Licenced under the [MIT Licence](http://nemo.mit-license.org/).

[ublock]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en
[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip]: https://www.gittip.com/captn3m0/
