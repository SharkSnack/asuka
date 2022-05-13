---
title: "PC Setup Guide"
metaTitle: "PC Version Setup Guide - Shiren Gaiden: Asuka Kenzan Wiki"
metaDescription: "PC version setup guide for Shiren Gaiden: Onna Kenshi Asuka Kenzan!"
---

This page provides instructions for installing the game + tools for item name translations.

<span class="redText">※ The ISO for the game is not provided.</span>

# Installation

### Windows 10

#### Downloads

- [AsfPCN1800.zip](https://img.spike-chunsoft.co.jp/games/asukapc/dl/AsfPCN1800.zip) - This is the official offline update patch (ver1.7.0.0). ([Source](https://www.spike-chunsoft.co.jp/games/asukapc/dl.html))
- [AsukaPlus.0.9.1.0.zip](https://mega.nz/file/OSwHRAIS#xGtcYVENcVwjONab0GIZNZPMl31rNhIAEhiTMS7O-Gs) - Needed for Windows 10. ([Source](https://asukaplus.blogspot.com/2018/08/asukaplus-0910.html))
- [asukanocd.zip](https://mega.nz/file/7SBlkKLZ#VfOE9xVTdgJnvxHPyZxLsNZ4WjZZk04R2ERhFyVRfdA) - No CD patch so you can play without the disc. ([Source](http://asuka.lsx3.com/?%A5%C4%A1%BC%A5%EB))

#### Steps

##### Change Language for non-Unicode programs to Japanese

1. Go to Language Settings in Windows → click on "Administrative language settings" (on the right)
2. Set "Language for non-Unicode programs" to "Japanese (Japan)"

##### Install the game

1. Mount the ISO and go through the installer.
    - If the installer's text looks garbled, you didn't do the previous step.
    - If you don't see a mount option, you can also extract the ISO using [7zip](https://www.7-zip.org/download.html) and run the setup file.
    - Game folder location: Program Files (x86) → CHUNSOFT → AsukaPC

##### Update the game

1. Extract the contents of AsfPCN1800.zip.
2. Run AsfPCN1800.exe to update the game to version 1.7.0.0.

##### AsukaPlus

1. Extract the contents of AsukaPlus.0.9.1.0.zip.
2. Move d3d8.dll and Assist.plus from the AsukaPlus.0.9.1.0 folder to the game's folder.
    - AsfPc.exe is used to start the game instead of Loader.exe now - update your shortcuts!

##### Apply the No CD patch

1. After doing the previous steps, extract the contents of asukanocd.zip.
2. Move the No CD Patch Program from the asukanocd folder into the game's folder.
3. Run the No CD Patch Program.

##### If you're missing DirectX8

1. Download and install [DirectX End-User Runtimes (June 2010)](https://www.microsoft.com/en-us/download/details.aspx?id=8109)

# Item Name Translation

<span class="redText">※ Item name translation feature only works while you're inside a dungeon.</span>

#### Downloads

- [AsukaTools](http://www.lapcie.com/index.php?page=AsukaTools) - Tool Suite for the game which includes an item name replacement feature.
- [ReplaceName.txt](https://raw.githubusercontent.com/SharkSnack/asuka/main/content/data/ReplaceName.txt) - Item name translations file. (Right-click → Save link as...)

#### Steps

##### AsukaTools

1. The Download link is "Ver x.x.xxx (安定) Download" at the top of the page.

##### Setup ReplaceName

1. Extract the contents of AsukaTools zip file.
2. Move ReplaceName.txt to the AsukaTools folder.

##### Enable ReplaceName in AsukaHack

1. Start the game, then enter a dungeon.
2. Run AsukaTools.exe → Black bar with "AsukaTools (version)" will appear somewhere on screen.
3. Right-click the bar, then select "AsukaHack" to enable AsukaHack → A second black bar will appear.
4. Right-click the AsukaHack bar, then select "HackType" → "Support" → "ReplaceName".

※ Once you're done playing, close AsukaHack by selecting "閉じる", and AsukaTools by selecting "終了"
