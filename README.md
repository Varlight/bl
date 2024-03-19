# Blue: A Metaverse on shardeum Chain

Blue is an innovative Metaverse built on the sharedeum chain, offering a unique Virtual Reality Experience to each NFT holder. This immersive experience is crafted through the integration of Artificial Intelligence NPC Characters, featuring Speech-to-Speech Recognition tailored for the specific environment.

---

## Screenshots

![Screenshot 1](https://raw.githubusercontent.com/dharshini78/fi_GA/master/WhatsApp%20Image%202024-03-13%20at%2021.35.32_ebf44dbc.jpg)


**Blue stands out as a one-of-a-kind marketplace, transcending traditional boundaries by facilitating the trade of virtual experiences and realities. This visionary project taps into the ever-expanding realm of virtual worlds and simulations.**

![Screenshot 2](https://github.com/dharshini78/fi_GA/blob/master/WhatsApp%20Image%202024-03-13%20at%2021.39.15_1a102804.jpg)

![Screenshot 3](https://raw.githubusercontent.com/dharshini78/fi_GA/master/WhatsApp%20Image%202024-03-13%20at%2021.39.24_8c6771bb.jpg)

---

## Virtual Reality Deployment
Downlaod the unity apks from here https://www.dropbox.com/scl/fo/oih6pm9spom9kiouxh6jj/h?rlkey=fj3o27qnt35mu13dzh7si46a8&dl=0

### Unity Build Settings

1. **Open Unity.**
2. Go to `File` > `Build Settings`.
3. Switch the platform to Android.
4. Click on `Build`.

### Oculus Quest Setup

1. **Connect the VR headset to Oculus software in Windows through Quest Link or Link cable.**
2. Ensure that the developer mode is enabled in the Meta Quest app on the mobile device.
3. Install ADB drivers.

### Sideloading with SideQuest

1. **Create an organization and verification.**
2. Install SideQuest software.
3. Connect Oculus Quest 3 to SideQuest.
4. Deploy the APK using SideQuest.

### Additional Steps

- *Make sure your organization is verified.*
- *Ensure that developer mode is enabled on the Meta Quest app.*
- *Install ADB drivers on your system.*

---

## Video Demos

[![Video 4](https://img.youtube.com/vi/ef_stKFfyLo/0.jpg)](https://youtu.be/ef_stKFfyLo?si=AqWezdHeS2zJ7Qiy)

[![Video 1](https://img.youtube.com/vi/H4OS9k4HyqQ/0.jpg)](https://www.youtube.com/shorts/H4OS9k4HyqQ?feature=share)

[![Video 2](https://img.youtube.com/vi/0kFvaxkG-2o/0.jpg)](https://youtube.com/shorts/0kFvaxkG-2o?si=wXc137uYH8Wj6EVm)

[![Video 3](https://img.youtube.com/vi/oJYk3RbM5vQ/0.jpg)](https://youtube.com/shorts/oJYk3RbM5vQ?si=dOeTKg5SDbCersGm)

---

## Tools Used

- Unity Hub 2022.17.11
- XR Interaction Toolkit
- OpenVR
- Built for the Android platform
- Oculus support
- API used: convai

---

### Hardhat Compiler and Deployment Commands

Add your private key to the `hardhat.config` file.

```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Deploy contracts
npx hardhat run scripts/deploy.js

# Copy ABI and contract deployed address in ether.js
