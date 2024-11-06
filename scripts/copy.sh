#!/bin/bash

# Remove contents of .quartz/docs
rm -rf .quartz/docs/*

# Copy contents of documents folder to .quartz/docs
cp -r documents/* .quartz/docs/
