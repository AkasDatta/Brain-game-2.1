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
                                                v.e.style.transition = "transform .5s";
                                                v.e.remove();
                                                on_scr_end();
                                            }, 1500);
                                        }
                                    });
                                }, 1100);


                                // on_scr_end..
                                let on_scr_end = () => {
                                    //send cb..
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-2 -----------------------------
                    // {
                    //     "name": "Screen 2",
                    //     "key": "scr_2",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset the screen

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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {

                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/screen_before_ready.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `20vw`,
                    //                         "h": `20vh`,
                    //                         "x": 18.5,
                    //                         "y": 20.9,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/chat_bubble.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             v.e.style.opacity = "0";

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     opacity: 1,
                    //                                     targets: v.e,
                    //                                     scale: [0, 1],
                    //                                     duration: 300,
                    //                                     easing: 'easeInOutQuad'
                    //                                 })

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `9vw`,
                    //                                         "h": `6vh`,
                    //                                         "x": 23.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/ready.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 600);

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `3vw`,
                    //                                         "h": `8vh`,
                    //                                         "x": 26.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/1.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 1100);

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `4vw`,
                    //                                         "h": `8vh`,
                    //                                         "x": 26.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/2.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 1600);

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `4vw`,
                    //                                         "h": `8vh`,
                    //                                         "x": 26.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/3.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 2100);

                    //                             }, 500);

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     opacity: 0,
                    //                                     targets: v.e,
                    //                                     scale: [1, 0],
                    //                                     duration: 300,
                    //                                     easing: 'easeInOutQuad'
                    //                                 })
                    //                                 setTimeout(() => {
                    //                                    on_scr_end();
                    //                                 }, 600);
                    //                             }, 3500);
                    //                         }
                    //                     });

                    //                 }
                    //             });

                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 mScr.remove();
                    //                 //send cb..
                    //                 mSendCB(`on_scr_end`, {});
                    //             };

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },

                    // Screen-3 -----------------------------
                    // {
                    //     "name": "Screen 3",
                    //     "key": "scr_3",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;

                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             // Robot talking animation:- [Starts]
                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_1.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             // console.log(v.e);
                    //                             // v.e.style.visibility = "hidden";
                    //                             v.e.style.opacity = "0";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 0);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_2.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             // v.e.style.opacity = "0";
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 300);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_3.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 600);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_4.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 900);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_5.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 1200);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_6.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 1500); // [Ends]


                    //             // Robot text-bubble talking:--
                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/only_robot_and_bg.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         // game stats:-
                    //                         mArtBox_evnt.add_svg({ //score
                    //                             "w": `21vw`,
                    //                             "h": `16.5vh`,
                    //                             "x": 4.3,
                    //                             "y": 2,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/score.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 // v.e.style.opacity = "0";

                    //                                 setTimeout(() => {
                    //                                 }, 500);

                    //                             }
                    //                         });

                    //                         mArtBox_evnt.add_svg({ //round
                    //                             "w": `21vw`,
                    //                             "h": `16.5vh`,
                    //                             "x": 75,
                    //                             "y": 2,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/round.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 // v.e.style.opacity = "0";

                    //                                 setTimeout(() => {
                    //                                 }, 500);

                    //                             }
                    //                         });


                    //                         // text-bubble:-
                    //                         mArtBox_evnt.add_svg({ //bubble
                    //                             "w": `20vw`,
                    //                             "h": `20vh`,
                    //                             "x": 18.5,
                    //                             "y": 20.9,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/chat_bubble.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 v.e.style.opacity = "0";

                    //                                 setTimeout(() => {
                    //                                     anime({
                    //                                         opacity: 1,
                    //                                         targets: v.e,
                    //                                         scale: [0, 1],
                    //                                         duration: 300,
                    //                                         easing: 'easeInOutQuad'
                    //                                     })

                    //                                     setTimeout(() => {
                    //                                         mArtBox_evnt.add_svg({ //text - your turn
                    //                                             "w": `9vw`,
                    //                                             "h": `10vh`,
                    //                                             "x": 23.5,
                    //                                             "y": 27.5,
                    //                                             "e": mE,
                    //                                             "src": `${m_asset_path}/robot_talking/now_it's_your_turn.svg`
                    //                                         }, {
                    //                                             "onLoad": (v = {}) => {
                    //                                                 mArtBox_evnt.add_animation({
                    //                                                     "e": v.e,
                    //                                                     "type": "animate__slideInRight"
                    //                                                 });
                    //                                             }
                    //                                         });
                    //                                     }, 500);

                    //                                 }, 500);

                    //                                 // bubbleHide(v.e);

                    //                             }
                    //                         });
                    //                         // ---------|


                    //                         // Mic's:-
                    //                         mArtBox_evnt.add_svg({ //AI mic unmuted
                    //                             "w": `21vw`,
                    //                             "h": `16.5vh`,
                    //                             "x": 26.5,
                    //                             "y": 80,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/AI_mic_unmuted.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 let aIMicMute = () => {
                    //                                     v.e.style.opacity = "0";
                    //                                 }
                    //                                 mArtBox_evnt.add_svg({ //Player micc muted
                    //                                     "w": `21vw`,
                    //                                     "h": `16.5vh`,
                    //                                     "x": 52.8,
                    //                                     "y": 80,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/player_mic_muted.svg`
                    //                                 }, {
                    //                                     "onLoad": (v = {}) => {
                    //                                         v.e.style.cursor = "pointer";
                    //                                     },
                    //                                     "onClick": (v = {}) => {
                    //                                         v.e.style.display = "none";
                    //                                         aIMicMute()

                    //                                         mArtBox_evnt.add_svg({ //AI mic muted
                    //                                             "w": `21vw`,
                    //                                             "h": `16.5vh`,
                    //                                             "x": 26.5,
                    //                                             "y": 80,
                    //                                             "e": mE,
                    //                                             "src": `${m_asset_path}/AI_mic_muted.svg`
                    //                                         }, {
                    //                                             "onLoad": (v = {}) => {
                    //                                                 v.e.style.zIndex = "100";
                    //                                             }
                    //                                         });

                    //                                         mArtBox_evnt.add_svg({ //Player mic unmuted
                    //                                             "w": `21vw`,
                    //                                             "h": `16.5vh`,
                    //                                             "x": 52.8,
                    //                                             "y": 80,
                    //                                             "e": mE,
                    //                                             "src": `${m_asset_path}/player_mic_unmuted.svg`
                    //                                         }, {
                    //                                             "onLoad": (v = {}) => {
                    //                                                 v.e.style.zIndex = "100";
                    //                                                 setTimeout(() => {
                    //                                                     on_scr_end();
                    //                                                 }, 2000);
                    //                                             }
                    //                                         });
                    //                                     }
                    //                                 });
                    //                             }

                    //                         });
                    //                         // ----------|

                    //                     }
                    //                 });
                    //             }, 1800);
                    //             // -------------|

                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 let timeline = anime.timeline();
                    //                 timeline.add({
                    //                     targets: mScr,
                    //                     opacity: 0,
                    //                     duration: 1500,
                    //                     easing: 'easeOutExpo',
                    //                     update: function (anim) {
                    //                         if (anim.progress > 0) {
                    //                             anime.remove(mScr);
                    //                             //send cb..
                    //                             mSendCB(`on_scr_end`, {});
                    //                         }
                    //                     },
                    //                 });
                    //             };
                    //         };


                    //         mSet(mScr);
                    //     }
                    // },

                    // Screen-4 -----------------------------
                    // {
                    //     "name": "Screen 4",
                    //     "key": "scr_4",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset

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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             // Robot text-bubble talking:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/only_robot_and_bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     // text-bubble - 1st:-
                    //                     mArtBox_evnt.add_svg({ //bubble
                    //                         "w": `20vw`,
                    //                         "h": `20vh`,
                    //                         "x": 18.5,
                    //                         "y": 20.9,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/chat_bubble.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                             setTimeout(() => {
                    //                                 mArtBox_evnt.add_svg({ //text - your turn
                    //                                     "w": `9vw`,
                    //                                     "h": `10vh`,
                    //                                     "x": 23.5,
                    //                                     "y": 27.5,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/robot_talking/now_it's_your_turn.svg`
                    //                                 }, {
                    //                                     "onLoad": (v = {}) => {
                    //                                         mArtBox_evnt.add_animation({
                    //                                             "e": v.e,
                    //                                             "type": "animate__slideOutRight"
                    //                                         });
                    //                                         setTimeout(() => {
                    //                                             v.e.style.opacity = "0";
                    //                                         }, 300);
                    //                                     }
                    //                                 });
                    //                             }, 500);

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     opacity: 0,
                    //                                     targets: v.e,
                    //                                     scale: [1, 0],
                    //                                     duration: 300,
                    //                                     easing: 'easeInOutQuad'
                    //                                 })
                    //                             }, 1000);

                    //                         }
                    //                     });
                    //                     // ---------|


                    //                     // game stats:-
                    //                     mArtBox_evnt.add_svg({ //score
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 4.3,
                    //                         "y": 2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/score.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                             setTimeout(() => {
                    //                                 v.e.style.opacity = "0";
                    //                                 v.e.style.transition = "transform .5s";
                                                    
                    //                                 mArtBox_evnt.add_svg({
                    //                                     "w": `25vw`,
                    //                                     "h": `16.5vh`,
                    //                                     "x": 4.3,
                    //                                     "y": 2,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/score_20.svg`
                    //                                 });

                    //                             }, 3000);

                    //                             // text-bubble - 2nd:-
                    //                             setTimeout(() => {
                    //                                 mArtBox_evnt.add_svg({ //bubble
                    //                                     "w": `20vw`,
                    //                                     "h": `20vh`,
                    //                                     "x": 18.5,
                    //                                     "y": 20.9,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/chat_bubble.svg`
                    //                                 }, {
                    //                                     "onLoad": (v = {}) => {
                    //                                         v.e.style.opacity = "0";

                    //                                         setTimeout(() => {
                    //                                             anime({
                    //                                                 opacity: 1,
                    //                                                 targets: v.e,
                    //                                                 scale: [0, 1],
                    //                                                 duration: 300,
                    //                                                 easing: 'easeInOutQuad'
                    //                                             })

                    //                                             setTimeout(() => {
                    //                                                 mArtBox_evnt.add_svg({ //text - Congrats
                    //                                                     "w": `12vw`,
                    //                                                     "h": `8vh`,
                    //                                                     "x": 22.5,
                    //                                                     "y": 27.5,
                    //                                                     "e": mE,
                    //                                                     "src": `${m_asset_path}/robot_talking/congrats_it's_correct.svg`
                    //                                                 }, {
                    //                                                     "onLoad": (v = {}) => {
                    //                                                         mArtBox_evnt.add_animation({
                    //                                                             "e": v.e,
                    //                                                             "type": "animate__slideInRight"
                    //                                                         });
                    //                                                     }
                    //                                                 });
                    //                                             }, 500);

                    //                                         }, 500);
                    //                                     }
                    //                                 });
                    //                             }, 3000);
                    //                             // ---------|

                    //                         }
                    //                     });

                    //                     mArtBox_evnt.add_svg({ //round
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 75,
                    //                         "y": 2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/round.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             // v.e.style.opacity = "0";

                    //                             setTimeout(() => {
                    //                             }, 500);

                    //                         }
                    //                     });
                    //                     // ---------|


                    //                     // Mic's:-
                    //                     mArtBox_evnt.add_svg({ //AI mic muted
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 26.5,
                    //                         "y": 80,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/AI_mic_muted.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             setTimeout(() => {
                    //                                 v.e.style.opacity = "0";
                    //                             }, 5000);
                    //                         }
                    //                     });

                    //                     mArtBox_evnt.add_svg({ //Player mic unmuted
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 52.8,
                    //                         "y": 80,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/player_mic_unmuted.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             setTimeout(() => {
                    //                                 v.e.style.opacity = "0";
                    //                             }, 5000);
                    //                         }
                    //                     });
                    //                     // ----------|

                    //                     // Answer Preview:-
                    //                     setTimeout(() => {
                    //                         mArtBox_evnt.add_svg({
                    //                             "w": `96vw`,
                    //                             "h": `40vh`,
                    //                             "x": 2,
                    //                             "y": 58,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/answer_preview_muted.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 setTimeout(() => {
                    //                                     v.e.style.opacity = "0";
                    //                                     v.e.style.transition = "transform .5s";
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `96vw`,
                    //                                         "h": `40vh`,
                    //                                         "x": 2,
                    //                                         "y": 58,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/answer_preview_unmuted.svg`
                    //                                     });
                    //                                 }, 2000);

                    //                                 setTimeout(() => {
                    //                                     on_scr_end();
                    //                                 }, 4500);
                    //                             }
                    //                         });
                    //                     }, 5000);
                    //                     // -----------|

                    //                 }
                    //             });

                    //         };

                    //         // on_scr_end..
                    //         let on_scr_end = () => {
                    //             let timeline = anime.timeline();
                    //             timeline.add({
                    //                 targets: mScr,
                    //                 opacity: 0,
                    //                 duration: 1500,
                    //                 easing: 'easeOutExpo',
                    //                 update: function (anim) {
                    //                     if (anim.progress > 0) {
                    //                         anime.remove(mScr);
                    //                         mScr.remove();
                    //                         //send cb..
                    //                         mSendCB(`on_scr_end`, {});
                    //                     }
                    //                 },
                    //             });
                    //         };

                    //         mSet(mScr);
                    //     }
                    // },

                    // Again Start from loading:
                    // Screen-5 -----------------------------
                    // {
                    //     "name": "Screen 5",
                    //     "key": "scr_5",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

                    //         // mSendCB..
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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {


                    //             // Loading:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/loading/loading_0.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     setTimeout(() => {
                    //                         // v.e.style.visibility = `hidden`;
                    //                         // v.e.style.display= `none`;
                    //                         v.e.remove();
                    //                     }, 600);
                    //                 }
                    //             });

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/loading/loading_1.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.remove();
                    //                         }, 700);
                    //                     }
                    //                 });
                    //             }, 700);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/loading/loading_2.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.remove();
                    //                         }, 800);
                    //                     }
                    //                 });
                    //             }, 800);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/loading/loading_3.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.remove();
                    //                         }, 900);
                    //                     }
                    //                 });
                    //             }, 900);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/loading/loading_4.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.remove();
                    //                         }, 1000);
                    //                     }
                    //                 });
                    //             }, 1000);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     // "x": 30,
                    //                     // "y": 70,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/loading/loading_5.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.transition = "transform .5s";
                    //                             v.e.remove();
                    //                             on_scr_end();
                    //                         }, 1500);
                    //                     }
                    //                 });
                    //             }, 1100);


                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 mScr.remove();
                    //                 //send cb..
                    //                 mSendCB(`on_scr_end`, {});
                    //             };
                    //         };

                    //         mSet(mScr);
                    //     }
                    // },

                    // Screen-6 ------------------------------
                    // {
                    //     "name": "Screen 6",
                    //     "key": "scr_6",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;

                    //         //set..
                    //         let mSet = (mE = document.body) => {

                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/screen_before_ready.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `20vw`,
                    //                         "h": `20vh`,
                    //                         "x": 18.5,
                    //                         "y": 20.9,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/chat_bubble.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             v.e.style.opacity = "0";

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     opacity: 1,
                    //                                     targets: v.e,
                    //                                     scale: [0, 1],
                    //                                     duration: 300,
                    //                                     easing: 'easeInOutQuad'
                    //                                 })

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `9vw`,
                    //                                         "h": `6vh`,
                    //                                         "x": 23.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/ready.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 500);

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `3vw`,
                    //                                         "h": `8vh`,
                    //                                         "x": 26.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/1.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 1100);

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `4vw`,
                    //                                         "h": `8vh`,
                    //                                         "x": 26.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/2.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 1600);

                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `4vw`,
                    //                                         "h": `8vh`,
                    //                                         "x": 26.5,
                    //                                         "y": 28,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/3.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 v.e.style.visibility = "hidden";
                    //                                             }, 500);
                    //                                         }
                    //                                     });
                    //                                 }, 2100);

                    //                             }, 500);

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     opacity: 0,
                    //                                     targets: v.e,
                    //                                     scale: [1, 0],
                    //                                     duration: 300,
                    //                                     easing: 'easeInOutQuad'
                    //                                 })
                    //                                 on_scr_end();
                    //                             }, 3500);
                    //                         }
                    //                     });

                    //                 }
                    //             });

                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 setTimeout(() => {
                    //                     mScr.remove();
                    //                     //send cb..
                    //                     mSendCB(`on_scr_end`, {});
                    //                 }, 500);
                    //             };

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },

                    // Screen-7 ------------------------------
                    // {
                    //     "name": "Screen 7",
                    //     "key": "scr_7",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             // Robot talking animation:- [Starts]
                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_1.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             // console.log(v.e);
                    //                             // v.e.style.visibility = "hidden";
                    //                             v.e.style.opacity = "0";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 0);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_2.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             // v.e.style.opacity = "0";
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 300);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_3.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 600);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_4.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 900);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_5.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 1200);

                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/robot_talking/robot_talking_6.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         setTimeout(() => {
                    //                             v.e.style.visibility = "hidden";
                    //                         }, 300);
                    //                     }
                    //                 });
                    //             }, 1500); // [Ends]


                    //             // Robot text-bubble talking:--
                    //             setTimeout(() => {
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `100vw`,
                    //                     "h": `100vh`,
                    //                     "x": 0,
                    //                     "y": 0,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/only_robot_and_bg.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         // game stats:-
                    //                         mArtBox_evnt.add_svg({ //score
                    //                             "w": `21vw`,
                    //                             "h": `16.5vh`,
                    //                             "x": 4.3,
                    //                             "y": 2,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/score.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 // v.e.style.opacity = "0";

                    //                                 setTimeout(() => {
                    //                                 }, 500);

                    //                             }
                    //                         });

                    //                         mArtBox_evnt.add_svg({ //round
                    //                             "w": `21vw`,
                    //                             "h": `16.5vh`,
                    //                             "x": 75,
                    //                             "y": 2,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/round.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 // v.e.style.opacity = "0";

                    //                                 setTimeout(() => {
                    //                                 }, 500);

                    //                             }
                    //                         });


                    //                         // text-bubble:-
                    //                         mArtBox_evnt.add_svg({ //bubble
                    //                             "w": `20vw`,
                    //                             "h": `20vh`,
                    //                             "x": 18.5,
                    //                             "y": 20.9,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/chat_bubble.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 v.e.style.opacity = "0";

                    //                                 setTimeout(() => {
                    //                                     anime({
                    //                                         opacity: 1,
                    //                                         targets: v.e,
                    //                                         scale: [0, 1],
                    //                                         duration: 300,
                    //                                         easing: 'easeInOutQuad'
                    //                                     })

                    //                                     setTimeout(() => {
                    //                                         mArtBox_evnt.add_svg({ //text - your turn
                    //                                             "w": `9vw`,
                    //                                             "h": `10vh`,
                    //                                             "x": 23.5,
                    //                                             "y": 27.5,
                    //                                             "e": mE,
                    //                                             "src": `${m_asset_path}/robot_talking/now_it's_your_turn.svg`
                    //                                         }, {
                    //                                             "onLoad": (v = {}) => {
                    //                                                 mArtBox_evnt.add_animation({
                    //                                                     "e": v.e,
                    //                                                     "type": "animate__slideInRight"
                    //                                                 });
                    //                                             }
                    //                                         });
                    //                                     }, 500);

                    //                                 }, 500);

                    //                                 // bubbleHide(v.e);

                    //                             }
                    //                         });
                    //                         // ---------|


                    //                         // Mic's:-
                    //                         mArtBox_evnt.add_svg({ //AI mic unmuted
                    //                             "w": `21vw`,
                    //                             "h": `16.5vh`,
                    //                             "x": 26.5,
                    //                             "y": 80,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/AI_mic_unmuted.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 let aIMicMute = () => {
                    //                                     v.e.style.opacity = "0";
                    //                                 }
                    //                                 mArtBox_evnt.add_svg({ //Player micc muted
                    //                                     "w": `21vw`,
                    //                                     "h": `16.5vh`,
                    //                                     "x": 52.8,
                    //                                     "y": 80,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/player_mic_muted.svg`
                    //                                 }, {
                    //                                     "onLoad": (v = {}) => {
                    //                                         v.e.style.cursor = "pointer";
                    //                                     },
                    //                                     "onClick": (v = {}) => {
                    //                                         v.e.style.display = "none";
                    //                                         aIMicMute()

                    //                                         mArtBox_evnt.add_svg({ //AI mic muted
                    //                                             "w": `21vw`,
                    //                                             "h": `16.5vh`,
                    //                                             "x": 26.5,
                    //                                             "y": 80,
                    //                                             "e": mE,
                    //                                             "src": `${m_asset_path}/AI_mic_muted.svg`
                    //                                         }, {
                    //                                             "onLoad": (v = {}) => {
                    //                                                 v.e.style.zIndex = "100";
                    //                                             }
                    //                                         });

                    //                                         mArtBox_evnt.add_svg({ //Player mic unmuted
                    //                                             "w": `21vw`,
                    //                                             "h": `16.5vh`,
                    //                                             "x": 52.8,
                    //                                             "y": 80,
                    //                                             "e": mE,
                    //                                             "src": `${m_asset_path}/player_mic_unmuted.svg`
                    //                                         }, {
                    //                                             "onLoad": (v = {}) => {
                    //                                                 v.e.style.zIndex = "100";
                    //                                                 setTimeout(() => {
                    //                                                     on_scr_end();
                    //                                                 }, 2000);
                    //                                             }
                    //                                         });
                    //                                     }
                    //                                 });
                    //                             }

                    //                         });
                    //                         // ----------|

                    //                     }
                    //                 });
                    //             }, 1800);
                    //             // -------------|

                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 let timeline = anime.timeline();
                    //                 timeline.add({
                    //                     targets: mScr,
                    //                     opacity: 0,
                    //                     duration: 2000,
                    //                     easing: 'easeOutExpo',
                    //                     update: function (anim) {
                    //                         if (anim.progress > 0) {
                    //                             anime.remove(mScr);
                    //                             mScr.remove();
                    //                             //send cb..
                    //                             mSendCB(`on_scr_end`, {});
                    //                         }
                    //                     },
                    //                 });
                    //             };

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },

                    // Screen-8 ------------------------------
                    // {
                    //     "name": "Screen 8",
                    //     "key": "scr_8",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             // Robot text-bubble talking:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/only_robot_and_bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     // text-bubble - 1st:-
                    //                     mArtBox_evnt.add_svg({ //bubble
                    //                         "w": `20vw`,
                    //                         "h": `20vh`,
                    //                         "x": 18.5,
                    //                         "y": 20.9,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/chat_bubble.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                             setTimeout(() => {
                    //                                 mArtBox_evnt.add_svg({ //text - your turn
                    //                                     "w": `9vw`,
                    //                                     "h": `10vh`,
                    //                                     "x": 23.5,
                    //                                     "y": 27.5,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/robot_talking/now_it's_your_turn.svg`
                    //                                 }, {
                    //                                     "onLoad": (v = {}) => {
                    //                                         mArtBox_evnt.add_animation({
                    //                                             "e": v.e,
                    //                                             "type": "animate__fadeOutRight"
                    //                                         });
                    //                                         setTimeout(() => {
                    //                                             v.e.style.opacity = "0";
                    //                                         }, 300);
                    //                                     }
                    //                                 });
                    //                             }, 0);

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     opacity: 0,
                    //                                     targets: v.e,
                    //                                     scale: [1, 0],
                    //                                     duration: 300,
                    //                                     easing: 'easeInOutQuad'
                    //                                 })
                    //                             }, 1000);

                    //                         }
                    //                     });
                    //                     // ---------|


                    //                     // game stats:-
                    //                     mArtBox_evnt.add_svg({ //score
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 4.3,
                    //                         "y": 2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/score.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                             setTimeout(() => {
                    //                                 v.e.style.opacity = "0";
                    //                                 mArtBox_evnt.add_svg({
                    //                                     "w": `25vw`,
                    //                                     "h": `16.5vh`,
                    //                                     "x": 4.3,
                    //                                     "y": 2,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/score_20.svg`
                    //                                 });

                    //                             }, 3000);

                    //                             // text-bubble - 2nd:-
                    //                             setTimeout(() => {
                    //                                 mArtBox_evnt.add_svg({ //bubble
                    //                                     "w": `20vw`,
                    //                                     "h": `20vh`,
                    //                                     "x": 18.5,
                    //                                     "y": 20.9,
                    //                                     "e": mE,
                    //                                     "src": `${m_asset_path}/chat_bubble.svg`
                    //                                 }, {
                    //                                     "onLoad": (v = {}) => {
                    //                                         v.e.style.opacity = "0";

                    //                                         setTimeout(() => {
                    //                                             anime({
                    //                                                 opacity: 1,
                    //                                                 targets: v.e,
                    //                                                 scale: [0, 1],
                    //                                                 duration: 300,
                    //                                                 easing: 'easeInOutQuad'
                    //                                             })

                    //                                             setTimeout(() => {
                    //                                                 mArtBox_evnt.add_svg({ //text - Congrats
                    //                                                     "w": `12vw`,
                    //                                                     "h": `8vh`,
                    //                                                     "x": 22.5,
                    //                                                     "y": 27.5,
                    //                                                     "e": mE,
                    //                                                     "src": `${m_asset_path}/robot_talking/congrats_it's_correct.svg`
                    //                                                 }, {
                    //                                                     "onLoad": (v = {}) => {
                    //                                                         mArtBox_evnt.add_animation({
                    //                                                             "e": v.e,
                    //                                                             "type": "animate__fadeInRight"
                    //                                                         });
                    //                                                     }
                    //                                                 });
                    //                                             }, 500);

                    //                                         }, 500);
                    //                                     }
                    //                                 });
                    //                             }, 3000);
                    //                             // ---------|

                    //                         }
                    //                     });

                    //                     mArtBox_evnt.add_svg({ //round
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 75,
                    //                         "y": 2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/round.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             // v.e.style.opacity = "0";

                    //                             setTimeout(() => {
                    //                             }, 500);

                    //                         }
                    //                     });
                    //                     // ---------|


                    //                     // Mic's:-
                    //                     mArtBox_evnt.add_svg({ //AI mic muted
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 26.5,
                    //                         "y": 80,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/AI_mic_muted.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     targets: v.e,
                    //                                     translateX: 108,
                    //                                     easing: 'easeInOutSine'
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.style.opacity = "0";
                    //                                 }, 800);
                    //                             }, 5000);
                    //                         }
                    //                     });

                    //                     mArtBox_evnt.add_svg({ //Player mic unmuted
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 52.8,
                    //                         "y": 80,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/player_mic_unmuted.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     targets: v.e,
                    //                                     translateX: -108,
                    //                                     easing: 'easeInOutSine'
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.style.opacity = "0";
                    //                                 }, 800);
                    //                             }, 5000);
                    //                         }
                    //                     });
                    //                     // ----------|

                    //                     // Answer Preview:-
                    //                     setTimeout(() => {
                    //                         mArtBox_evnt.add_svg({
                    //                             "w": `30vw`,
                    //                             "h": `16.5vh`,
                    //                             "x": 35,
                    //                             "y": 80,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/merged_mic_container.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 setTimeout(() => {
                    //                                     v.e.style.opacity = "0";
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `13vw`,
                    //                                         "h": `16.5vh`,
                    //                                         "x": 43,
                    //                                         "y": 80,
                    //                                         "e": mE,
                    //                                         "src": `${m_asset_path}/rotated_rectangle_small.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             setTimeout(() => {
                    //                                                 on_scr_end();
                    //                                             }, 1000);
                    //                                         }
                    //                                     });

                    //                                 }, 1000);

                    //                             }
                    //                         });
                    //                     }, 5500);
                    //                     // -----------|
                    //                 }
                    //             });

                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 let timeline = anime.timeline();
                    //                 timeline.add({
                    //                     targets: mScr,
                    //                     opacity: 0,
                    //                     duration: 3000,
                    //                     easing: 'easeOutExpo',
                    //                     update: function (anim) {
                    //                         if (anim.progress > 0) {
                    //                             anime.remove(mScr);
                    //                             mScr.remove();
                    //                             //send cb..
                    //                             mSendCB(`on_scr_end`, {});
                    //                         }
                    //                     },
                    //                 });
                    //             };
                    //             // ---------|

                    //         };

                    //         mSet(mScr);
                    //     }
                    // },

                    // Screen-9 ------------------------------
                    // {
                    //     "name": "Screen 9",
                    //     "key": "scr_9",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

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
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             // bg:-
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/only_robot_and_bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     // game stats:-
                    //                     mArtBox_evnt.add_svg({ //Score
                    //                         "w": `25vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 4.3,
                    //                         "y": 2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/score_20.svg`
                    //                     });

                    //                     mArtBox_evnt.add_svg({ //round
                    //                         "w": `21vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 75,
                    //                         "y": 2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/round.svg`
                    //                     });
                    //                     // ---------|

                    //                     // text-bubble - 2nd:-
                    //                     mArtBox_evnt.add_svg({ //bubble
                    //                         "w": `20vw`,
                    //                         "h": `20vh`,
                    //                         "x": 18.5,
                    //                         "y": 20.9,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/chat_bubble.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             mArtBox_evnt.add_svg({ //text - Congrats
                    //                                 "w": `12vw`,
                    //                                 "h": `8vh`,
                    //                                 "x": 22.5,
                    //                                 "y": 27.5,
                    //                                 "e": mE,
                    //                                 "src": `${m_asset_path}/robot_talking/congrats_it's_correct.svg`
                    //                             }, {
                    //                                 "onLoad": (v = {}) => {
                    //                                     setTimeout(() => {
                    //                                         mArtBox_evnt.add_animation({
                    //                                             "e": v.e,
                    //                                             "type": "animate__fadeOutRight"
                    //                                         });
                    //                                         setTimeout(() => {
                    //                                             v.e.style.opacity = "0";
                    //                                         }, 400);
                    //                                     }, 800);
                    //                                 }
                    //                             });

                    //                             setTimeout(() => {
                    //                                 v.e.style.opacity = "0";
                    //                             }, 1000);
                    //                         }
                    //                     });
                    //                     // ---------|

                    //                     // Answer Preview:-
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `13vw`,
                    //                         "h": `16.5vh`,
                    //                         "x": 43,
                    //                         "y": 80,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/rotated_rectangle_small.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             setTimeout(() => {
                    //                                 v.e.style.opacity = "0";
                    //                             }, 1000);

                    //                             mArtBox_evnt.add_svg({
                    //                                 "w": `13vw`,
                    //                                 "h": `16.5vh`,
                    //                                 "x": 43,
                    //                                 "y": 80,
                    //                                 "e": mE,
                    //                                 "src": `${m_asset_path}/rotated_rectangle_big.svg`
                    //                             }, {
                    //                                 "onLoad": (v = {}) => {
                    //                                     v.e.style.opacity = "0";
                    //                                     setTimeout(() => {
                    //                                         anime({
                    //                                             opacity: 1,
                    //                                             targets: v.e,
                    //                                             translateY: -250,
                    //                                             scale: 5.5,
                    //                                             duration: 800
                    //                                         });
                    //                                     }, 1000);
                    //                                 }
                    //                             });
                    //                             setTimeout(() => {
                    //                                 on_scr_end();
                    //                             }, 3000);
                    //                         }
                    //                     });
                    //                     // -----------|
                    //                 }
                    //             });

                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 let timeline = anime.timeline();
                    //                 timeline.add({
                    //                     targets: mScr,
                    //                     opacity: 0,
                    //                     duration: 3000,
                    //                     easing: 'easeOutExpo',
                    //                     update: function (anim) {
                    //                         if (anim.progress > 0) {
                    //                             anime.remove(mScr);
                    //                             mScr.remove();
                    //                             //send cb..
                    //                             mSendCB(`on_scr_end`, {});
                    //                         }
                    //                     },
                    //                 });
                    //             };
                    //             // ---------|

                    //         };

                    //         mSet(mScr);
                    //     }
                    // },

                    // Screen-10 ------------------------------
                    {
                        "name": "Screen 10",
                        "key": "scr_10",
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
                            mScr.style.position = "relative";

                            // Array of image sources
                            let imageSources = [
                                `${m_asset_path}/ai_rotated_previews/previews_bg.svg`,
                                `${m_asset_path}/ai_rotated_previews/intonation.svg`,
                                `${m_asset_path}/ai_rotated_previews/word_stress.svg`,
                                `${m_asset_path}/ai_rotated_previews/emphasis.svg`,
                                `${m_asset_path}/ai_rotated_previews/fluency.svg`,
                                `${m_asset_path}/ai_rotated_previews/hesitation.svg`,
                                `${m_asset_path}/ai_rotated_previews/Accent.svg`,
                            ];
                            let imageSources2 = [
                                `${m_asset_path}/ai_rotated_previews/intonation.svg`,
                                `${m_asset_path}/ai_rotated_previews/word_stress.svg`,
                                `${m_asset_path}/ai_rotated_previews/emphasis.svg`,
                                `${m_asset_path}/ai_rotated_previews/fluency.svg`,
                                `${m_asset_path}/ai_rotated_previews/hesitation.svg`,
                                `${m_asset_path}/ai_rotated_previews/Accent.svg`,
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
                                        if (currentImageIndex <= 5) {
                                            mArtBox_evnt.add_svg({
                                                "w": `48vw`,
                                                "h": `75vh`,
                                                "x": 26,
                                                "y": 12,
                                                "e": mScr,
                                                "src": imageSources2[currentImageIndex]
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    setTimeout(() => {
                                                        // console.log(currentImageIndex, imageSources2.length);
                                                        if (currentImageIndex <= 4) {
                                                            v.e.remove();
                                                        }

                                                        currentImageIndex++;
                                                        addImage(); // Add the next image
                                                    }, 1000); // Set the duration here (in milliseconds)
                                                }
                                            });
                                        } else {
                                            // All images have been displayed, trigger callback
                                            on_scr_end();
                                        }
                                    }
                                });
                            };

                            // Start adding images
                            addImage();

                            // on_scr_end..
                            let on_scr_end = () => {
                                let timeline = anime.timeline();
                                timeline.add({
                                    targets: mScr,
                                    opacity: 0,
                                    duration: 3000,
                                    easing: 'easeOutExpo',
                                    update: function (anim) {
                                        if (anim.progress > 0) {
                                            anime.remove(mScr);
                                            mScr.remove();
                                            //send cb..
                                            mSendCB(`on_scr_end`, {});
                                        }
                                    },
                                });
                            };
                            // ---------|

                        }
                    },

                    // Again_start:-
                    // Screen-11 ------------------------------
                    {
                        "name": "Screen 11",
                        "key": "scr_11",
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
                                        // mSendCB(`on_scr_end`, {});
                                    }, 500);
                                };
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
        let scr_11 = () => {
            mDta_main.screens.set(`scr_11`, {
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
        let scr_10 = () => {
            mDta_main.screens.set(`scr_10`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_11()
                        },
                    }
                }
            });
        };
        // let scr_9 = () => {
        //     mDta_main.screens.set(`scr_9`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_10()
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_8 = () => {
        //     mDta_main.screens.set(`scr_8`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_9();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_7 = () => {
        //     mDta_main.screens.set(`scr_7`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_8();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_6 = () => {
        //     mDta_main.screens.set(`scr_6`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_7();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_5 = () => {
        //     mDta_main.screens.set(`scr_5`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_6();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_4 = () => {
        //     mDta_main.screens.set(`scr_4`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_5();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_3 = () => {
        //     mDta_main.screens.set(`scr_3`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_4();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_2 = () => {
        //     mDta_main.screens.set(`scr_2`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_3();
        //                 },
        //             }
        //         }
        //     });
        // };

        mDta_main.screens.set(`scr_1`, {
            "e": mE, //Html-Element
            "value": {
                //here you can assign your variable based on your requirements..

                //callback..
                "cb": {
                    "on_scr_end": (p = {}) => {
                        scr_10();
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

