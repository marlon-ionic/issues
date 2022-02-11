# Issues Repo

----------

## Form Autofill Issue with iOS

Simple Ionic starter project (blank template) that replicates an issue where form value changes that are autofilled via iCloud Keychain on iOS devices are not being propogated.

Steps to reproduce (must be done on a physical device to see the behavior)

- Add a dummy record instructions can be found [here](https://osxdaily.com/2020/06/20/how-manually-add-passwords-keychain-iphone-ipad/)
- `npx cap open ios` - then update the Xcode project with a valid identifier/team ID. Save and close the worskpace file
- Connect your iOS device to your development computer
- `npx cap run ios` - then pick your device
- Focus on one of the form controls and select `Passwords` from the keyboard prompt
- Select your dummy record

Notice that the password field's label is overlapping the autofilled password. The FormGroup does not have a value for the field until you select and make another change.
