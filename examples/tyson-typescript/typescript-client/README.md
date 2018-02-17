# TypeScript - Base

This is a base example of how to implement typescript into Magento 2 and use the library framework I've developed. To work from scratch in typescript-client remove view library references and/or add custom views to viewApi class.

**STILL IN PROGRESS!!**


## Setup
* Run
```
// where ever typescript will be added
cd ~/src/spendless-magento2/docker/m2-base/magento/app/design/frontend/Spendless/base/
```
* Run
```
mkdir typescript &&\
cd typescript &&\
git clone --depth=1 git@bitbucket.org:aligent/typescript-base.git typescript-client &&\
git clone git@bitbucket.org:aligent/typescript-libraries.git &&\
cd typescript-client &&\
rm -rf .git &&\
npm install
```
* Edit `requirejs-config.js`
```
typescript: 'js/typescript'
```
* Edit `default.xml`
```
<referenceBlock name='header.panel'>
    <block class='Magento\Framework\View\Element\Template' name='typescript.initiate' template='Magento_Theme::typescript/ts-initiate.phtml' before='-'/>
</referenceBlock>
```
* **Copy only required templates** *(Must have ts-initiate.phtml)* and **modify** from: `typescript-libraries/magento/templates/` to `typescript-client/src/magento/templates/`
* **Copy only required admin dirs** *(if any)* and **modify** from: `typescript-libraries/magento/admin/` to `typescript-client/src/magento/admin/`
* Run (Create sym link)
```
cd [CLIENT_ADMIN_DIR]
ln -s [TYPESCRIPT_ADMIN_DIR *relative to current*] TypeScript

...
[CLIENT_ADMIN_DIR] = /home/tyson.vanprooijen/src/spendless-magento2/docker/m2-base/magento/app/code
[TYPESCRIPT_ADMIN_DIR] = ../design/frontend/Spendless/base/typescript/typescript-client/src/magento/admin
```
* Edit `typescript-client/gulpfile.js`
```
vars destCSS, destJS, destPHTML, phtmlFiles
```
* Run `gulp`
* Edit files in `typescript-client` and preview (*Remember to Gulp & flush cache*)


## Testing
####Standalone
* Run (new terminal) `cd [typescript-client]/pub && php -S localhost:8080`
* Open browser `localhost:8080/image-slider.html` (example)

####Client
* Refer to client environment config ***(need to update)***


## PhpStorm
* https://www.jetbrains.com/help/phpstorm/typescript.html



##Removed
* *** Old method *** Edit each layout `X_X.xml`
```
<referenceBlock name='X.X.X'>
    <block class='Magento\Framework\View\Element\Template' name='typescript.X.X' template='Magento_Theme::typescript/ts-X-X.phtml' before='-'/>
</referenceBlock>
```