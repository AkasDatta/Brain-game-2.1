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

                                js
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
                                // Robot talking animation:- [Starts]
                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        // "x": 26.5,
                                        // "y": 28,
                                        "e": mE,
                                        "src": `${m_asset_path}/robot_talking/robot_talking_1.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                // console.log(v.e);
                                                // v.e.style.visibility = "hidden";
                                                v.e.style.opacity = "0";
                                            }, 300);
                                        }
                                    });
                                }, 0);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/robot_talking/robot_talking_2.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                // v.e.style.opacity = "0";
                                                v.e.style.visibility = "hidden";
                                            }, 300);
                                        }
                                    });
                                }, 300);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/robot_talking/robot_talking_3.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.style.visibility = "hidden";
                                            }, 300);
                                        }
                                    });
                                }, 600);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/robot_talking/robot_talking_4.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.style.visibility = "hidden";
                                            }, 300);
                                        }
                                    });
                                }, 900);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/robot_talking/robot_talking_5.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.style.visibility = "hidden";
                                            }, 300);
                                        }
                                    });
                                }, 1200);

                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/robot_talking/robot_talking_6.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            setTimeout(() => {
                                                v.e.style.visibility = "hidden";
                                            }, 300);
                                        }
                                    });
                                }, 1500); // [Ends]

                                
                                // Robot Talking
                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/robot_talking/robot_talking_7.svg`
                                    }, {
                                        "onLoad": (v = {}) => {


                                            mArtBox_evnt.add_svg({
                                                "w": `20vw`,
                                                "h": `20vh`,
                                                "x": 18.5,
                                                "y": 20.9,
                                                "e": mE,
                                                "src": `${m_asset_path}/chat_bubble.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.opacity = "0";

                                                    setTimeout(() => {
                                                        anime({
                                                            opacity: 1,
                                                            targets: v.e,
                                                            scale: [0, 1],
                                                            duration: 300,
                                                            easing: 'easeInOutQuad'
                                                        })

                                                        setTimeout(() => {
                                                            mArtBox_evnt.add_svg({
                                                                "w": `9vw`,
                                                                "h": `10vh`,
                                                                "x": 23.5,
                                                                "y": 28,
                                                                "e": mE,
                                                                "src": `${m_asset_path}/robot_talking/now_it's_your_turn.svg`
                                                            }, {
                                                                "onLoad": (v = {}) => {
                                                                    
                                                                }
                                                            });
                                                        }, 500);

                                                    }, 500);

                                                    setTimeout(() => {
                                                        anime({
                                                            opacity: 0,
                                                            targets: v.e,
                                                            scale: [1, 0],
                                                            duration: 300,
                                                            easing: 'easeInOutQuad'
                                                        })
                                                    }, 3000);

                                                }
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `20vw`,
                                                "h": `20vh`,
                                                "x": 18.5,
                                                "y": 20.9,
                                                "e": mE,
                                                "src": `${m_asset_path}/chat_bubble.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.opacity = "0";

                                                    setTimeout(() => {
                                                        anime({
                                                            opacity: 1,
                                                            targets: v.e,
                                                            scale: [0, 1],
                                                            duration: 300,
                                                            easing: 'easeInOutQuad'
                                                        })

                                                        setTimeout(() => {
                                                            mArtBox_evnt.add_svg({
                                                                "w": `9vw`,
                                                                "h": `10vh`,
                                                                "x": 23.5,
                                                                "y": 28,
                                                                "e": mE,
                                                                "src": `${m_asset_path}/robot_talking/now_it's_your_turn.svg`
                                                            }, {
                                                                "onLoad": (v = {}) => {
                                                                    mArtBox_evnt.add_animation({
                                                                        "e": v.e,
                                                                        "type": "animate__slideInRight"
                                                                    });

                                                                    setTimeout(() => {
                                                                        v.e.style.visibility = "hidden";
                                                                    }, 1500);
                                                                }
                                                            });
                                                        }, 500);

                                                    }, 500);

                                                    setTimeout(() => {
                                                        anime({
                                                            opacity: 0,
                                                            targets: v.e,
                                                            scale: [1, 0],
                                                            duration: 300,
                                                            easing: 'easeInOutQuad'
                                                        })
                                                    }, 3000);

                                                }
                                            });
                                        }
                                    });
                                }, 1800);

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

