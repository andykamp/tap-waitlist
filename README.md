# TAP-Waitlist

> **Warning**
> This is a work-in-progress and not the finished product.
>
> Noodle is in it's very early days of development and there is not much going on for the product right now.
> We are working hard to providing an initial version as soon as possible and also accepting contributions.
>
> Feel free to leave feature suggestions but please don't open issues for bugs or support requests just yet.

## Drizzle setup
- i create the postgres db schemas in the db/ folder
- i create a drizzle.config.ts so i can create migrations
- i need to manually create the tables (??) by copypasting the migrated queries into the postgres console....
    - OPS if i dont do this i get an error "error: relation does not exist"
- then i can use the app as usual. if 

## Auth
- use clerk for auth
- set up allowed users in clerk in the restriction tab
- can set an admin via metadata in the clerk user tab
    - set the publicMetadata to {"role": "ADMIN"} and read from user.publicMetadata.role

## Todo
- [X] add clerk for auth
- [ ] make a custom invited check to see if the user is on waitlinlist or not
    - [ ] let them login. But show them waitlinglist page 
- [ ] add notification panel so admins can see new waitlist users
- make sure i understand the auth. 
    - now i can go into /app and log in without being allowed
    - maybe the (state) folder is where the magic happens?
- whiteliste admin
- feedback componenfeedback componentt
- add react-form-hook 
- fix navbar
- fix general UI and theme
    - create 3 tap project for each theme (radix, shadUI, geist, next-ui, next-theme)
- add slack hook to notify me when peole is put on a waitlinglist see [link](https://vercel.com/integrations/slack)
- add geist theme
- use clerk for auth?
- what drizzle datasource to use
    - seems to use libSQL (sqlliteI) or turso
        - https://github.com/tursodatabase/libsql 
- add redis, trpc and zod
- usehooks-ts
- https://www.npmjs.com/package/react-wrap-balancer
- https://muffinman.io/react-animate-height/
- nextUI https://nextui.org/docs/components/dropdown


## packages
- sonner : beautiful toasts
- react-hook-form : forms
- @hookform/resolvers : validation for react-hoook-form with zod
