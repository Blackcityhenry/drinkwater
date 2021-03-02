# drinkwater
睇之前而家飲啖水先

一個提你飲水既網。

網址：
https://water.fighter.hk

# DrinkWater API

Phase 1

## Login
param: /login
method: POST
body: username
description:
1. return {nickname, cups, isPro}

## Drink 1 cup of water
param: /drink  
method: POST  
body: username  
description:
1. user's cup ++
2. return number of cups

## Create user
param: /register  
method: POST  
body: username, nickname, (cups = 0), (isPro = false)  
description:
1. create user

## Check user exist
param: /checkuser  
method: POST  
body: username  
description:
1. return true / false

## Leaderboard
param: /leaderboard  
method: GET  
description:
1. return array of {nickname, cups, isPro} in asending order of cups

## Upgrade to Pro
param: /registerpro  
method: POST  
body: username, secret-key  
description:
1. change user to isPro: true


Phase 2

## change nickname
