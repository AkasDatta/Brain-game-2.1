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
        "gVars": {  //Global-Variables
            "my_var_1": "",
        },
        "screens": {  //screens
            "rndr": { //Renderer..
                "l": [ //list..

                                    // Screen-1 -----------------------------
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

                                // Loading:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/loading/loading_0.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        setTimeout(() => {
                                            // v.e.style.visibility = `hidden`;
                                            // v.e.style.display= `none`;
                                            v.e.remove();
                                        }, 600);
                                    }
                                });

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "e": mE,
                                        "src": `${m_asset_path}/loading/loading_1.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.remove();
                                            }, 700);
                                        }
                                    });
                                }, 700);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "e": mE,
                                        "src": `${m_asset_path}/loading/loading_2.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.remove();
                                            }, 800);
                                        }
                                    });
                                }, 800);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "e": mE,
                                        "src": `${m_asset_path}/loading/loading_3.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.remove();
                                            }, 900);
                                        }
                                    });
                                }, 900);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "e": mE,
                                        "src": `${m_asset_path}/loading/loading_4.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.remove();
                                            }, 1000);
                                        }
                                    });
                                }, 1000);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        // "x": 30,
                                        // "y": 70,
                                        "e": mE,
                                        "src": `${m_asset_path}/loading/loading_5.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.remove();
                                                on_scr_end();
                                            }, 1500);
                                        }
                                    });
                                }, 1100);


                                // on_scr_end..
                                let on_scr_end = () => {
                                    setTimeout(() => {
                                        mScr.remove();
                                        //send cb..
                                        mSendCB(`on_scr_end`, {});
                                    }, 500);
                                };
                            };

                            mSet(mScr);
                        }
                    },
                    
                    
                // Screen-2 -----------------------------
                    {
                        "name": "Screen 3",
                        "key": "scr_3",
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
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    // "x": 30,
                                    // "y": 70,
                                    "e": mE,
                                    "src": `${m_asset_path}/screen_1.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            // "x": 30,
                                            // "y": 70,
                                            "e": mE,
                                            "src": `${m_asset_path}/listening_screen_1.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    v.e.remove();
                                                    on_scr_end();
                                                }, 1500);
                                            }
                                        });
                                        
                                    }
                                });
                                let on_scr_end = () => {
                                    setTimeout(() => {
                                        mScr.remove();
                                        //send cb..
                                        mSendCB(`on_scr_end`, {});
                                    }, 500);
                                };

                            };
                            mSet(mScr);
                        }
                    },

                    // screen 2
                    





                    // Screen-3 ----------
                    // {
                    //     "name": "Screen 3",
                    //     "key": "scr_3",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset the screen
                    //         console.log(v["e"]);

                    //         //mSendCB..
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb")) {
                    //                 if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                     v["value"]["cb"][cb_name](p);
                    //                 }
                    //             }
                    //         };


                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100%`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {


                    //             // Word & Leaf Loading:-
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `38vw`,
                    //                 "h": `40vh`,
                    //                 // "x": 30,
                    //                 // "y": 30,  --> position absolute makes error here//
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/MacBook Pro 16_ - 49.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     console.log(v.e);
                    //                     v.e.style.opacity = `0`;
                    //                     v.e.style.display = `flex`;
                    //                     v.e.style.justifyContent = `center`;
                    //                     v.e.style.alignItems = `center`;
                    //                     v.e.style.marginTop = `30vh`;

                    //                     setTimeout(() => {
                    //                         anime({
                    //                             opacity: 1,
                    //                             targets: v.e,
                    //                             scale: [0, 1],
                    //                             duration: 1500,
                    //                             direction: 'alternate',
                    //                             easing: 'easeOutExpo',
                    //                             loop: false
                    //                         });
                    //                     }, 1000);

                    //                     anime({
                    //                         targets: v.e,
                    //                         scale: [1, 0],
                    //                         duration: 1000,
                    //                         direction: 'alternate',
                    //                         easing: 'easeOutQuad',
                    //                         loop: false
                    //                     });

                    //                     setTimeout(() => {
                    //                         console.log(v.e);
                    //                         v.e.remove();
                    //                         about();
                    //                     }, 3000);
                    //                 },

                    //             });


                    //             // About:-
                    //             let about = () => {
                    //                 let value = 1;

                    //                 setTimeout(() => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `100vw`,
                    //                         "h": `100vh`,
                    //                         // "x": 10,
                    //                         // "y": 10,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/MacBook Pro 16_ - 49.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             setTimeout(() => {
                    //                                 v.e.remove();
                    //                                 s2();
                    //                             }, 1000);
                    //                         }
                    //                     });
                    //                 }, 300);

                    //                 let s2 = () => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `100vw`,
                    //                         "h": `100vh`,
                    //                         // "x": 10,
                    //                         // "y": 10,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/MacBook Pro 16_ - 49.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             setTimeout(() => {
                    //                                 v.e.remove();
                    //                                 s3();
                    //                             }, 2000);
                    //                         }
                    //                     });
                    //                 }

                    //                 let s3 = () => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `100vw`,
                    //                         "h": `100vh`,
                    //                         // "x": 10,
                    //                         // "y": 10,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/MacBook Pro 16_ - 49.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                             setTimeout(() => {
                    //                                 v.e.remove();
                    //                                 mSendCB(`on_scr_end`, {});
                    //                             }, 4000);
                    //                         }
                    //                     });
                    //                 }

                    //             }

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },


                               

                    // Screen-4 -----------------------------
                    {
                        "name": "Screen 4",
                        "key": "scr_4",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

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
                            // on_scr_end..
                            // let on_scr_end = () => {
                            //     let timeline = anime.timeline();
                            //     timeline.add({
                            //         targets: mScr,
                            //         opacity: 0,
                            //         duration: 3000,
                            //         easing: 'easeOutExpo',
                            //         update: function (anim) {
                            //             // mSendCB(`on_scr_end`, {});
                            //             console.log(anim.progress);

                            //             if (anim.progress > 0) {
                            //                 anime.remove(mScr);
                            //                 mScr.remove();
                            //                 //send cb..
                            //                 mSendCB(`on_scr_end`, {});
                            //             }
                            //         },
                            //     });
                            // };

                            mSet(mScr);
                        }
                    },

                    // Screen-5 -----------------------------
                    {
                        "name": "Screen 5",
                        "key": "scr_5",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

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

                                // on_scr_end..
                                // let on_scr_end = () => {
                                //     let timeline = anime.timeline();
                                //     timeline.add({
                                //         targets: mScr,
                                //         opacity: 0,
                                //         duration: 3000,
                                //         easing: 'easeOutExpo',
                                //         update: function (anim) {
                                //             // mSendCB(`on_scr_end`, {});
                                //             console.log(anim.progress);

                                //             if (anim.progress > 0) {
                                //                 anime.remove(mScr);
                                //                 mScr.remove();
                                //                 //send cb..
                                //                 mSendCB(`on_scr_end`, {});
                                //             }
                                //         },
                                //     });
                                // };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-6 ------------------------------
                    {
                        "name": "Screen 6",
                        "key": "scr_6",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

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
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {
                                // Score and Round Play:--
                               
                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-7 ------------------------------
                    {
                        "name": "Screen 7",
                        "key": "scr_7",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

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
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                // on_scr_end..
                                // let on_scr_end = () => {
                                //     let timeline = anime.timeline();
                                //     timeline.add({
                                //         targets: mScr,
                                //         opacity: 0,
                                //         duration: 3000,
                                //         easing: 'easeOutExpo',
                                //         update: function (anim) {
                                //             // mSendCB(`on_scr_end`, {});
                                //             console.log(anim.progress);

                                //             if (anim.progress > 0) {
                                //                 anime.remove(mScr);
                                //                 mScr.remove();
                                //                 //send cb..
                                //                 mSendCB(`on_scr_end`, {});
                                //             }
                                //         },
                                //     });
                                // };

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-8 ------------------------------
                    {
                        "name": "Screen 8",
                        "key": "scr_8",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

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
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {


                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-9 ----------
                    {
                        "name": "Screen 9",
                        "key": "scr_9",
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
                            const imagePaths = [
                                "/assets/LastImage/MacBook Pro 16_ - 49.svg",
                                "/assets/LastImage/MacBook Pro 16_ - 50.svg",
                                "/assets/LastImage/MacBook Pro 16_ - 51.svg",
                                "/assets/LastImage/MacBook Pro 16_ - 52.svg",
                                "/assets/LastImage/MacBook Pro 16_ - 53.svg",
                                "/assets/LastImage/MacBook Pro 16_ - .svg",
                                "/assets/last/MacBook Pro 16_ - 50.svg",
                                "/assets/last/MacBook Pro 16_ - 51.svg",
                                "/assets/last/MacBook Pro 16_ - 52.svg",
                                "/assets/last/MacBook Pro 16_ - 53.svg",
                                "/assets/last/MacBook Pro 16_ - 54.svg"
                            ];

                            // Show images in slideshow
                            let currentImage = 0;
                            function showNextImage() {
                                mScr.innerHTML = `<img src="${imagePaths[currentImage]}" alt="Image ${currentImage + 1}">`;
                                currentImage = (currentImage + 1) % imagePaths.length;
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
        let scr_9 = () => {
            mDta_main.screens.set(`scr_9`, {
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

        let scr_8 = () => {
            mDta_main.screens.set(`scr_8`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_9();
                        },
                    }
                }
            });
        };

        let scr_7 = () => {
            mDta_main.screens.set(`scr_7`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_8();
                        },
                    }
                }
            });
        };

        let scr_6 = () => {
            mDta_main.screens.set(`scr_6`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_7();
                        },
                    }
                }
            });
        };

        let scr_5 = () => {
            mDta_main.screens.set(`scr_5`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_6();
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

