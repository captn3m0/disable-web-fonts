# disable-web-fonts

![GitHub release](https://img.shields.io/github/release/captn3m0/disable-web-fonts.svg?style=social) ![Chrome Web Store](https://img.shields.io/chrome-web-store/v/olmabeadgbpmhllgdkemfdnmkngkbkeg.svg?style=social) ![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/olmabeadgbpmhllgdkemfdnmkngkbkeg.svg?style=social) ![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/olmabeadgbpmhllgdkemfdnmkngkbkeg.svg?style=social) ![Maintenance](https://img.shields.io/maintenance/yes/2019.svg?style=social) ![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=social)

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
