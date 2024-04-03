# Installation
```
curl -fsSL https://get.pnpm.io/install.sh | sh -
source /Users/joventan/.zshrc
pnpm dlx nuxi@latest init tappy
```

# Guide

https://www.shadcn-vue.com/docs/installation/nuxt.html
https://www.youtube.com/watch?v=azs0ov_SbOA&ab_channel=Codewithguillaume

# ShadCN

```
npm install -D typescript
npm install -D @nuxtjs/tailwindcss
npm install -D shadcn-nuxt

npx shadcn-vue@latest init 
Need to install the following packages:
shadcn-vue@0.10.2
Ok to proceed? (y) y
✔ Would you like to use TypeScript (recommended)? … no / yes
✔ Which framework are you using? › Nuxt
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? … assets/css/tailwind.css
✔ Would you like to use CSS variables for colors? … no / yes
✔ Where is your tailwind.config located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Write configuration to components.json. Proceed? … yes                                                                                                                                                                                                                                                                          
✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...
ℹ Success! Project initialization completed.   
```

# Add Components on ShadCN
```
npx shadcn-vue@latest add button
```