#!/bin/bash

# TODO: why did we put `|| exit 0` on this? Why would we have needed that?
./application/manage.py test || exit 0
