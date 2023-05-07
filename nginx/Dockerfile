FROM nginx

#remove the default config
RUN rm /etc/nginx/conf.d/default.conf



#copy the config to nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

#copy the config to sites-available folder making a new file called nextsite
COPY nextsite.conf /etc/nginx/sites-available/nextsite.conf

RUN ls -l /etc/nginx/sites-available

#make a site-enabled directory
RUN mkdir /etc/nginx/sites-enabled

#enable the site by creating a symbolic link to the sites-enabled folder
RUN ln -s /etc/nginx/sites-available/nextsite.conf /etc/nginx/sites-enabled/nextsite


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]





