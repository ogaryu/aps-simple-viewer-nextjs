# APS Viewer - Next.js Basic Sample

[![Next.js](https://img.shields.io/badge/Next.js-13-blue.svg)](https://nodejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.12.1-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-8.19.2-green.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

[![oAuth2](https://img.shields.io/badge/oAuth2-v2-green.svg)](http://developer.autodesk.com/)
[![Viewer](https://img.shields.io/badge/Viewer-v7.0-green.svg)](http://developer.autodesk.com/) 

## Description

APS(Autodesk Platform Services) [Viewer](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/overview/) is a WebGL-based, client-side JavaScript library for 3D and 2D model rendering. The Viewer lets you view and share design models on the web from a wide array of products.

I created a sample based on [Next.js](https://nextjs.org/) which is a framework using React.js as the Front End and Node.js as the server.

This sample is using oAuth2 V2 API to get 2-legged token, and APS Viewer V7.

To run the sample, you need to get Object URN of a model which is [uploaded in OSS Bucket](https://aps.autodesk.com/en/docs/data/v2/developers_guide/overview/) and [translated it](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/overview/) in advance.
Please refer to the [Autodesk Forge Tools](https://aps.autodesk.com/blog/forge-visual-studio-code) for easiest way to get the urn.
On the Autodesk Forge Tools, after uploading a model to OSS Bucket and translate it, then right click on the model and 'Copy Object URN to Clipboard'.   

### Thumbnail

![thumbnail](/thumbnail.png) 

## Setup

### Prerequisites

1. An APS account: [Getting Started with APS](https://aps.autodesk.com/developer/getting-started)
2. A text editor of your choice. (For example Visual Studio Code)
3. A basic knowledge of :
    - HTML and CSS
    - JavaScript ES6
    - Command-line programs
      - Node.js Command Line (for Windows users)
      - Terminal (for Mac/Linux/Unix users)

### Running locally

Follow these instructions to get the app running locally:

1. run `git clone` this repository
2. Create .env.local file in a root folder and set ClientId and ClientSecret.
    - CLIENT_ID=XXXXXXXXXX    
    - CLIENT_SECRET=XXXXXXXXXX
3. Set Object URN to documentId in a `components/viewer.js`
4. run `npm install`
5. run `npm run dev`

This will get a server running locally, open `http://localhost:3000` on your browser to see the app running.

--------

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.


## Written by

Ryuji Ogasawara. <br /> 
Developer Advocate <br />
Developer Advocacy & Support <br />

