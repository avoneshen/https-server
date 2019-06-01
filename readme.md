# Secure Server

Simple example of a Node.JS server to run locally that can serve HTTPs.

To get it working, generate the certificates and put them in a folder at root called 'private' (this is excluded by the .gitignore)

# Setting up the certificates for the private directory

Use [this guide](https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-16-04)

`sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./key.key -out ./server.crt`
