# This is a Test App using nextjs/capacitor

## If you are using Next.js to build a web app, you could use capacitor and turn it into a native ios/android app

# Preparing your Next.js app.
 Let's start a new Nextjs application.

`npx create-next-app test-app`

 To build a native mobile app we need to export our application so for we need to add a new script into our **package.json** file

`"static": "next build && next export"`

 This is not going to fully work because of the image optimization; Therefore we need to change the **next.config.js** file.

`/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
`
Now you can safely run 

`npm run static`
 
 You should see a new folder named **out**, this folder is later going to be used by Capacitor


# Adding Capacitor into the project

`
    #Install the CapacitorCLI locally 
    npm install -D @capacitor/cli

    #Initialize Capacitor in the project
    npx cap init

    #Install the required packages
    npm install @capacitor/core @capacitor/ios @capacitor/android

    #Add the native platforms
    npx cap add ios
    npx cap add android
`

At this point you should see the **ios** and **android** folders
As a final step open the **capacitor.config.ts** file and change the **webDir**
 
`
"webDir": "out",
`

Now you should be able to run 

`
npm run static 
npx cap sync
`
# Build and deploy

`
    npx cap open ios \n
    npx cap open android
`

# Adding live reload

First figure out your local IP adress.

`
    ipconfig getifaddr en0
`
Now we only need to tell capacitor to load the app directly from this server, which we can do right in the **capacitor.config.ts** with another entry:

`

    import { CapacitorConfig } from '@capacitor/cli';

    const config: CapacitorConfig = {
        appId: 'com.example.app',
        appName: 'my-app',
        webDir: 'out',
        bundledWebRuntime: false,
        server: {
            url: 'http://192.168.x.xx:3000',
            cleartext: true
        }
    };

    export default config;

`
Make sure you use the right IP and port
Now lets apply those changes to our netive project

`
    npx cap copy
`
