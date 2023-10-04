// import core_1mn from '../1mn/core_1mn.js';
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
                            mScr.style.height = `100%`;
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

                                /* mE.innerHTML = `
                                 <div class="s2">
                                     <div className="part1">
                                         <img class="s2-img" src="../assets/word_with_leaf.svg" alt="Leaf & Text">
                                     </div>
 
                                     <div class="part2">
                                         <div class="border border1">
                                             <div class="border border2">
                                                 <p class="s2-about-title">About</p>
                                                 <div class="s2-carousel-cont">
                                                     <div class="s2-carousel-slider">
                                                         <div class="s2-carousel-item active-item">
                                                             <p>Choose your speed and difficulty levels.</p>
                                                         </div>
                                                         <div class="s2-carousel-item">
                                                             <p>Focus and track the word.</p>
                                                         </div>
                                                         <div class="s2-carousel-item">
                                                             <p>Answer the questions.</p>
                                                         </div>
                                                     </div>
                                                     <div class="s2-carousel-dots">
                                                         <span class="dot1"></span>
                                                         <span class="dot2"></span>
                                                         <span class="dot3"></span>
                                                     </div>
                                                     <p class="s2-btn">Skip</p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 `;
 
                                 const screenElement = mE.querySelector('.s2');
                                 if (screenElement) {
                                     screenElement.style.opacity = 1;
 
                                     const s2Img = screenElement.querySelector(".s2-img");
                                     s2Img.style.animation = "s2-zoomIn 1s 1s both";
 
                                     setTimeout(() => {
                                         s2Img.style.animation = "s2-zoomOut 1s 1s both";
 
                                     }, 2000);
 
 
                                     setTimeout(() => {
                                         const Part2About = screenElement.querySelector(".part2");
                                         Part2About.style.opacity = 1;
 
                                         const dots = screenElement.querySelectorAll(".s2-carousel-dots span");
                                         const itemImg = screenElement.querySelectorAll(".s2-carousel-item");
 
                                         let dotClicked = false;
                                         let currentIndex = 0;
 
                                         dots.forEach((dot, index) => {
                                             dot.addEventListener("click", function () {
                                                 dots.forEach(dot => dot.classList.remove("active-dot"));
                                                 itemImg.forEach(image => image.classList.remove("active-item"));
 
                                                 dot.classList.add("active-dot");
                                                 itemImg[index].classList.add("active-item");
 
                                                 dotClicked = true;
                                                 currentIndex = index;
                                             });
                                         });
 
                                         const skipButton = screenElement.querySelector(".s2-btn");
 
                                         skipButton.addEventListener("click", function () {
                                             itemImg[currentIndex].classList.remove("active-item");
                                             currentIndex = (currentIndex + 1) % itemImg.length;
                                             itemImg[currentIndex].classList.add("active-item");
                                             dots.forEach(dot => dot.classList.remove("active-dot"));
                                             dots[currentIndex].classList.add("active-dot");
 
                                             console.log(currentIndex);
                                             if (currentIndex === 2) {
                                                 currentIndex = 3;
                                             }
 
                                             if (currentIndex === 3) {
                                                 setTimeout(() => {
                                                     screenElement.style.opacity = 0;
                                                     mSendCB("on_new_btn_clc", {});
                                                 }, 1000);
                                             }
                                         });
 
                                     }, 4000);
 
                                 }; 
                             */


                                // Word & Leaf Loading:-
                                mArtBox_evnt.add_svg({
                                    "w": `38vw`,
                                    "h": `40vh`,
                                    // "x": 30,
                                    // "y": 30,  --> position absolute makes error here//
                                    "e": mE,
                                    "src": `${m_asset_path}/word_with_leaf.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        console.log(v.e);
                                        v.e.style.opacity = `0`;
                                        v.e.style.display = `flex`;
                                        v.e.style.justifyContent = `center`;
                                        v.e.style.alignItems = `center`;
                                        v.e.style.marginTop = `30vh`;

                                        setTimeout(() => {
                                            anime({
                                                opacity: 1,
                                                targets: v.e,
                                                scale: [0, 1],
                                                duration: 1500,
                                                direction: 'alternate',
                                                easing: 'easeOutExpo',
                                                loop: false
                                            });
                                        }, 1000);

                                        anime({
                                            targets: v.e,
                                            scale: [1, 0],
                                            duration: 1000,
                                            direction: 'alternate',
                                            easing: 'easeOutQuad',
                                            loop: false
                                        });

                                        setTimeout(() => {
                                            console.log(v.e);
                                            v.e.remove();
                                            about();
                                        }, 3000);
                                    },

                                });


                                // About:-
                                let about = () => {
                                    let value = 1;

                                    setTimeout(() => {
                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            // "x": 10,
                                            // "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/about_1.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    v.e.remove();
                                                    s2();
                                                }, 1000);
                                            }
                                        });
                                    }, 300);

                                    let s2 = () => {
                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            // "x": 10,
                                            // "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/about_2.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    v.e.remove();
                                                    s3();
                                                }, 2000);
                                            }
                                        });
                                    }

                                    let s3 = () => {
                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            // "x": 10,
                                            // "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/about_3.svg`
                                        }, {
                                            "onLoad": (v = {}) => {

                                                setTimeout(() => {
                                                    v.e.remove();
                                                    mSendCB(`on_scr_end`, {});
                                                }, 4000);
                                            }
                                        });
                                    }


                                    // Btn-skip:--
                                    mArtBox_evnt.add_svg({
                                        "w": `8vw`,
                                        "h": `7vh`,
                                        "x": 80,
                                        "y": 80,
                                        "e": mE,
                                        "src": `${m_asset_path}/skip.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            v.e.style.cursor = "pointer";

                                        },
                                        "onClick": (v = {}) => {
                                            // skip(value + 1);
                                        }
                                    });

                                    let skip = (value) => {
                                        // // console.log(value);
                                        // if (value === 3) {
                                        //     setTimeout(() => {
                                        //         v.e.remove();
                                        //         mSendCB(`on_scr_end`, {});
                                        //     }, 3000);
                                        // }
                                    }

                                }


                            };
                            mSet(mScr);
                        }
                    },


                    // Screen-3 ----------
                 

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
                    return; //Stop
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
                    //here you can assign your variable based on your requirements..
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
                    //here you can assign your variable based on your requirements..
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
                    //here you can assign your variable based on your requirements..
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
                    //here you can assign your variable based on your requirements..
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

    /*
    let mStart = (mE) => {
        let screens = mDta_main.screens.rndr.l; // Get the list of screens

        // Function to render a screen
        let renderScreen = (index) => {
            return new Promise((resolve) => {
                if (index < screens.length) {
                    const screen = screens[index];
                    mDta_main.screens.set(screen.key, {
                        "el": mE,
                        "value": {
                            "cb": {
                                "on_new_btn_clc": (p = {}) => {
                                    resolve();
                                },
                            }
                        }
                    });
                } else {
                    resolve();
                }
            });
        };

        // Function to render screens sequentially
        let renderScreensSequentially = (index) => {
            renderScreen(index).then(() => {
                renderScreensSequentially(index + 1);
            });
        };

        renderScreensSequentially(0);
    };
    */


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


