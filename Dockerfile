
FROM node:14

RUN apt-get update && apt-get install sudo
RUN echo "node:node" | chpasswd && adduser node sudo

WORKDIR /home/node/giita-front-end
RUN chown -R node:node /home/node
#アプリ起動
#CMD [ "/bin/bash","/init.sh" ]


