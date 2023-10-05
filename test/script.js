{
    "name": "Screen 2",
    "key": "scr_2",
    "set": (k, v, thisItem) => {
        console.log(thisItem);
        v["e"].innerHTML = ``; //reset the screen
        console.log(v["e"]);

        //mSendCB..
        let mSendCB = (cb_name, p = {}) => {
            if (v["value"].hasOwnProperty("cb")) {
                if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                    v["value"]["cb"][cb_name](p);
                }
            }
        };

        //set..
        let mScr = document.createElement("div");
        v["e"].appendChild(mScr);
        mScr.style.height = `100%`;
        mScr.style.width = `100%`;
        mScr.style.overflow = `hidden`;
        mScr.style.position = "relative";

        // Array of image sources
        let imageSources = [
            `${m_asset_path}/MacBook Pro 16_ - 54.svg`,
            `${m_asset_path}/1.svg`,
            `${m_asset_path}/2.svg`,
            `${m_asset_path}/3.svg`,
            `${m_asset_path}/4.svg`,
            `${m_asset_path}/5.svg`,
            `${m_asset_path}/Group 32.svg`,
        ];
        let imageSources2 = [
            `${m_asset_path}/1.svg`,
            `${m_asset_path}/2.svg`,
            `${m_asset_path}/3.svg`,
            `${m_asset_path}/4.svg`,
            `${m_asset_path}/5.svg`,
            `${m_asset_path}/Group 32.svg`,
        ];

        // Counter to keep track of the current image
        let currentImageIndex = 0;

        // Function to add an image to the screen
        let addImage = () => {
            // Check if it's the first image
            let isFirstImage = currentImageIndex === 1;
        
            mArtBox_evnt.add_svg({
                "w": `100vw`,
                "h": `100vh`,
                "e": mScr,
                "src": imageSources[currentImageIndex],
                "style": isFirstImage ? "position: absolute; top: 0; left: 0; z-index: -1;" : "" // Add this line for styling
            }, {
                "onLoad": (v = {}) => {
                    if (currentImageIndex < imageSources2.length) {
                        mArtBox_evnt.add_svg({
                            "w": `50vw`,
                            "h": `50vh`,
                            "x": 25,
                            "y": 25,
                            "e": mScr,
                            "src": imageSources2[currentImageIndex],
                            "style": "position: absolute; top: 25%; left: 25%;" // Add this line for styling
                        }, {
                            "onLoad": (v = {}) => {
                                setTimeout(() => {
                                    v.e.remove();
                                    currentImageIndex++;
                                    addImage(); // Add the next image
                                }, 1000); // Set the duration here (in milliseconds)
                            }
                        });
                    } else {
                        // All images have been displayed, trigger callback
                        mSendCB(`on_scr_end`, {});
                    }
                }
            });
        };

        // Start adding images
        addImage();
    }
},