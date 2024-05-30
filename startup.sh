#!/bin/bash

sleep 20

gnome-terminal -- bash -c "cd /home/thmd7/Desktop/GitHub/midhat.io && git pull && python3 app.py" --window-with-profile=default
