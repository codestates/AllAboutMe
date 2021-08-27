#!/bin/bash
cd /home/ubuntu/AllAboutMe/server

export NODE_ENV=$(aws ssm get-parameters --region ap-northeast-2 --names NODE_ENV --query Parameters[0].Value | sed 's/"//g')
export PRODUCTION_DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names PRODUCTION_DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export PRODUCTION_DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names PRODUCTION_DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export PRODUCTION_DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names PRODUCTION_DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')
export PRODUCTION_DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names PRODUCTION_DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

authbind --deep pm2 start index.js