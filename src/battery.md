# sleep a browser
# from http://www.enricozini.org/blog/2016/debian/simple-one-liner-to-save-battery-life-and-reduce-system-latency/

pkill -CONT brave
pkill -CONT brave-browser


> Sometimes I am in an airplane, and I just want to write code and compile it.

> Sometimes I am playing a game in full screen, and I don't want it to lag.

> Lynoure suggested this simple one-liner which helps immensely, to a point that I have turned it into a habit:

> pkill -STOP chromium
> When I want to use the browser again:

> pkill -CONT chromium
