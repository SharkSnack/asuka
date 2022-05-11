---
title: "PC Setup Guide"
metaTitle: "PC Version Setup Guide - Shiren Gaiden: Asuka Kenzan Wiki"
metaDescription: "PC version setup guide for Shiren Gaiden: Onna Kenshi Asuka Kenzan!"
---

This page provides instructions for installing the game + tools for item translations.

<span class="redText">※ The ISO for the game is not provided.</span>

# Installation

### Windows 10

#### Downloads

- [AsfPCN1800.exe](https://img.spike-chunsoft.co.jp/games/asukapc/dl/AsfPCN1800.zip) - This is the official offline update patch (ver1.7.0.0).
- [AsukaPlus.0.9.1.0](https://asukaplus.blogspot.com/2018/08/asukaplus-0910.html) - Needed for Windows 10. (Download password: eb6KhFw2)
- [asukanocd.zip](https://mega.nz/file/7SBlkKLZ#VfOE9xVTdgJnvxHPyZxLsNZ4WjZZk04R2ERhFyVRfdA) - No CD patch so you can play without the disc.

#### Steps

##### Change Language for non-Unicode programs to Japanese

1. Go to Language Settings in Windows → click on "Administrative language settings" (on the right)
2. Set "Language for non-Unicode programs" to "Japanese (Japan)"

##### Install the game

1. Mount the ISO and go through the installer.
    - If the installer's text looks garbled, you didn't do the previous step.

##### Update the game

1. Run AsfPCN1800.exe to update the game to version 1.7.0.0.

##### AsukaPlus

1. Move d3d8.dll and Assist.plus from AsukaPlus.0.9.1.0.zip to the game's folder.
    - AsfPc.exe is used to start the game instead of Loader.exe now - update your shortcuts!

##### Apply the No CD patch

1. After doing the previous steps, place the No CD Patch Program into the game's folder.
2. Run the No CD Patch Program.

# Item Translation

<span class="redText">※ Item translation feature only works while you're inside a dungeon.</span>

#### Downloads

- [AsukaTools](http://www.lapcie.com/index.php?page=AsukaTools) - Tool Suite for the game with includes an item name replacement feature. (Choose 安定)
- [ReplaceName.txt](/data/ReplaceName.txt) - Item name translations file.

#### Steps

##### Setup ReplaceName

1. Move ReplaceName.txt to the AsukaTools folder.

##### Enable ReplaceName in AsukaHack

1. Start the game, then enter a dungeon.
2. Run AsukaTools.exe → Black bar with "AsukaTools (version)" will appear somewhere on screen.
3. Right-click the bar, then select "AsukaHack" to enable AsukaHack → A second black bar will appear.
4. Right-click the AsukaHack bar, then select "HackType" → "Support" → "ReplaceName".

※ Once you're done playing, close AsukaHack by selecting "閉じる", and AsukaTools by selecting "終了"
