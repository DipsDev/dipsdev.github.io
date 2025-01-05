---
title: Stash
description: Development of a custom Git client and a Github clone.
pubDate: 2024-06-21
topic: project
---
Development of a custom Git client and a Github clone.
Stash was a final school project and was submitted as part of the 5 units bagrot project.

Stash client was written in Python, and used only the standard libraries that come with the default Python installation.
I learned a lot while building the client, I got a more profound understanding of how Git works under the hood, and what the “simple” commands really do.
I learned how branches work, how merge merges repositories and how push actually pushes files.

StashHub is the Github clone part of the project.
It has a fully blown web interface built with flask, that allows users to view their repositories right in the browser, much like many Git websites allow nowadays.
StashHub is actually built from 2 different servers running, a web server that allows user to create an account and fork or create their own repository. and a file server, which handles Git push, pull and clone.

The entire git traffic is encrypted with AES256 and DiffieHellman. and passwords are stored hashed in the database.
StashHub should be safe for use but SHOULD NOT BE USED, as it not actively maintained. 