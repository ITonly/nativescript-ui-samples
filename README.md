# Welcome
This repository contains the source code of the UI for NativeScript samples application. The repository does not contain the source code of UI for NativeScript itself. To be able to use the application hosted here, you will need to download the UI for NativeScript plugin for NS and add it manually.

##Overview
The UI for NativeScript samples app resides in the **sdk** folder at root repository level. The folder has a standard NativeScript application structure as described on [NativeScript website](http://docs.nativescript.org/hello-world/hello-world-ns-cli). The source code of the samples resides in the folders named after each component available in **UI for NativeScript**. The currently available components are:

- chart
- sidedrawer
- listview

## Running **UI for NativeScript** sample app
Make sure you are using NativeScript 1.3+. To see which version of NativeScript you are currently using, type `tns --version` in the console.

Steps to run the sample:

1. cd sdk
2. tns install
3. tns run android (or tns run ios)

> If you want to try the new RadListView component on Android you will need to manually add a reference to the RecyclerView component as described in the online documentation here: [Getting started with RadListView for NativeScript](http://docs.telerik.com/devtools/nativescript-ui/Controls/ListView/listview-getting-started)

## Release notes
For more information about releases, features and breaking changes you can check out the release notes section in the online documentation:
[Telerik UI for NativeScript release notes](http://docs.telerik.com/devtools/nativescript-ui/release-notes)