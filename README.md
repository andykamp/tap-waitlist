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
- flow is then:
    - yarn generate (generates a migration)
    - yarn drizzle-kit push:pg (pushes the created migration to the db AKA creates the tables)

## Next server vs client
- i can create client context providers
- all imports inside a client MUST be clients
- BUT i can pass a server-side child into a client since it is rendered on the server before being passed down
- So that means that the page.tsx is by default a server evenn tho it is wrapped by client providers!
- This means that e.g TRPC and react-query can be used in all client components and pages, but we can still render the main page with data fetches on the server

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
- NEW flow: (https://clerk.com/docs/users/metadata?utm_source=www.google.com&utm_medium=referral&utm_campaign=none)
- dont set public-metadata attributes on signup...
- redirect to /onboarding if user.unsafeMetadata.completedOnboarding is not set
- create a onboarding table for the user when going to the /onboarding page
- keep track of progress in the onboarding table
- use the frontend to set the user.unsafeMetadata.completedOnboarding to true when done
- how to set up tables?
    - on signup webhooks?
    - on demand?
    - when logging in the first time?
    - on onboarding page?
- how to delete all user data?

## Todo
- [ ] make a custom invited check to see if the user is on waitlinlist or not
    - [ ] let them login. 
    - [ ] fetch wailinlist status while loading
    - [ ] if not accepted route to on-waitlist page 
    - [ ] if accepted let them trough to app
- fix clerk email template and theming

- add onboarding after login
    - add user to database
    - SHOULD USERID BE THE PRIMARY KEY
    - add the onConflictDoNothing from https://orm.drizzle.team/docs/insert

- [ ] add notification panel so admins can see new waitlist users
- [ ] add favicon
- [ ] add assets and images to cdn so i can use it in clerk invitation
    - this happends automatically in nextjs?
- [ ] add notification panel so admins can get the wailtlist info
- feedback componenfeedback componentt
- add react-form-hook 
- fix navbar
- fix general UI and theme
    - create 3 tap project for each theme (radix, shadUI, geist, next-ui, next-theme)
    - [ ] make mobile friendly
- add slack hook to notify me when peole is put on a waitlinglist see [link](https://vercel.com/integrations/slack)


## packages
- https://www.npmjs.com/package/react-wrap-balancer
- https://muffinman.io/react-animate-height/
- sonner : beautiful toasts
- react-hook-form : forms
- @hookform/resolvers : validation for react-hoook-form with zod
- usehooks-ts
- geist font
