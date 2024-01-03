FROM cypress/base

# ENV
RUN apt update
RUN apt -y install cron
RUN systemctl enable cron
RUN apt -y install nano

# ENV - dotnet for email (TODO: change (dotnet runtime image getting issue))
RUN wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
RUN chmod +x ./dotnet-install.sh
RUN ./dotnet-install.sh --version latest
RUN export DOTNET_ROOT=$HOME/.dotnet && export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools


WORKDIR /opt/app
COPY . ./test-automation
# RUN git clone https://github.com/rubikparacn/test-automation.git 
# WORKDIR /opt/app test-automation
RUN npm install

# Cron schedule
RUN crontab <<EOF
03 * * * * /opt/app/test-automation/run.sh
EOF
RUN service cron restart


EXPOSE 2112
CMD [ "npm","run", "start:server"]
