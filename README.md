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
- need to add username and password also in order to use invitation emails...
- @depricated:set up allowed users in clerk in the restriction tab
- add a field "invitedFromWaitlist" to publicMetadata
- can set an admin via metadata in the clerk user tab
    - set the publicMetadata to {"role": "ADMIN"} and read from user.publicMetadata.role
- use testeuser anderstestkamp@gmail.com
- invitation:
    - make sure to update tehe redirectUrl in the clerk dashboard
```js
          await clerkClient.invitations.createInvitation({
            emailAddress: invitation[0].email,
            redirectUrl: "http://localhost:3000/sign-up", // must be redirected to sign-up if not tokens will be LOST
            publicMetadata: { invitedFromWaitlist: true }
          })
```

## Todo
- [X] add clerk for auth
- [ ] make a custom invited check to see if the user is on waitlinlist or not
    - [ ] let them login. 
    - [ ] fetch wailinlist status while loading
    - [ ] if not accepted route to on-waitlist page 
    - [ ] if accepted let them trough to app
- [ ] move above to the layout of the app or in a provider so it is global for all subroutes!!!
    - [ ] can i only use google now that i dont use the allowlist?
- [ ] add notification panel so admins can see new waitlist users
- make sure i understand the auth. 
    - now i can go into /app and log in without being allowed
    - maybe the (state) folder is where the magic happens?
- fixing email initation
    - fix redirect
- [X] whiteliste admin
- [ ] add favicon
- [ ] add assets and images to cdn so i can use it in clerk invitation
- [ ] add notification panel so admins can get the wailtlist info
- [ ] make mobile friendly
- add onboarding after login
    - add user to database
- feedback componenfeedback componentt
- add react-form-hook 
- fix clerk email template and theming
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
