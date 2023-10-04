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
        
                                            }
                                        });
                                        
                                    }
                                });

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-3 -----------------------------
                    {
                        "name": "Screen 3",
                        "key": "scr_3",
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
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 3000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                    });
                                };
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
                                //set..[Svg].. 
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `96vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/8.12.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // //set..[Svg].. recommended
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `50vh`,
                                            "x": 40,
                                            "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/Rectangle9.svg`
                                        }
                                        );

                                        // //set..[Svg].. online
                                        mArtBox_evnt.add_svg({
                                            "w": `30vh`,
                                            "h": `5vh`,
                                            "x": 43.8,
                                            "y": 14,
                                            "e": mE,
                                            "src": `${m_asset_path}/Congratulations!.svg`
                                        }
                                        );

                                        // //set..[Svg].. grading
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `2vh`,
                                            "x": 47.5,
                                            "y": 20,
                                            "e": mE,
                                            "src": `${m_asset_path}/RoundCleared.svg`
                                        }
                                        );

                                        mArtBox_evnt.add_svg({
                                            "w": `55vh`,
                                            "h": `12vh`,
                                            "x": 37.5,
                                            "y": 26,
                                            "e": mE,
                                            "src": `${m_asset_path}/Vector74.svg`
                                        }
                                        );

                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 45,
                                            "y": 27.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star3.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 49.5,
                                            "y": 26.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star1.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 54,
                                            "y": 27.1,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star2.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `5vh`,
                                            "x": 47,
                                            "y": 44,
                                            "e": mE,
                                            "src": `${m_asset_path}/Score_ 49.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `3vh`,
                                            "x": 47,
                                            "y": 53,
                                            "e": mE,
                                            "src": `${m_asset_path}/Time_ 00_30.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 25,
                                            "y": 14,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 8,
                                            "y": 37,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 25,
                                            "y": 54,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 8,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `10vh`,
                                            "x": 40,
                                            "y": 72,
                                            "e": mE,
                                            "src": `${m_asset_path}/Rectangle3.svg`
                                        }
                                        );

                                        // btn:-
                                        mArtBox_evnt.add_svg({
                                            "w": `28vh`,
                                            "h": `4vh`,
                                            "x": 44,
                                            "y": 75,
                                            "e": mE,
                                            "src": `${m_asset_path}/NextRound.svg`
                                        }, {
                                            "onClick": (v = {}) => {
                                                nextRoundBtn();
                                            }
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 87,
                                            "y": 14,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 70,
                                            "y": 37,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 87,
                                            "y": 54,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 70,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        });

                                        let nextRoundBtn = () => {
                                            v.e.style.opacity = "0";
                                            v.e.remove();
                                            on_scr_end();
                                        }
                                    }
                                });

                                // on_scr_end..
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 3000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                    });
                                };

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
                                // Ready-set-go Loading:--


                                // on_scr_end..
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 3000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                    });
                                };

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-7 ------------------------------
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

