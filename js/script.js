import { art_box } from "../libs/artbox/art_box.js";


const mArtBox = art_box();
const m_asset_path = '../assets';

// Renderer:--
let mGameRenderer = (data = {}, mDOM) => {
    let mDiv = document.createElement("div");
    mDiv.style.position = 'relative';
    mDiv.style.width = '100%';
    mDiv.style.height = '100%';
    mDOM.appendChild(mDiv);
    //your root element end [----mDiv----]


    //--mArtBox--//
    let mArtBox_evnt = mArtBox.set({ "e": mDiv });
    let mScene = mArtBox_evnt.get_scene();


    //-----do your code-----//
    //utils..
    let mUtils = {
        // mArtBox_evnt.add_animation({
        //     "e":mScene,
        //     "type":"animate__bounce"
        // });

    };

    //--my-code--//
    let myCODE = {

    };



    //mDta_main:--
    let mDta_main = {
        "utils": {},
        "gVars": {
            "my_var_1": ""
        },
        "screens": {
            "rndr": {
                "l": [

                    // Screen-2 ----------
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

                            // Create the slideshow container
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            // Define image paths
                            const m_asset_path = [
                                "MacBook Pro 16_ - 49.svg",
                                "MacBook Pro 16_ - 50.svg",
                                "MacBook Pro 16_ - 51.svg",
                                "MacBook Pro 16_ - 52.svg",
                                "MacBook Pro 16_ - 53.svg",
                                "MacBook Pro 16_ - 54.svg"
                            ];

                            // Show images in slideshow
                            let currentImage = 0;
                            function showNextImage() {
                                mScr.innerHTML = `<img src="${m_asset_path[currentImage]}" alt="Image ${currentImage + 1}">`;
                                currentImage = (currentImage + 1) % m_asset_path.length;
                                setTimeout(showNextImage, 3000); // Change image every 3 seconds
                            }

                            showNextImage();

                            //set..
                            let mSet = (mE = document.body) => {
                                // You can add additional setup here if needed
                            };
                            mSet(mScr);
                        }
                    }
                    ,
    
                    // Screen-1 -----------
                    {
                        "name": "Screen 1",
                        "key": "scr_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen
    
                            // mSendCB..
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
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;
    
                            //set..
                            let mSet = (mE = document.body) => {
                                // BG:-
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `110vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/robot.svg`
                                });
    
                                // btn:-
                                mArtBox_evnt.add_svg({
                                    "w": `25vw`,
                                    "h": `60vh`,
                                    "x": 37.5,
                                    "y": 46,
                                    "e": mE,
                                    "src": `${m_asset_path}/loading.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.opacity = `0`;
                                        v.e.style.cursor = `pointer`;
    
                                        setTimeout(() => {
                                            let timeline = anime.timeline();
                                            timeline.add({
                                                targets: v.e,
                                                opacity: 1,
                                                duration: 1000,
                                                easing: 'easeOutExpo'
                                            });
                                        }, 400);
                                    },
    
                                    "onClick": (v = {}) => {
                                        v.e.style.opacity = "0";
    
                                        setTimeout(() => {
                                            v.e.remove();
                                        }, 300);
                                        loading();
                                    }
    
                                });
    
                                // Loading:-
                                let loading = () => {
                                    mArtBox_evnt.add_svg({
                                        "w": `43vw`,
                                        "h": `16vh`,
                                        "x": 29,
                                        "y": 70,
                                        "e": mE,
                                        "src": `${m_asset_path}/loading.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            v.e.style.opacity = `0`;
                                            v.e.style.cursor = `mouse`;
    
                                            setTimeout(() => {
                                                let timeline = anime.timeline();
                                                timeline.add({
                                                    targets: v.e,
                                                    opacity: 1,
                                                    duration: 100,
                                                    easing: 'easeOutExpo',
    
                                                    complete: function (anim) {
                                                        let ve = v.e;
                                                        let ball = document.createElement('div');
                                                        ball.classList = "loading_ball";
                                                        ball.style.opacity = "1";
                                                        ball.style.backgroundColor = "#8D8282";
                                                        ball.style.borderRadius = "87px";
                                                        ball.style.width = "10vw";
                                                        ball.style.height = "9vh";
                                                        ball.style.marginInline = "2vw";
                                                        ball.style.marginBottom = "10px";
                                                        ball.style.position = "absolute";
                                                        ball.style.top = "24%";
                                                        ball.style.left = "0%";
    
                                                        ve.appendChild(ball);
    
                                                        let ballClass = ve.querySelector(".loading_ball");
    
                                                        anime({
                                                            opacity: 1,
                                                            targets: '.loading_ball',
                                                            width: '90%',
                                                            easing: 'easeInOutQuad',
                                                            direction: 'alternate',
                                                            loop: false
                                                        });
    
                                                        setTimeout(() => {
                                                            on_scr_end();
                                                        }, 1000);
                                                    }
    
                                                });
                                            }, 400);
                                        }
                                    });
                                }
    
                                // on_scr_end..
                                let on_scr_end = () => {
                                    setTimeout(() => {
                                        mSendCB(`on_scr_end`, {});
                                    }, 500);
                                };
                            };
    
                            mSet(mScr);
                        }
                    },

                    // Screen-2 ----------
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


                            //set..
                            let mSet = (mE = document.body) => {
                                
                            };
                            mSet(mScr);
                        }
                    },


                    // Screen-3 ----------
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


                            //set..
                            let mSet = (mE = document.body) => {
                                
                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-4 -----------
                  

                    // Screen-5 -----------

                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k); // Index number of the screen list
                if (mIdx == -1) {
                    throw `err: [k = ${k}] is not available..`;
                    return;
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);
            }

        }

    };

    //set..
    // mDiv.innerHTML = "Content";



    // //mStart..
    let mStart = (mE) => {
        // set..
        let scr_5 = () => {
            mDta_main.screens.set(`scr_5`, {
                "e": mE,
                "value": {
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                        },
                    }
                }
            });
        };
        let scr_4 = () => {
            mDta_main.screens.set(`scr_4`, {
                "e": mE,
                "value": {
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_5();
                        },
                    }
                }
            });
        };
        let scr_3 = () => {
            mDta_main.screens.set(`scr_3`, {
                "e": mE,
                "value": {
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_4();
                        },
                    }
                }
            });
        };
        let scr_2 = () => {
            mDta_main.screens.set(`scr_2`, {
                "e": mE,
                "value": {
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_3();
                        },
                    }
                }
            });
        };

        mDta_main.screens.set(`scr_1`, {
            "e": mE, //Html-Element
            "value": {
                //here you can assign your variable based on your requirements..
                //callback..
                "cb": {
                    "on_scr_end": (p = {}) => {
                        scr_2();
                    },
                }

            }
        });

    };

    mStart(mScene);

};

mGameRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",

    }
}, document.body);


