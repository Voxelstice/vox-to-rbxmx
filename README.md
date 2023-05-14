# vox-to-rbxmx
Converts MagicaVoxel VOX files to Roblox XML Model File

Do not actually use this for any work, the performance will be ABSOLUTELY HORRIBLE in Roblox. 
The issue could be fixed if the multiple amount of parts were combined to just single parts.
Unfortunately, I do not know how to do that nor do I have the time to figure it out. Pull requests implementing something like this would be highly appreciated.

The color selection math is also kinda inaccurate but hey, it works!

# How to use
Download or clone the repo using Git.

Run this in the command prompt:
```
npm i
```
This will install all of the packages for you. (its like 2 but idc!!!)

All you then have to do is put a MagicaVoxel file in the same folder as the index.js file and rename the file to ``input.vox``.

Then you have to run ``node .`` and you will get the resulting file: ``output.rbxmx``.
